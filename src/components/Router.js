import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Portal from './Portal';
import ProductIndex from './ProductIndex';
import ProductShowPage from './ProductShowPage';

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ Portal } />
        <Route exact path="/band/:id"  component={ ProductIndex }/>
        <Route path="/products/:id" component={ ProductShowPage } />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;
