import merge from 'lodash/merge';

import {
  RECEIVE_TIME_LOGS } from '../actions/time_log_actions';

import {
  RECEIVE_LOGOUT_SUCCESS } from '../actions/session_actions';

const TimeLogsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TIME_LOGS:
      return action.timeLogs;
    case RECEIVE_LOGOUT_SUCCESS:
      return [];
    default:
      return state;
  }
};

export default TimeLogsReducer;
