import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppContainer from './app_container';
import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router>
        <div>
          <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route exact path="/" component={ AppContainer } />
        </div>
      </Router>
    </Provider>
  );
};

export default Root;
