import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthRoute from './AuthRoute';
import Header from './Header';
import Portal from './Portal';
import ProductIndex from './ProductIndex';
import ProductShowPage from './ProductShowPage';
import WrappedSignIn from './BandSignIn';
import WrappedSignUp from './BandSignUp';
import CartPage from './CartPage';
import BandProfilePage from './BandProfilePage';

const HeaderRoute = (props) => {
  return [
    <Header key="1"/>,
    <Route key="2" {...props} />
  ]
}

class Router extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      user: null
    };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentWillMount () {
    this.signIn();
  }

  signIn () {
    const jwt =  localStore.getItem('jwt');

    if (jwt) {
      const payload = jwtDecode(jwt);
      this.setState({
        user: payload
      });
    }
  }

  signOut () {
    localStore.removeItem('jwt');
    this.setState({user: null});
  }

  isSignedIn () {
    return !!this.state.user;
  }

  render () {
    const { user } = this.state;
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/band/sign_in" render={ props => (
              <WrappedSignIn {...props} onSignIn={this.signIn} />
              )}
            />
            <Route exact path="/band/sign_up" render={ props => (
              <WrappedSignUp {...props} onSignIn={this.signIn} />
              )}
            />
            <AuthRoute
              isAuthenticated={this.isSignedIn()}
              exact
              path="/band/profile" component={ BandProfilePage }
            />
            <HeaderRoute path="/band/:id"  component={ ProductIndex }/>
            <HeaderRoute path="/products/:id" component={ ProductShowPage } />
            <Route exact path="/cart" component={ CartPage } />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default Router;




// ////////////////////////////////////////////////////////////////////////////


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthRoute from './AuthRoute';
import Header from './Header';
import Portal from './Portal';
import ProductIndex from './ProductIndex';
import ProductShowPage from './ProductShowPage';
import WrappedSignIn from './BandSignIn';
import WrappedSignUp from './BandSignUp';
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
        <Route exact path='/band/sign_in' component={ WrappedSignIn } />
        <Route exact path='/band/sign_up' component={ WrappedSignUp } />
        <HeaderRoute path="/band/:id"  component={ ProductIndex }/>
        <HeaderRoute path="/products/:id" component={ ProductShowPage } />
        <Route exact path="/cart" component={ CartPage } />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;
