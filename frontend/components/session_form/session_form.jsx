import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.redirectIfLoggedIn()
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.history.push('/');
    }
  };

  ensureLoggedIn() {

  };

  render() {
    return (
      <div className="session-form">
        <p>Login in / Create account</p>
      </div>
    );
  }
}

export default SessionForm;
