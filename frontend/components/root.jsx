import React from 'react';
import { Provider } from 'react-redux';
// import App from './app';


// <App />
const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <p>Hello, friend</p>
    </Provider>
  );
};

export default Root;
