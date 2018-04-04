import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { Button } from 'antd';
import CardSection from './CardSection';
import CartHeader from './CartHeader';
import { Charge } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';
import localStore from '../lib/localStore';

class CheckoutForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.stripe.createToken().then(({token}) =>
      this.props.charge(token)
      // console.log('Received Stripe token:', token);
      // Charge.create(token, this.props.total).then((data) => {
      //   console.log(data.status)
      //   if (data.status == 'succeeded'){
      //     localStore.set('cart', [])
      //     this.props.updateCart( [])
      //     localStorage.setItem('total', 0)
      //     this.props.updateTotal(0)
      //     console.log('SUCCESS!')
      //     // <Redirect to="/complete" />
      //   }
      //   else {
      //     console.log('NOOOOOOOO');
      //   }
      // })
    // }
  );

  }

  render() {
    return (
      <div>
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
