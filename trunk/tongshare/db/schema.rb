# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110208152947) do

  create_table "acceptances", :force => true do |t|
    t.integer  "event_id"
    t.integer  "user_id"
    t.integer  "decision"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "admin_extras", :force => true do |t|
    t.integer  "user_id"
    t.boolean  "is_forbidden"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "events", :force => true do |t|
    t.string   "name"
    t.datetime "begin"
    t.datetime "end"
    t.string   "location"
    t.text     "extra_info"
    t.integer  "creator_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "rrule"
  end

  create_table "group_sharings", :force => true do |t|
    t.integer  "sharing_id"
    t.integer  "group_id"
    t.integer  "priority"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "groups", :force => true do |t|
    t.string   "name"
    t.text     "extra_info"
    t.string   "identifier"
    t.integer  "creator_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "memberships", :force => true do |t|
    t.integer  "group_id"
    t.integer  "user_id"
    t.integer  "power"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "reminders", :force => true do |t|
    t.integer  "method_type"
    t.integer  "value"
    t.integer  "time_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "event_id"
  end

  create_table "sharings", :force => true do |t|
    t.integer  "event_id"
    t.integer  "shared_from"
    t.text     "extra_info"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_extras", :force => true do |t|
    t.integer  "user_id"
    t.string   "name"
    t.string   "mobile"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_identifiers", :force => true do |t|
    t.string   "value"
    t.integer  "user_id"
    t.string   "type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_sharings", :force => true do |t|
    t.integer  "sharing_id"
    t.integer  "user_id"
    t.integer  "priority"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "email",                               :default => "", :null => false
    t.string   "encrypted_password",   :limit => 128, :default => "", :null => false
    t.string   "password_salt",                       :default => "", :null => false
    t.string   "reset_password_token"
    t.string   "remember_token"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                       :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
