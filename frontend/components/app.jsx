import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("App will mount");
    this.ensureLoggedIn()
  }

  componentDidMount() {
    console.log("App mounted");
  }

  ensureLoggedIn() {
    console.log("_ensureLoggedIn (empty)");
    // const currentUser = this.props.currentUser;
    // if (!currentUser) {
    //   replace('/login');
    // }
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
