import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Product, Sku } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';
import localStore from '../lib/localStore';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      sku: {},
      product: {}
    };
    this.remove = this.remove.bind(this);
  }

  componentWillMount() {
    Sku.one(this.props.item.sku_id).then(data => {
      this.setState({sku: data, product: data.product});
      return data;
    })
  }

  remove(){
    let cart = [...this.props.cart]
    cart.splice(this.props.index, 1);
    console.log(cart);
    localStore.set('cart', cart)
    this.props.updateCart(cart)
  }

  render() {
    const sku = this.state.sku
    const {id, title, description, images, price } = this.state.product
    const cart = this.props.cart
    const index = this.props.index
    console.log('cart', cart)
    console.log('index', index);

    return(
      <div>
        <Card style={{height: '140px', padding: '0'}} bodyStyle={{height: '100%', padding: '0'}}>
          <Row style={{display: 'flex', height: '100%'}}>
              <Col span={6} style={{display: 'flex', alignSelf: 'center', justifyContent: 'center'}}>
                <Card
                  hoverable
                  cover={<img alt="example" src={images} />}
                  style={{ margin: "10px", padding: '0'}}
                  bodyStyle={{padding: "0"}}
                 >
                </Card>
              </Col>
              <Col span={9} style={{display: 'flex', alignItems: 'center'}}>
                <div>
                  <p>{title}</p>
                  <p>Size: {sku.size}</p>
                </div>
              </Col>
              <Col offset={4} span={5} style={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
                <div>
                  <Button onClick={this.remove} style={{marginBottom: '13px'}}>X</Button>
                  <p style={{display: 'flex', justifyContent: 'center'}}>${price}</p>
                </div>
              </Col>
          </Row>
        </Card>
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
    updateCart: (lineItems) => dispatch(uiActions.updateCart(lineItems))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
