import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.props.demoLogin.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentDidMount() {
    this.redirectIfLoggedIn()
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn()
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.history.push('/');
    }
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  authHeader() {
    if (this.props.formType === "login") {
      return <p className="session-form-header">Log in</p>;
    } else {
      return <p className="session-form-header">Sign up</p>;
    }
  }

  authFooter() {
    let text;
    let link;
    link = "yo"
    if (this.props.formType === "login") {
      text = "No account yet?";
      link = (
        <Link to="/signup" className="session-form-footer-link">
          Sign up here!
        </Link>
      );
    } else {
      text = "Already signed up?";
      link = (
        <Link to="/login" className="session-form-footer-link">
          Log in here!
        </Link>
      );
    }
    return(
      <div className="session-form-footer-container">
        <p className="session-form-footer-text">
          {text}&nbsp;&nbsp;{link}
        </p>
        <br/><br/>
        <p className="session-form-footer-text">
          Auto login (for demo purposes)<br/>
        <button className="session-form-footer-link" onClick={() => this.demo("user1")}>user1</button><br/>
        <button className="session-form-footer-link" onClick={() => this.demo("user2")}>user2</button><br/>
        <button className="session-form-footer-link" onClick={() => this.demo("admin")}>admin</button>
        </p>
      </div>
    );
  }

  demo(username) {
    const usernameElement = document.getElementById('username');
    const passwordElement = document.getElementById('password');
    usernameElement.value = '';
    passwordElement.value = '';

    let fillInput = (element, text, demoLogin = this.props.demoLogin) => {
      return function() {
        if (text.length > 0) {
          element.value += text[0];
          setTimeout(fillInput(element, text.substring(1)), 80);
        } else if (element === usernameElement) {
          fillInput(passwordElement, 'password')();
        } else {
          const user = {username: username, password: 'password'};
          demoLogin({user});
        }
      };
    };

    fillInput(usernameElement, username)();
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return (<div></div>);
    }
    return (
      <ul className="session-error-container">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="session-error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <h1>Daily Time Tracker</h1>
        <h3>Find out where your time goes with this awesome app.</h3>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          {this.authHeader()}
          <div className="login-form">
            <div className="sesson-input-container">
              <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/user_dark_typzor.png"} className="session-input-img" />
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="session-input"
                id="username" />
            </div>
            <br/>
            <div className="sesson-input-container">
              <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489617054/password_s4kwh0.png"} className="session-input-img" />
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="session-input"
                id="password" />
            </div>
            <br/>
            {this.renderErrors()}
            <div className="session-form-submit-container">
              <input
                type="submit"
                value="Submit"
                className="session-form-submit-button" />
              <br/>
            </div>
          </div>
        </form>
        {this.authFooter()}
      </div>
    );
  }

}

export default SessionForm;
