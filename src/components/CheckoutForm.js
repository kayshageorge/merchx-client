import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './CardSection';
import CartHeader from './CartHeader';
import { Charge } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';

class CheckoutForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    this.props.stripe.createToken().then(({token}) => {
      console.log('Received Stripe token:', token);
      Charge.create(token, this.props.total);


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

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.total,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (lineItems) => dispatch(uiActions.updateCart(lineItems)),
    updateTotal: (amount) => dispatch(uiActions.updateTotal(amount))
  }
}



// export default injectStripe(CheckoutForm);
export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(CheckoutForm));
