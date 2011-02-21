module EventsHelper
  require 'thucourse'
  require 'gcal4ruby/recurrence'
  require 'time'
  require 'pp'

   # Please check these time settings. Are they correct?
  COURSE_BEGINES = ["8:00", "9:50", "13:30", "15:20", "17:05", "19:20"]
  COURSE_ENDS = ["9:35", "11:25", "15:05", "16:55", "18:40", "20:55"]

  # TODO This should be configured for each semester so it's better
  # to be setted in a separate config file.
  # Note! This day is Sunday instead of Monday(since Monday is +1)
  FIRST_DAY_IN_SEMESTER = "2011-2-20"

  def xls2events(data, user_id)
    return false if data.nil? || data == ""
    class_set = CourseClass::parse_xls_from_data(data)
    class_set.each do |c|
      e = class2event(c, 1)
      query = Event.where(:name => e.name, :extra_info => e.extra_info, :begin => e.begin.utc)
      if query.exists?
        e = query.first
      else
        e.save
      end
      acc = Acceptance.new(:event_id => e.id, :user_id => user_id, :decision => Acceptance::DECISION_ACCEPTED)
      acc.save
    end
  end

  # Convert a course_class to an event created by creator_id
  def class2event(course_class, creator_id)
    event = Event.new(:name => course_class.name, :extra_info => course_class.extra_info, :location => course_class.location, :creator_id => creator_id)
    week_day = course_class.week_day
    day_time = course_class.day_time-1 # from 1..6 to 0..5
    # Note that week_day = 7 for Sunday so first Sunday class will be 6 days after the first Monday
    event.begin = Time.parse(FIRST_DAY_IN_SEMESTER + " " + COURSE_BEGINES[day_time]) + week_day.days
    event.end = Time.parse(FIRST_DAY_IN_SEMESTER + " " + COURSE_ENDS[day_time]) + week_day.days
    rrule = GCal4Ruby::Recurrence.new
    rrule.frequency = GCal4Ruby::Recurrence::WEEKLY_FREQUENCE
    rrule.set_day(week_day)
    rrule.count = 16
    if (course_class.week_modifier)
      case course_class.week_modifier
      when CourseClass::EVEN_WEEK
        rrule.count = 8
        rrule.interval = 2
        event.begin += 7.days
        event.end += 7.days
      when CourseClass::ODD_WEEK
        rrule.count = 8
        rrule.interval = 2
      when CourseClass::EARLIER_EIGHT
        rrule.count = 8
      when CourseClass::LATER_EIGHT
        rrule.count = 8
        event.begin += (7*8).days
        event.end += (7*8).days
      else
        if (matches = course_class.week_modifier.match CourseClass::SPECIAL_WEEK_MODIFIER_REGEX)
          from = matches[1].to_i-1
          to = matches[2].to_i-1
          rrule.count = to-from+1
          event.begin += (from*7).days
          event.end += (from*7).days
        end
      end
    end
    event.rrule = rrule.rrule
    return event
  end

  #go around time zone bug in calendar_date_selector
  #it seems no bug in calendar_date_selector. we should set config.time_zone = 'Beijing'
  def time_ruby2selector(event)
    #event.begin = event.begin + 8.hours unless event.begin.blank?
    #event.end = event.end + 8.hours unless event.end.blank?
  end

  def time_selector2ruby(event)
    #event.begin = event.begin - 8.hours unless event.begin.blank?
    #event.end = event.end - 8.hours unless event.end.blank?
  end

  def query_own_instance(time_begin, time_end, creator_id = current_user.id)
    Instance.where("creator_id = ? AND end >= ? AND begin <= ?", creator_id, time_begin.utc, time_end.utc).order("begin").to_a
    #modified by Wander 
  end

  def query_own_instance_includes_event(time_begin, time_end, creator_id = current_user.id)
    Instance.includes(:event).where("creator_id = ? AND end >= ? AND begin <= ?", creator_id, time_begin.utc, time_end.utc).order("begin").to_a
  end

  def query_next_own_instance_includes_event(current_time, limit_count, creator_id = current_user.id)
    Instance.includes(:event).where("creator_id = ? AND end >= ?", creator_id, current_time.utc).order("begin").limit(limit_count).to_a
  end

  def query_own_event(limit_from, limit_num, creator_id = current_user.id)
    Event.where("creator_id = ?", creator_id).limit(limit_num).offset(limit_from).order("begin").to_a
  end

  #TODO untested
  #TODO group?
  #user_sharing (uid, pri) -> sharing -> event -> instance (time begin/end)
  class SQLConstant
    SELECT_INSTANCE = "instances.*"
    SELECT_EVENT = "events.*"
    JOINS_BASE = 'INNER JOIN sharings ON sharings.id = user_sharings.sharing_id ' +
            'INNER JOIN events ON sharings.event_id = events.id ' +
            'LEFT OUTER JOIN acceptances ON acceptances.event_id = events.id AND acceptances.user_id = user_sharings.user_id '
    JOINS_INSTANCE = 'INNER JOIN instances ON instances.event_id = events.id'
    WHERE_USER_ID = "user_sharings.user_id = ?"
    WHERE_PRIORITY = "user_sharings.priority = ?"
    WHERE_TIME = "instances.end >= ? AND instances.begin <= ?"  #modified by Wander
    WHERE_ENDTIME = "instances.end >= ?"
    WHERE_DECISION = "acceptances.decision = ?"
    WHERE_DECISION_UNDECIDED = "acceptances.decision IS NULL"
    WHERE_ACCEPTANCE_USER = "acceptances.user_id = ?"
    WHERE_AND = ' AND '
  end

  def build_where(*w)
    w.join(SQLConstant::WHERE_AND)
  end

  # !readonly value returned
  def query_all_accepted_instance(time_begin, time_end, user_id = current_user.id)
    query_sharing_accepted_instance(time_begin, time_end, user_id) + query_own_instance(time_begin, time_end, user_id).to_a
  end

  def query_all_accepted_instance_includes_event(time_begin, time_end, user_id = current_user.id)
    (query_sharing_accepted_instance_includes_event(time_begin, time_end, user_id) + query_own_instance_includes_event(time_begin, time_end, user_id)).sort{|a, b| a.begin <=> b.begin}
  end

  def query_next_accepted_instance_includes_event(current_time, limit_count, user_id = current_user.id)
    (query_next_sharing_accepted_instance_includes_event(current_time, limit_count, user_id) +
        query_next_own_instance_includes_event(current_time, limit_count, user_id)).sort{|a, b| a.begin <=> b.begin}
  end

