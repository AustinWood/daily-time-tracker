import React from 'react';

class TimeLogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.userInfo = this.userInfo.bind(this);
  }

  componentDidMount() {
    this.props.fetchTimeLogs()
  }

  timeLogComponents() {
    let components = []
    const timeLogs = this.props.timeLogs
    for (var i = 0; i < timeLogs.length; i++) {
      const timeLog = timeLogs[i]
      const startDate = timeLog.start
      const stopDate = timeLog.stop
      const date = startDate.substring(0, 10)
      const startTime = startDate.substring(11, 19)
      const stopTime = stopDate.substring(11, 19)
      components.push(
        <div className="time-log-item" key={timeLog.id}>
          <h3>{timeLog.task}</h3>
          <p>{date}<br/>{startTime} - {stopTime}</p>
        </div>
      )
    }
    return components
  }

  userInfo() {
    if (this.props.selectedUser === null) {
      return(
        <div><p>Selected User is null!</p></div>
      );
    }
    return(
      <div className="time-log-index">
        {this.timeLogComponents()}
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
