import React from 'react';
import { Radio, Button, Row, Col, Form } from 'antd';
import { Sku } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';
import localStore from '../lib/localStore';

const ButtonGroup = Button.Group;
const FormItem = Form.Item;

class ProductShowDetails extends React.Component {

  constructor() {
    super();
    this.state = {pendingLineItemSize: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({pendingLineItemSize: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state.pendingLineItemSize, this.props.product.id)

    Sku.search(this.props.product.id, this.state.pendingLineItemSize).then(data => {
      console.log(data[0].id);
      let uniqueId = new Date()
      localStore.set('cart', [...this.props.cart, {item_id: uniqueId, sku_id: data[0].id, total: this.props.product.price, count: 1}])
      this.props.updateCart( [...this.props.cart, {item_id: uniqueId, sku_id: data[0].id, total: this.props.product.price, count: 1}])
      return data && data[0].id
    }).then((id) => {
      console.log(this.props.cart)
    })
  }


  renderSizes = (productSkus, labelType) => {
    const sizeButtons = productSkus.map(sku => {
      if (sku[labelType]) {
        return <Radio.Button value={sku.size} disabled={sku.qty <= 0}>{sku[labelType]}</Radio.Button>
      }
    })
    return sizeButtons;
  }

  render() {
    return(
      <div>
        <Row type="flex" justify="center">
          <h3>{`$${this.props.product.price}`}</h3>
        </Row>
        <Form onSubmit={this.handleSubmit} >
          <FormItem>
            <Radio.Group onChange={this.handleChange} style={{display: 'flex', justifyContent: "center", flexDirection: "column"}}>
              <ButtonGroup style={{flexDirection: "row", alignSelf: "center"}}>
                <Button style={{width: "24%"}} disabled>Unisex</Button>
                {!!this.props.productSkus && this.renderSizes(this.props.productSkus, "unisex_label")}
              </ButtonGroup>
              <ButtonGroup style={{flexDirection: "row", alignSelf: "center"}}>
                <Button style={{width: "24%"}} disabled>Ladies</Button>
                {!!this.props.productSkus && this.renderSizes(this.props.productSkus, "ladies_label")}
              </ButtonGroup>
            </Radio.Group>
          </FormItem>
          <FormItem>
            <Row type="flex" justify="center">
              <Button style={{marginTop: "10px", marginBottom: "15px"}} size="large" htmlType="submit">Add to Cart</Button>
            </Row>
          </FormItem>
        </Form>
        <Row type="flex" justify="center" >
          <Col span={18}>
            <p style={{textAlign: "center"}}>{this.props.product.description}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (pendingLineItems) => dispatch(uiActions.updateCart(pendingLineItems)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShowDetails);
