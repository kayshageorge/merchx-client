import React from 'react';
import { Row, Col } from 'antd';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={18}>
            <h1>Band Name</h1>
          </Col>
          <Col span={6}>
            <h1>Cart</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
