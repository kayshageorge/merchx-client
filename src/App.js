import React from 'react';
import './App.css';
import ProductShowPage from './components/ProductShowPage';
// import ProductIndex from './components/ProductIndex';

class App extends React.Component {
  render() {
    return (
      <div>
        <ProductShowPage />
        {/* <ProductIndex /> */}
      </div>
    );
  }
}

export default App;
