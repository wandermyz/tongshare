#!/usr/bin/ruby
require 'rubygems'
require 'parseexcel'
require 'iconv'
require 'pp'

class Course
  VALID_WEEK_MODIFIERS = ["全周", "双周", "单周", "前八周", "后八周"]
  VALID_SECOND_ROW = ",星期一,星期二,星期三,星期四,星期五,星期六,星期日"

  attr_accessor :course_set
  attr_accessor :name
  attr_accessor :teacher
  attr_accessor :location
  attr_accessor :day_times # subset of 1..6, 第1..6节
  attr_accessor :week_days # subset of 1..7，星期一..星期日
  attr_accessor :week_modifier # "全周", "双周", "单周", "前八周", "后八周"

  def initialize(course_set)
    @course_set = course_set
    @name = "Default Course Name"
    @week_days = []
    @day_times = []
  end

  def Course.add(week_day, day_time, spec, course_set)
    if (result = spec.match(/(.*)\((.*)\)/))
      name = result[1];
      extra = result[2];
      course_set[name] = Course.new(course_set) unless course_set[name]
      course = course_set[name]
      course.name = name
      options = extra.split("；")
      course.teacher = options.first
      course.location = options.last
      for i in 1...options.size-1
        course.week_modifier = options[i] if VALID_WEEK_MODIFIERS.include? options[i]
      end
      course.day_times << day_time
      course.week_days << week_day
    end
  end

  def Course.parse_table(table)
    #check table first, a sample valid csv table is like
    #
    #  ,,,,实验课课表
    #,星期一,星期二,星期三,星期四,星期五,星期六,星期日
    #第1节,数值分析(喻文健；限选；全周；六教6C201),,计算机图形学基础(胡事民；限选；全周；六教6A017),,密码学及安全计算(陈震；限选；全周；六教6A309),,
    #第2节,,,计算机网络原理(吴建平；必修；全周；一教201),计算机系统结构(汪东升；必修；全周；六教6A017),毛泽东思想和中国特色社会主义理论体系概论(冯务中；必修；全周；一教104),,
    #第3节,,三年级男生网球(刘波；全周；综合馆西网球场),软件工程(白晓颖；限选；全周；四教4305),,,,
    #第4节,,计算机软件前沿技术(蔡懿慈；限选；前八周；六教6A113),软件工程(白晓颖；限选；全周；四教4305),数值分析(喻文健；限选；双周；六教6C201),,,
    #第5节,,,,,,,
    #第6节,,,,,,,
    valid_table = (table.size >= 8 && table[1].join(',') == VALID_SECOND_ROW);
    if (!valid_table) # TODO raise Exception
      puts "Not a valid table! Your table is:"
      pp table
      return nil
    end
    course_set = {}
    for day_time in 1..6
      for week_day in 1..7
        row_index = day_time+2-1
        col_index = week_day+1-1
        spec = table[row_index][col_index]
        Course.add(week_day, day_time, spec, course_set) if spec
      end
    end
    return course_set
  end
end

def xls2table(filename)
  result = []
  xls = Spreadsheet::ParseExcel.parse(filename)
  sheet = xls.worksheet(0)
  sheet.each do |row|
    parsed_row = []
    row.each do |cell|
      if (cell)
        str = Iconv.iconv('utf-8', cell.encoding, cell.to_s)[0]
      else
        str = nil
      end
      parsed_row << str
    end
    result << parsed_row
  end
  return result
end

