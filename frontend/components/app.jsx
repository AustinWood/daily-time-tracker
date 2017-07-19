import React from 'react';
import TimeLogIndexContainer from './time_log/time_log_index_container'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAddTask = this.toggleAddTask.bind(this);
    this.addTaskForm = this.addTaskForm.bind(this);
    this.state = {
      showAddTask: false,
      taskName: "",
      startTime: "",
      stopTime: ""
    }
  }

  componentWillMount() {
    this.ensureLoggedIn()
  }

  componentWillUpdate() {
    this.ensureLoggedIn()
  }

  componentDidUpdate() {
    this.ensureLoggedIn()
  }

  ensureLoggedIn() {
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      this.props.history.push('/login');
    }
  };

  toggleAddTask() {
    this.setState({
      showAddTask: !this.state.showAddTask
    })
  }

  addTaskForm() {
    if (!this.state.showAddTask) {
      return(<div></div>)
    }
    return(
      <div className="add-task-form">
        <p>Task name:</p>
        <p>Date:</p>
        <p>Start time:</p>
        <p>Stop time:</p>
      </div>
    )
  }

  render() {
    if (this.props.currentUser === null) {
      return(<div></div>)
    }
    let name = this.props.currentUser.username
    return (
      <div className="app">
        <div id="user-header">
          <button onClick={this.toggleAddTask}>
            <p>Add task</p>
          </button>
          <h2>{name}</h2>
          <button onClick={this.props.logout}>
            <p>Log out</p>
          </button>
        </div>

        {this.addTaskForm()}
        <TimeLogIndexContainer />
      </div>
    );
  }
}

export default App;
