import merge from 'lodash/merge';

import {
  RECEIVE_TIME_LOGS
} from '../actions/time_log_actions';

const TimeLogsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TIME_LOGS:
      console.log("from TimeLogsReducer:");
      console.log(action.timeLogs);
      return action.timeLogs;
    default:
      return state;
  }
};

export default TimeLogsReducer;