#  def query_sharing_accepted_instance_includes_event(time_begin, time_end, user_id = current_user.id)
#    ids = query_sharing_accepted_instance(time_begin, time_end, user_id).map{|i| i.id}
#    Instance.includes(:event).find(ids).to_a
#  end

  def query_next_sharing_accepted_instance_includes_event(current_time, limit_count, user_id = current_user.id)
    Instance.
      includes(:event).
      joins(:event => :acceptances).
      where(
        build_where(SQLConstant::WHERE_ENDTIME, SQLConstant::WHERE_ACCEPTANCE_USER, SQLConstant::WHERE_DECISION),
        current_time.utc,
        user_id,
        Acceptance::DECISION_ACCEPTED).
      order('instances.begin').limit(limit_count).
      to_a
  end
  
  def query_sharing_accepted_instance_includes_event(time_begin, time_end, user_id = current_user.id)
    Instance.
      includes(:event).
      joins(:event => :acceptances).
      where(
        build_where(SQLConstant::WHERE_TIME, SQLConstant::WHERE_ACCEPTANCE_USER, SQLConstant::WHERE_DECISION),
        time_begin.utc, time_end.utc,
        user_id,
        Acceptance::DECISION_ACCEPTED).
      order('instances.begin').
      to_a
  end

  def query_sharing_accepted_instance(time_begin, time_end, user_id = current_user.id)
    Instance.
      joins(:event => :acceptances).
      where(
        build_where(SQLConstant::WHERE_TIME, SQLConstant::WHERE_ACCEPTANCE_USER, SQLConstant::WHERE_DECISION),
        time_begin.utc, time_end.utc,
        user_id,
        Acceptance::DECISION_ACCEPTED).
      order('instances.begin').
      to_a
  end

