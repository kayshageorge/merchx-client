import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductIndex from './components/ProductIndex';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductIndex />
      </div>
    );
  }
}

export default App;
