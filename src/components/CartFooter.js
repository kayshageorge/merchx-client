import React from 'react';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CartFooter extends React.Component {

  render() {
    return(
      <div>
        <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Col span={15}>
            <p>Total: ${this.props.amount}</p>
          </Col>
          <Col span={6}>
            <Link to='/checkout'>
              <Button style={{marginTop: "10px", marginBottom: "15px"}} type='primary' size="large">Checkout</Button>
            </Link>
          </Col>
        </Row>
        <Row style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
          <Col span={22}>
            <h4>How this is gonna go down:</h4>
            <p>Once your payment goes through, we'll send you an order confirmation email with a special QR code you can use to pick up your sweet new merch. Just bring that email to our merch table and you'll be set! Make sure to stop by before venue curfew, or your order will be cancelled and refunded.</p>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    total: state.total
  }
}

export default connect(mapStateToProps)(CartFooter);
