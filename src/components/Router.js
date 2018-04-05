import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Portal from './Portal';
import ProductIndex from './ProductIndex';
import ProductShowPage from './ProductShowPage';
import WrappedSignIn from './BandSignIn';
import WrappedSignUp from './BandSignUp';
import CartPage from './CartPage';
import Checkout from './Checkout';
import PaymentComplete from './PaymentComplete';

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
        <Route exact path='/band/sign_in' component={ WrappedSignIn } />
        <Route exact path='/band/sign_up' component={ WrappedSignUp } />
        <HeaderRoute path="/band/:id"  component={ ProductIndex }/>
        <HeaderRoute path="/products/:id" component={ ProductShowPage } />
        <Route exact path="/cart" component={ CartPage } />
        <Route exact path='/checkout' component={ Checkout } />
        <Route exact path='/complete' component={ PaymentComplete } />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;
