import React from 'react';
import { Button, Row, Col } from 'antd';

class CartFooter extends React.Component {
  render() {
    return(
      <div>
        <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Col offset={1} span={17}>
            <p>Total: $$$$$</p>
          </Col>
          <Col span={6}>
            <Button style={{marginTop: "10px", marginBottom: "15px"}} size="large">Checkout</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CartFooter;
