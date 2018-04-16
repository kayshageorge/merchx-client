import React from 'react';
import {Elements} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';
import CartHeader from './CartHeader';
import { Charge } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';
import localStore from '../lib/localStore';


class Checkout extends React.Component {
  charge(token) {
    Charge.create(token, this.props.total).then((data) => {
      if (data.status == 'succeeded'){
        localStore.set('cart', [])
        this.props.updateCart( [])
        localStorage.setItem('total', 0)
        this.props.updateTotal(0)
        console.log('payment complete')
        this.props.history.push('/complete')

      }
      else {
        console.log('Payment incomplete');
      }
    })
  }

  render() {
    return(
      <Elements>
        <InjectedCheckoutForm charge={this.charge.bind(this)}/>
      </Elements>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
