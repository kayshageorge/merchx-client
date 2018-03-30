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
            console.log('total', total)
            console.log('PROPS BEING SENT: SKU ID', item.sku_id);
            
            return <CartItem item={item} key={item.sku_id} index={key} />
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
