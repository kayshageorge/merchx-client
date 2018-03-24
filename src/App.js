import React from 'react';
import './App.css';
import  { createStore } from 'redux';
import { Provider } from 'react-redux';
import uiState from './reducers/uiState';
import Router from './components/Router';

const store = createStore(uiState);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
