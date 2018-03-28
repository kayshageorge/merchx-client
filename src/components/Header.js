import React from 'react';
import { Row, Col, Icon, Badge } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const bandName = this.props.currentBand.band_name
    return (
      <Row type="flex" justify="space-between" align="center" style={{marginTop: "15px", marginRight: "10px", marginLeft: "10px"}}>
        <Col span={18}>
          <Link to={`/band/${this.props.currentBand.id}`}>
            <h1>{bandName}</h1>
          </Link>
        </Col>
        <Col span={3}>
          <Link to={`/cart`}>
            <Badge count={this.props.cart.length}>
              <Icon type="shopping-cart" style={{ fontSize: 35}} />
            </Badge>
          </Link>
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