#  # !readonly value returned
#  def query_sharing_accepted_instance(time_begin, time_end, user_id = current_user.id)
#    UserSharing.
#      select(SQLConstant::SELECT_INSTANCE).
#      joins(SQLConstant::JOINS_BASE + SQLConstant::JOINS_INSTANCE).
#      where(
#        build_where(SQLConstant::WHERE_USER_ID, SQLConstant::WHERE_DECISION, SQLConstant::WHERE_TIME),
#        user_id,
#        Acceptance::DECISION_ACCEPTED,
#        time_begin, time_end).to_a
#  end

  # !readonly value returned
  def query_sharing_event(priority = UserSharing::PRIORITY_INVITE, decision = Acceptance::DECISION_UNDECIDED, user_id = current_user.id)
    if decision == Acceptance::DECISION_UNDECIDED
      UserSharing.
        select(SQLConstant::SELECT_EVENT).
        joins(SQLConstant::JOINS_BASE).
        where(
          build_where(SQLConstant::WHERE_USER_ID, SQLConstant::WHERE_DECISION_UNDECIDED, SQLConstant::WHERE_PRIORITY),
          user_id,
          priority).to_a
    else
      UserSharing.
        select(SQLConstant::SELECT_EVENT).
        joins(SQLConstant::JOINS_BASE).
        where(
          build_where(SQLConstant::WHERE_USER_ID, SQLConstant::WHERE_DECISION, SQLConstant::WHERE_PRIORITY),
          user_id,
          decision,
          priority).to_a
    end
  end


  #for views
  def frequency_radio_buttons(form)
    frequences = [GCal4Ruby::Recurrence::NONE_FREQUENCY]
    frequences.concat GCal4Ruby::Recurrence::FREQUENCES

    result = ""
    frequences.each do |freq|
      result += form.radio_button :rrule_frequency, freq,
                :onClick => "show_repeat_options('#{freq}')"
      result += label_tag "event_rrule_frequency_#{freq.downcase}",
                I18n.t("tongshare.event.recurrence.#{freq.downcase}")
      result += "&nbsp;&nbsp;"
    end

    result.html_safe
  end

  def days_check_boxes(form)
    result = ""
    for i in 0..6
      result += form.check_box "rrule_days", {:multiple => true}, i, nil
      result += label_tag "event_rrule_days_#{i}", I18n.t("date.abbr_day_names")[i]
      result += "&nbsp;&nbsp;"
    end

    result.html_safe
  end

  def friendly_day(time)
    time_day_time = time.beginning_of_day
    now_day_time = Time.now.beginning_of_day
    diff_day = (time_day_time.to_i - now_day_time.to_i)/3600/24
    return "" if diff_day == 0
    names = I18n.t('date.num_day_names')
    if (diff_day >= 0 && diff_day < names.size)
      return names[diff_day] + " "
    else
      return I18n.l(time, :format => :date_only) + " "
    end
  end

  # 同一年会返回空字符串，否则返回"XXXX "
  def friendly_year(time)
    return (time.year == Time.now.year ? "" : time.year.to_s + " ")
  end

  def friendly_time_range(from, to = nil)
    from = from.localtime
    to = to.localtime if to
    ret = friendly_year(from) + friendly_day(from) + I18n.l(from, :format => :time_only)
    if !to.nil?
      ret += " - "
      if from.beginning_of_day != to.beginning_of_day
        ret += friendly_year(to) + friendly_day(to)
      end
      ret += I18n.l(to, :format => :time_only)
    end
    ret
  end

  # Returns attendees friendly names. If only self, empty array will be returned.
  def get_attendees(event)
    users = []
    users << event.creator unless event.creator.id == 1
    
    for acceptance in event.acceptances
      users << acceptance.user
    end

    return [] if (users.size == 1 && users[0].id == current_user.id)

    pp users

    result = []
    for user in users
      result << user.friendly_name.html_safe
    end

    return result
  end

  def find_acceptance(event, user = current_user)
    event.acceptances.find(:first, :conditions => ["user_id = ?", user.id])
  end

  def show_friendly_rrule(event) #TODO i18n
    rrule = event.rrule
    return "" if rrule.nil? || rrule == ""
    rec = GCal4Ruby::Recurrence.new
    rec.from_rrule(rrule)
    if (rec.frequency == GCal4Ruby::Recurrence::WEEKLY_FREQUENCE)
      interval_string = rec.interval.to_s
      interval_string = "" if (interval_string == "1")
      days = []
      for i in 0...7
        days << (I18n.t 'date.abbr_day_names')[i] if rec.day[i]
      end
      day_string = days.join("、")
      result = sprintf("每%s周的周%s", interval_string, day_string)
      result << sprintf("，至%s", I18n.l(rec.repeat_until)) if rec.repeat_until
      result << sprintf("，共%d次", rec.count) if rec.count
      return result
    else
      interval_string = rec.interval.to_s
      interval_string = "" if (interval_string == "1")
      result = sprintf("每%s天", interval_string)
      result << sprintf("，至%s", I18n.l(rec.repeat_until)) if rec.repeat_until
      result << sprintf("，共%d次", rec.count) if rec.count
      return result
    end
    return ""
  end

end
