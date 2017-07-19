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
      components.push(<div className="timeLogItem" key={timeLog.id}><p>{timeLog.task}</p></div>)
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
