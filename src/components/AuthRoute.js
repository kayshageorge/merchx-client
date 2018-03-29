import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from './Header';

function AuthRoute (props) {
  const {
    component: Component,
    isAuthenticated = false,
    ...restProps
  } = props;

  return (
    <Route {...restProps} render={ props => isAuthenticated ? (
        <div>
          <Header {...props} />
          <Component {...props} />
        </div>
        ) : (
          <Redirect to="/band/sign_in" />
        )
      }
    />
  )
}

export default AuthRoute;
