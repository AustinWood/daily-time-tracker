class Api::TimeLogsController < ApplicationController
  def index
    @time_logs = TimeLog.all
    render json: @time_logs
  end

  def show
    @time_log = TimeLog.find(params[:id])
    render json: @time_log
  end

  def create
    @time_log = TimeLog.create!(time_log_params)
    render json: @time_log
  end

  def update
    @time_log = TimeLog.find(params[:id])
    if is_author? && @time_log.update_attributes(time_log_params)
      render json: @time_log
    else
      render json: @time_log.errors.full_messages, status: 422
    end
  end

  def destroy
    @time_log = TimeLog.find(params[:id])
    if is_author?
      @time_log.destroy
      render json: {}
    else
      render json: ["Error deleting time log."], status: 404
    end
  end

  private
  def time_log_params
    params.require(:time_log).permit(
      :id,
      :task,
      :user_id,
      :start,
      :stop
    )
  end

  def is_author?
    @time_log.user_id == current_user.id
  end
end
