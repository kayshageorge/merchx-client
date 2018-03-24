import React from 'react';
import { Row, Col, Icon, Badge } from 'antd';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const bandName = this.props.currentBand.band_name
    return (
      <Row type="flex" justify="space-between" align="center" style={{marginTop: "13px"}}>
        <Col span={18}>
          <h1>{bandName}</h1>
        </Col>
        <Col span={3}>
          <Badge count={this.props.cart.length}>
            <Icon type="shopping-cart" style={{ fontSize: 35}} />
          </Badge>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentBand: state.currentBand,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Header);
