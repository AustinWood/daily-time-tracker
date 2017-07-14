class CreateTimeLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :time_logs do |t|
      t.integer :user_id, null: false
      t.string :task, null: false
      t.datetime :start, null: false
      t.datetime :stop
      t.timestamps
    end
  end
end
