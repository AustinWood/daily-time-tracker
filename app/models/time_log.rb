# == Schema Information
#
# Table name: time_logs
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  task       :string           not null
#  start      :datetime         not null
#  stop       :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TimeLog < ApplicationRecord
  validates :user_id, :task, :start, presence: true
end
