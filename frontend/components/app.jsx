import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
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
        <p>but not really... yet..</p>
      </div>
    );
  }
}

export default App;
