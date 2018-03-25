import React from 'react';
import { Card } from 'antd';
import { Product, Sku } from '../lib/requests';

class CartItem extends React.Component {
  async componentDidMount() {
    let sku = {}
    await Sku.one(this.props.item.sku_id).then(data => {
      sku = data
      return data;
    })
    console.log('this sku', sku);
  }

  render() {
    const item = this.props.item
    return(
      <div>
        <Card>
          <h1>an item</h1>
        </Card>
      </div>
    )
  }
}

export default CartItem;
