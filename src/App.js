import React from 'react';
import './App.css';
import  { createStore } from 'redux';
import { Provider } from 'react-redux';
import uiState from './reducers/uiState';
import Router from './components/Router';
import {StripeProvider} from 'react-stripe-elements';
require('dotenv').config();


const store = createStore(uiState);


class App extends React.Component {
  render() {
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_ACCESS_KEY_ID}>
        <Provider store={store}>
          <Router />
        </Provider>
      </StripeProvider>
    );
  }
}

export default App;
