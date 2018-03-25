import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';

class CartPage extends React.Component {
  render() {
    const cart = this.props.cart
    console.log(cart);
    return(
      <div>
        <CartHeader />
          { cart.map((item, key) =>
            <CartItem item={item} key={key} />
          ) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAllCart: (lineItems) => dispatch(uiActions.updateAllCart(lineItems))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
