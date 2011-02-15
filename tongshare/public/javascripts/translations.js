var I18n = I18n || {};
I18n.translations = {"zh-CN":{"number":{"format":{"separator":".","precision":3,"delimiter":",","significant":false,"strip_insignificant_zeros":false},"human":{"format":{"precision":1,"delimiter":"","strip_insignificant_zeros":false,"significant":false},"storage_units":{"format":"%n %u","units":{"kb":"KB","tb":"TB","gb":"GB","byte":{"one":"Byte","other":"Bytes"},"mb":"MB"}},"decimal_units":{"format":"%n %u","units":{"femto":"\u98de","trillion":"\u5146","mili":"\u6beb","billion":"\u5341\u4ebf","quadrillion":"\u5343\u5146","micro":"\u5fae","centi":"\u5398","million":"\u767e\u4e07","hundred":"\u767e","unit":"","atto":"\u6e3a","ten":{"one":"\u5341","other":"\u5341"},"pico":"\u6f20","deci":"\u5206","nano":"\u5948","thousand":"\u5343"}}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"currency":{"format":{"format":"%u %n","unit":"CN\u00a5","separator":".","precision":2,"delimiter":",","strip_insignificant_zeros":false,"significant":false}}},"activerecord":{"models":{"event":"\u65e5\u7a0b","user":"\u7528\u6237"},"attributes":{"event":{"name":"\u65e5\u7a0b\u6807\u9898","begin":"\u5f00\u59cb\u4e8e","location":"\u5730\u70b9","end":"\u7ed3\u675f\u4e8e","extra_info":"\u63cf\u8ff0"},"user_identifier":{"employee_no":"\u5b66\u53f7/\u5de5\u4f5c\u8bc1\u53f7","mobile":"\u624b\u673a\u53f7","login_value":"\u767b\u5f55\u540d","email":"\u7535\u5b50\u90ae\u4ef6"},"user":{"login_value":"","password":"","email":"\u7535\u5b50\u90ae\u4ef6"}},"errors":{"messages":{"record_invalid":"\u6821\u9a8c\u5931\u8d25: %{errors}","greater_than_or_equal_to":"\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e %{count}","less_than_or_equal_to":"\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e %{count}","confirmation":"\u4e0e\u786e\u8ba4\u503c\u4e0d\u5339\u914d","not_an_integer":"\u5fc5\u987b\u662f\u6574\u6570","blank":"\u4e0d\u80fd\u4e3a\u7a7a\u5b57\u7b26","invalid":"\u662f\u65e0\u6548\u7684","exclusion":"\u662f\u4fdd\u7559\u5173\u952e\u5b57","odd":"\u5fc5\u987b\u4e3a\u5355\u6570","empty":"\u4e0d\u80fd\u7559\u7a7a","even":"\u5fc5\u987b\u4e3a\u53cc\u6570","too_short":"\u8fc7\u77ed\uff08\u6700\u77ed\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09","wrong_length":"\u957f\u5ea6\u975e\u6cd5\uff08\u5fc5\u987b\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09","less_than":"\u5fc5\u987b\u5c0f\u4e8e %{count}","equal_to":"\u5fc5\u987b\u7b49\u4e8e %{count}","greater_than":"\u5fc5\u987b\u5927\u4e8e %{count}","accepted":"\u5fc5\u987b\u662f\u53ef\u88ab\u63a5\u53d7\u7684","too_long":"\u8fc7\u957f\uff08\u6700\u957f\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09","taken":"\u5df2\u7ecf\u88ab\u4f7f\u7528","not_a_number":"\u4e0d\u662f\u6570\u5b57","inclusion":"\u4e0d\u5305\u542b\u4e8e\u5217\u8868\u4e2d"},"models":{"user_identifier":{"attributes":{"login_value":{"employee_no_invalid":"\u5b66\u53f7/\u5de5\u4f5c\u8bc1\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e","blank":"\u5b66\u53f7/\u5de5\u4f5c\u8bc1\u53f7\u4e0d\u80fd\u4e3a\u7a7a","mobile_invalid":"\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e","taken":"\u767b\u5f55\u540d\u201c%{value}\u201d\u5df2\u88ab\u5360\u7528"}}},"user":{"attributes":{"password":{"confirmation":"\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4","blank":"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a","too_short":"\u5bc6\u7801\u957f\u5ea6\u4e0d\u591f"},"email":{"taken":"\"%{value}\"\u5df2\u88ab\u5360\u7528"}}}},"template":{"body":"\u5982\u4e0b\u5b57\u6bb5\u51fa\u73b0\u9519\u8bef\uff1a","header":"\u60a8\u8f93\u5165\u7684\u4fe1\u606f\u4e2d\u542b\u6709%{count}\u4e2a\u9519\u8bef\uff0c\u8bf7\u66f4\u6b63"},"full_messages":{"format":"%{attribute} %{message}"}}},"time":{"am":"\u4e0a\u5348","formats":{"default":"%Y\u5e74%b%d\u65e5 %A %H:%M:%S %Z","short":"%b%d\u65e5 %H:%M","long":"%Y\u5e74%b%d\u65e5 %H:%M"},"pm":"\u4e0b\u5348"},"errors":{"format":"%{attribute} %{message}","messages":{"not_found":"\u6ca1\u6709\u627e\u5230","greater_than_or_equal_to":"\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e %{count}","not_locked":"\u6ca1\u6709\u9501\u5b9a","confirmation":"\u4e0e\u786e\u8ba4\u503c\u4e0d\u5339\u914d","less_than_or_equal_to":"\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e %{count}","not_an_integer":"\u5fc5\u987b\u662f\u6574\u6570","blank":"\u4e0d\u80fd\u4e3a\u7a7a\u5b57\u7b26","exclusion":"\u662f\u4fdd\u7559\u5173\u952e\u5b57","invalid":"\u662f\u65e0\u6548\u7684","odd":"\u5fc5\u987b\u4e3a\u5355\u6570","wrong_length":"\u957f\u5ea6\u975e\u6cd5\uff08\u5fc5\u987b\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09","already_confirmed":"\u5df2\u7ecf\u786e\u8ba4","too_short":"\u8fc7\u77ed\uff08\u6700\u77ed\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09","even":"\u5fc5\u987b\u4e3a\u53cc\u6570","empty":"\u4e0d\u80fd\u7559\u7a7a","less_than":"\u5fc5\u987b\u5c0f\u4e8e %{count}","greater_than":"\u5fc5\u987b\u5927\u4e8e %{count}","equal_to":"\u5fc5\u987b\u7b49\u4e8e %{count}","too_long":"\u8fc7\u957f\uff08\u6700\u957f\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09","accepted":"\u5fc5\u987b\u662f\u53ef\u88ab\u63a5\u53d7\u7684","inclusion":"\u4e0d\u5305\u542b\u4e8e\u5217\u8868\u4e2d","not_a_number":"\u4e0d\u662f\u6570\u5b57"}},"tongshare":{"event":{"recurrence":{"interval_suffix_weekly":"\u5468","none":"\u4e0d\u91cd\u590d","weekly":"\u6309\u5468\u91cd\u590d","daily":"\u6309\u65e5\u91cd\u590d","interval_suffix_daily":"\u5929"},"updated":"\u65e5\u7a0b\"%{name}\"\u4fee\u6539\u6210\u529f","created":"\u65e5\u7a0b\"%{name}\"\u521b\u5efa\u6210\u529f"}},"date":{"month_names":[null,"\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],"order":["year","month","day"],"abbr_day_names":["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],"formats":{"default":"%Y-%m-%d","short":"%b%d\u65e5","long":"%Y\u5e74%b%d\u65e5"},"day_names":["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],"abbr_month_names":[null,"1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]},"activemodel":{"errors":{"template":{"body":"\u5982\u4e0b\u5b57\u6bb5\u51fa\u73b0\u9519\u8bef\uff1a","header":{"one":"\u6709 1 \u4e2a\u9519\u8bef\u53d1\u751f\u5bfc\u81f4\u300c%{model}\u300d\u65e0\u6cd5\u88ab\u4fdd\u5b58\u3002","other":"\u6709 %{count} \u4e2a\u9519\u8bef\u53d1\u751f\u5bfc\u81f4\u300c%{model}\u300d\u65e0\u6cd5\u88ab\u4fdd\u5b58\u3002"}}}},"support":{"array":{"words_connector":", ","last_word_connector":", \u548c ","two_words_connector":" \u548c "},"select":{"prompt":"\u8bf7\u9009\u62e9"}},"devise":{"failure":{"unauthenticated":"\u7ee7\u7eed\u64cd\u4f5c\u524d\u8bf7\u6ce8\u518c\u6216\u8005\u767b\u5f55.","timeout":"\u60a8\u5df2\u767b\u5f55\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55.","invalid":"\u767b\u5f55\u540d\u6216\u5bc6\u7801\u9519\u8bef","inactive":"\u60a8\u8fd8\u6ca1\u6709\u6fc0\u6d3b\u5e10\u6237.","unconfirmed":"\u8bf7\u5148\u6fc0\u6d3b\u60a8\u7684\u5e10\u53f7","locked":"\u60a8\u7684\u5e10\u53f7\u5df2\u88ab\u9501\u5b9a.","invalid_token":"\u8ba4\u8bc1\u7801\u65e0\u6548."},"passwords":{"send_instructions":"\u51e0\u5206\u540e\uff0c\u60a8\u5c06\u6536\u5230\u91cd\u7f6e\u5bc6\u7801\u7684\u7535\u5b50\u90ae\u4ef6.","updated":"\u60a8\u7684\u5bc6\u7801\u5df2\u4fee\u6539\u6210\u529f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55."},"mailer":{"unlock_instructions":{"subject":"\u89e3\u9501\u4fe1\u606f"},"reset_password_instructions":{"subject":"\u91cd\u7f6e\u5bc6\u7801\u4fe1\u606f"},"confirmation_instructions":{"subject":"\u786e\u8ba4\u4fe1\u606f"}},"unlocks":{"unlocked":"\u60a8\u7684\u5e10\u53f7\u5df2\u6210\u529f\u89e3\u9501\uff0c\u8bf7\u767b\u5f55.","send_instructions":"\u51e0\u5206\u540e\uff0c\u60a8\u5c06\u6536\u5230\u4e00\u5c01\u5e10\u53f7\u89e3\u9501\u7684\u90ae\u4ef6."},"sessions_extended":{"signed_out":"\u9000\u51fa\u6210\u529f.","signed_in":"\u767b\u5f55\u6210\u529f."},"confirmations":{"confirmed":"\u60a8\u7684\u5e10\u53f7\u5df2\u7ecf\u6fc0\u6d3b\uff0c\u8bf7\u767b\u5f55.","send_instructions":"\u51e0\u5206\u540e\uff0c\u60a8\u5c06\u6536\u5230\u5e10\u53f7\u6fc0\u6d3b\u7684\u7535\u5b50\u90ae\u4ef6."},"registrations_extended":{"destroyed":"\u518d\u89c1\uff01\u60a8\u7684\u5e10\u6237\u5df2\u6210\u529f\u6ce8\u9500\u3002\u6211\u4eec\u5e0c\u671b\u5f88\u5feb\u53ef\u4ee5\u518d\u89c1\u5230\u60a8.","updated":"\u5e10\u53f7\u8d44\u6599\u66f4\u65b0\u6210\u529f.","signed_up":"\u60a8\u7684\u5e10\u53f7\u5df2\u6ce8\u518c\u6210\u529f."}},"helpers":{"submit":{"submit":"\u4fdd\u5b58%{model}","create":"\u65b0\u5efa%{model}","update":"\u66f4\u65b0%{model}"},"select":{"prompt":"\u8bf7\u9009\u62e9"}},"datetime":{"prompts":{"minute":"\u5206","month":"\u6708","second":"\u79d2","hour":"\u65f6","day":"\u65e5","year":"\u5e74"},"distance_in_words":{"less_than_x_minutes":{"one":"\u4e0d\u5230\u4e00\u5206\u949f","other":"\u4e0d\u5230 %{count} \u5206\u949f"},"x_days":{"one":"\u4e00\u5929","other":"%{count} \u5929"},"almost_x_years":{"one":"\u63a5\u8fd1\u4e00\u5e74","other":"\u63a5\u8fd1 %{count} \u5e74"},"x_seconds":{"one":"\u4e00\u79d2","other":"%{count} \u79d2"},"about_x_hours":{"one":"\u5927\u7ea6\u4e00\u5c0f\u65f6","other":"\u5927\u7ea6 %{count} \u5c0f\u65f6"},"x_minutes":{"one":"\u4e00\u5206\u949f","other":"%{count} \u5206\u949f"},"x_months":{"one":"\u4e00\u4e2a\u6708","other":"%{count} \u4e2a\u6708"},"less_than_x_seconds":{"one":"\u4e0d\u5230\u4e00\u79d2","other":"\u4e0d\u5230 %{count} \u79d2"},"about_x_years":{"one":"\u5927\u7ea6\u4e00\u5e74","other":"\u5927\u7ea6 %{count} \u5e74"},"about_x_months":{"one":"\u5927\u7ea6\u4e00\u4e2a\u6708","other":"\u5927\u7ea6 %{count} \u4e2a\u6708"},"over_x_years":{"one":"\u4e00\u5e74\u591a","other":"%{count} \u5e74\u591a"},"half_a_minute":"\u534a\u5206\u949f"}}},"en":{"number":{"format":{"separator":".","precision":3,"delimiter":",","significant":false,"strip_insignificant_zeros":false},"human":{"format":{"precision":3,"delimiter":"","strip_insignificant_zeros":true,"significant":true},"storage_units":{"format":"%n %u","units":{"kb":"KB","tb":"TB","gb":"GB","byte":{"one":"Byte","other":"Bytes"},"mb":"MB"}},"decimal_units":{"format":"%n %u","units":{"trillion":"Trillion","billion":"Billion","quadrillion":"Quadrillion","million":"Million","unit":"","thousand":"Thousand"}}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","precision":2,"delimiter":",","strip_insignificant_zeros":false,"significant":false}}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","taken":"has already been taken"}}},"errors":{"format":"%{attribute} %{message}","messages":{"not_found":"not found","greater_than_or_equal_to":"must be greater than or equal to %{count}","not_locked":"was not locked","confirmation":"doesn't match confirmation","less_than_or_equal_to":"must be less than or equal to %{count}","blank":"can't be blank","not_an_integer":"must be an integer","exclusion":"is reserved","invalid":"is invalid","odd":"must be odd","wrong_length":"is the wrong length (should be %{count} characters)","already_confirmed":"was already confirmed","too_short":"is too short (minimum is %{count} characters)","even":"must be even","empty":"can't be empty","less_than":"must be less than %{count}","greater_than":"must be greater than %{count}","equal_to":"must be equal to %{count}","too_long":"is too long (maximum is %{count} characters)","accepted":"must be accepted","inclusion":"is not included in the list","not_a_number":"is not a number"}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"pm":"pm"},"date":{"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},"devise":{"failure":{"unauthenticated":"You need to sign in or sign up before continuing.","timeout":"Your session expired, please sign in again to continue.","invalid":"Invalid email or password.","inactive":"Your account was not activated yet.","unconfirmed":"You have to confirm your account before continuing.","locked":"Your account is locked.","invalid_token":"Invalid authentication token."},"passwords":{"send_instructions":"You will receive an email with instructions about how to reset your password in a few minutes.","updated":"Your password was changed successfully. You are now signed in."},"mailer":{"unlock_instructions":{"subject":"Unlock Instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"confirmation_instructions":{"subject":"Confirmation instructions"}},"unlocks":{"unlocked":"Your account was successfully unlocked. You are now signed in.","send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes."},"registrations":{"destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon.","updated":"You updated your account successfully.","signed_up":"You have signed up successfully. If enabled, a confirmation was sent to your e-mail."},"sessions":{"signed_out":"Signed out successfully.","signed_in":"Signed in successfully."},"confirmations":{"confirmed":"Your account was successfully confirmed. You are now signed in.","send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes."}},"support":{"array":{"words_connector":", ","last_word_connector":", and ","two_words_connector":" and "}},"hello":"Hello world","helpers":{"submit":{"submit":"Save %{model}","create":"Create %{model}","update":"Update %{model}"},"select":{"prompt":"Please select"}},"datetime":{"prompts":{"minute":"Minute","month":"Month","second":"Seconds","hour":"Hour","day":"Day","year":"Year"},"distance_in_words":{"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_days":{"one":"1 day","other":"%{count} days"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"half_a_minute":"half a minute"}}}};