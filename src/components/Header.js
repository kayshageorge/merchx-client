import React from 'react';
import { Row, Col, Icon, Badge } from 'antd';

class Header extends React.Component {
  render() {
    return (
      <Row type="flex" justify="space-between" align="center" style={{marginTop: "13px"}}>
        <Col span={18}>
          <h1>{this.props.band}</h1>
        </Col>
        <Col span={3}>
          <Badge count={2}>
            <Icon type="shopping-cart" style={{ fontSize: 35}} />
          </Badge>
        </Col>
      </Row>
    );
  }
}

export default Header;
