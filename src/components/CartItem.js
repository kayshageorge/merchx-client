import React from 'react';
import { Card, Row, Col } from 'antd';
import { Product, Sku } from '../lib/requests';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      sku: {},
      image: {}
    };
  }

  componentDidMount() {
    Sku.one(this.props.item.sku_id).then(data => {
      this.setState({sku: data, image: data.product.images});
      console.log('this sku', data);
      return data;
    })
  }

  render() {
    const sku = this.state.sku
    console.log(this.state.image)
    return(
      <div>
        <Card style={{height: '140px', padding: '0'}} bodyStyle={{padding: '0', alignSelf: 'center'}}>
          <Row>
              <Col span={6}>
                <Card
                   hoverable
                   cover={<img alt="example" src={this.state.image} />}
                   style={{ margin: "10px", padding: '0'}}
                   bodyStyle={{padding: "0"}}
                 >

                </Card>
              </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default CartItem;
