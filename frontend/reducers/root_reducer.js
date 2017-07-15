import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TimeLogsReducer from './time_logs_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  timeLogs: TimeLogsReducer
});

export default RootReducer;
