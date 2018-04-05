import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { Button } from 'antd';
import CardSection from './CardSection';
import CartHeader from './CartHeader';
import { Charge } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';
import localStore from '../lib/localStore';
import AppFooter from './AppFooter';

class CheckoutForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.stripe.createToken().then(({token}) =>
      this.props.charge(token)
    );
  }

  render() {
    return (
      <div className="getsBackground" style={{height: '100vh'}}>
        <CartHeader />
        <div style={{marginLeft: '10px', marginRight: '10px'}}>
          <form onSubmit={this.handleSubmit}>
            <CardSection />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Button type="primary" htmlType="submit" style={{height: '40px'}}>Confirm order</Button>
            <img src='https://www.aida.rentals/credit_cards.png' style={{height: '40px'}}/>
          </div>
          </form>
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
