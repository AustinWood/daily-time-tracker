import { connect } from 'react-redux';
import { fetchTimeLogs } from '../../actions/time_log_actions';

import TimeLogIndex from './time_log_index';

const mapStateToProps = state => ({
  selectedUser: state.session.currentUser,
  timeLogs: state.timeLogs
});

const mapDispatchToProps = dispatch => ({
  fetchTimeLogs: () => dispatch(fetchTimeLogs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeLogIndex);
