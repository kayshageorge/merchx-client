import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';

class ShoppingCartPage extends React.Component {
  render() {
    const pendingLineItems = this.props.pendingLineItems
    return(
      <div>
        <CartItem />
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


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
