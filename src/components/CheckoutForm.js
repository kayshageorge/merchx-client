import React from 'react';
import { Button } from 'antd';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './CardSection';
import CartHeader from './CartHeader';
import { Charge } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';

class CheckoutForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.stripe.createToken().then(({token}) => {
      console.log('Received Stripe token:', token);
      Charge.create(token, this.props.total);
    });

  }
  // Send all form inputs as params to charge request, then disect it into the pieces you need (ei: total, customer email and marketing prefs)
  // after charge request, if complete, erase localstore and state store, and show pickup page w QR code and further instructions. If errors present, show errors on page

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CartHeader />
          <CardSection />
          <Button type="primary" style={{margin: 'auto'}}>Complete order</Button>
        </form>
        <img src='https://www.aida.rentals/credit_cards.png' style={{height: '40px', marginTop: '15px'}}/>
      </div>
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
