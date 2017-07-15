@time_logs.each do |time_log|
  json.set!(time_log.id) {json.partial!("api/time_logs/time_log", :time_log => time_log)}
end
