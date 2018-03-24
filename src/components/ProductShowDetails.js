import React from 'react';
import { Button, Row, Col } from 'antd';
import { Sku } from '../lib/requests';
// import { connect } from 'react-redux';
// import uiActions from '../actions/uiActions';

const ButtonGroup = Button.Group;

class ProductShowDetails extends React.Component {

  // componentDidUpdate(previousProps) {
  //   // console.log(this.props.product.id);
  //   // console.log(previousProps);
  //   Sku.all(this.props.product.id).then(data => {
  //     this.props.updateProductSkus(data)
  //     console.log(data);
  //   })
  // }

  renderSizes = (productSkus, labelType) => {
    const sizeButtons = productSkus.map(sku => {
      if (sku[labelType]) {
        return <Button disabled={sku.qty <= 0}>{sku[labelType]}</Button>
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
        <Row type="flex" justify="center">
          <ButtonGroup>
            <Button disabled>Unisex</Button>
            {!!this.props.productSkus && this.renderSizes(this.props.productSkus, "unisex_label")}
          </ButtonGroup>
        </Row>
        <Row type="flex" justify="center">
          <ButtonGroup>
            <Button disabled>Ladies</Button>
            {!!this.props.productSkus && this.renderSizes(this.props.productSkus, "ladies_label")}
          </ButtonGroup>
        </Row>
        <Row type="flex" justify="center" align="bottom">
          <Button style={{marginTop: "10px", marginBottom: "15px"}} size="large">Add to Cart</Button>
        </Row>
        <Row type="flex" justify="center" >
          <Col span={18}>
            <p style={{textAlign: "center"}}>{this.props.product.description}</p>
          </Col>
        </Row>
      </div>
    )
  }
}



// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
//     productSkus: state.productSkus
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateProductSkus: (skus) => dispatch(uiActions.updateProductSkus(skus)),
//   }
// }


export default ProductShowDetails;
