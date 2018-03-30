import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';

class CartPage extends React.Component {

  componentWillUpdate(nextProps, nextState) {
      console.log('should update')
  }

  componentWillUpdate() {
    console.log('CART PAGE UPDATED', this.props.cart);
  }

  render() {
    let cart = this.props.cart;
    let total = 0
    console.log(cart);
    return(
      <div>
        <CartHeader />
          { cart.map((item, key) => {
            console.log(item.total)
            total += parseInt(item.total, 10)
            // NOTE there may be behavior changes if it turns our that the key is not unique.
            return <CartItem item={item} key={item.item_id} index={key} />
          }
          ) }
        <CartFooter total={total} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    cart: state.cart
  }
}


export default connect(mapStateToProps)(CartPage);
