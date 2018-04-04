import React from 'react';
import {Elements} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';
import CartHeader from './CartHeader';
import { Charge } from '../lib/requests';


class Checkout extends React.Component {
  charge(token) {
    Charge.create(token, 100).then((data) => {
      console.log(data.status)
      if (data.status == 'succeeded'){
        // localStore.set('cart', [])
        // this.props.updateCart( [])
        // localStorage.setItem('total', 0)
        // this.props.updateTotal(0)
        console.log('SUCCESS!')
        // <Redirect to="/complete" />
      }
      else {
        console.log('NOOOOOOOO');
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



export default Checkout;
