import React from 'react';
import { Row, Col, Icon, Badge } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    let bandName = '';
    let id = '';
    let icon;
    console.log('user', this.props.user)

    if (this.props.user) {
      bandName = this.props.user.band_name
      id = this.props.user.id
      icon = <Link to={`/sign_in`}>
              <Icon type="logout" style={{ fontSize: 20, alignSelf: 'end'}} />
            </Link>
    } else {
      bandName = this.props.currentBand.band_name
      id = this.props.currentBand.id
      icon =   <Link to={`/cart`}>
                <Badge count={this.props.cart.length}>
                  <Icon type="shopping-cart" style={{ fontSize: 35}} />
                </Badge>
              </Link>
    }
    console.log(this.props)
    return (
      <Row type="flex" justify="space-between" align="center" style={{marginTop: "15px", marginRight: "10px", marginLeft: "10px"}}>
        <Col span={18}>
          <Link to={`/band/${id}`}>
            <h1>{bandName}</h1>
          </Link>
        </Col>
        <Col span={3} style={{alignItems: 'center'}}>
          {icon}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentBand: state.currentBand,
    cart: state.cart,
    user: state.user,
  }
}

export default connect(mapStateToProps)(Header);
