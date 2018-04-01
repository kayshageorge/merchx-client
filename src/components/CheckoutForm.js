import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './CardSection';
import CartHeader from './CartHeader';
import { Charge } from '../lib/requests';

class CheckoutForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    this.props.stripe.createToken().then(({token}) => {
      console.log('Received Stripe token:', token);
      Charge.create(token, 1000);


    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CartHeader />
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
