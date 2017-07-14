User.destroy_all
TimeLog.destroy_all

user1 = User.create!(
  username: "user1",
  password: "password"
)

timeLog1 = TimeLog.create!(
  user_id: user1.id,
  task: "Email",
  start: DateTime.new(2017,7,14,12,5,6,'-7'),
  stop: DateTime.new(2017,7,14,12,25,56,'-7')
)

timeLog2 = TimeLog.create!(
  user_id: user1.id,
  task: "Code",
  start: DateTime.new(2017,7,14,12,32,6,'-7'),
  stop: DateTime.new(2017,7,14,15,2,12,'-7')
)

timeLog3 = TimeLog.create!(
  user_id: user1.id,
  task: "Eat dinner",
  start: DateTime.new(2017,7,14,18,0,0,'-7'),
  stop: DateTime.new(2017,7,14,18,40,0,'-7')
)
