import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Portal from './Portal';
import ProductIndex from './ProductIndex';
import ProductShowPage from './ProductShowPage';
// import WrappedSignInForm from './BandSignInPage';
import WrappedSignIn from './BandSignIn';

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
        {/* <Route exact path='/band/sign_up' component={ BandSignUpPage } /> */}
        <HeaderRoute path="/band/:id"  component={ ProductIndex }/>
        <HeaderRoute path="/products/:id" component={ ProductShowPage } />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;
