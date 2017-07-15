import * as TimeLogApiUtil from '../util/time_log_api_util';

export const RECEIVE_TIME_LOGS = "RECEIVE_TIME_LOGS";

export const receiveTimeLogs = timeLogs => {
  console.log("from receiveTimeLogs:");
  console.log(timeLogs);
  return({
    type: RECEIVE_TIME_LOGS,
    timeLogs
  });
}

export const fetchTimeLogs = () => dispatch => (
  TimeLogApiUtil.fetchTimeLogs()
    .then(timeLogs => dispatch(receiveTimeLogs(timeLogs)))
);
