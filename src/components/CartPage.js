import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';

class CartPage extends React.Component {

  render() {
    let cart = this.props.cart;
    let total = 0
    console.log(cart);
    return(
      <div className="getsBackground" style={{minHeight: '100vh'}}>
        <CartHeader />
          { cart.map((item, key) => {
            return <CartItem item={item} key={item.item_id} index={key} />
          }
          ) }
        <CartFooter amount={this.props.total} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    cart: state.cart,
    total: state.total
  }
}


export default connect(mapStateToProps)(CartPage);
