import React from 'react';

class TimeLogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.userInfo = this.userInfo.bind(this);
  }

  componentDidMount() {
    this.props.fetchTimeLogs()
  }

  componentDidUpdate() {
    console.log(this.props.timeLogs);
  }

  userInfo() {
    if (this.props.selectedUser === null) {
      return(
        <div><p>Selected User is null!</p></div>
      );
    }
    return(
      <div className="time-log-index">
        <p>Selected User id: {this.props.selectedUser.id}</p>
      </div>
    );
  }

  render() {
    const notes = this.props.notes;
    return (
      <div>
        {this.userInfo()}
      </div>
    );
  }
}

export default TimeLogIndex;
