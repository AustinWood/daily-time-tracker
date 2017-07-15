import React from 'react';
import TimeLogIndexContainer from './time_log/time_log_index_container'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
    return (
      <div className="app">
        <p>You're logged in!</p>
        <button onClick={this.props.logout}>
          <p>Log out</p>
        </button>
        <TimeLogIndexContainer />
      </div>
    );
  }
}

export default App;
