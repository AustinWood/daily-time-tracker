User.destroy_all
TimeLog.destroy_all

user1 = User.create!(
  username: "user1",
  password: "password"
)

user2 = User.create!(
  username: "user2",
  password: "password"
)

admin = User.create!(
  username: "admin",
  password: "password"
)

timeLog1 = TimeLog.create!(
  user_id: user1.id,
  task: "Email",
  start: DateTime.new(2017,7,14,12,5,6,'0'),
  stop: DateTime.new(2017,7,14,12,25,56,'0')
)

timeLog2 = TimeLog.create!(
  user_id: user1.id,
  task: "Code",
  start: DateTime.new(2017,7,14,12,32,6,'0'),
  stop: DateTime.new(2017,7,14,15,2,12,'0')
)

timeLog3 = TimeLog.create!(
  user_id: user1.id,
  task: "Eat dinner",
  start: DateTime.new(2017,7,14,18,0,0,'0'),
  stop: DateTime.new(2017,7,14,18,40,0,'0')
)

timeLog1 = TimeLog.create!(
  user_id: user2.id,
  task: "Read a book",
  start: DateTime.new(2017,7,14,12,5,6,'0'),
  stop: DateTime.new(2017,7,14,12,25,56,'0')
)

timeLog2 = TimeLog.create!(
  user_id: user2.id,
  task: "Study",
  start: DateTime.new(2017,7,14,12,32,6,'0'),
  stop: DateTime.new(2017,7,14,15,2,12,'0')
)

timeLog3 = TimeLog.create!(
  user_id: user2.id,
  task: "Play video games",
  start: DateTime.new(2017,7,14,18,0,0,'0'),
  stop: DateTime.new(2017,7,14,18,40,0,'0')
)
