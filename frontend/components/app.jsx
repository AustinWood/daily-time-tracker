import React from 'react';
import TimeLogIndexContainer from './time_log/time_log_index_container'

class App extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    if (this.props.currentUser === null) {
      return(<div></div>)
    }
    let name = this.props.currentUser.username
    return (
      <div className="app">
        <div id="user-header">
          <button onClick={this.props.logout}>
            <p>Add task</p>
          </button>
          <h2>{name}</h2>
          <button onClick={this.props.logout}>
            <p>Log out</p>
          </button>
        </div>

        <TimeLogIndexContainer />
      </div>
    );
  }
}

export default App;
