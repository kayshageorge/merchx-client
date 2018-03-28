import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Portal from './Portal';
import ProductIndex from './ProductIndex';
import ProductShowPage from './ProductShowPage';
import CartPage from './CartPage';

const HeaderRoute = (props) => {
  return [
    <Header key="1"/>,
    <Route key="2" {...props} />
  ]
}

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={ Portal } />
        <HeaderRoute exact path="/band/:id"  component={ ProductIndex }/>
        <HeaderRoute path="/products/:id" component={ ProductShowPage } />
        <Route exact path="/cart" component={ CartPage } />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;
