import React from 'react';
import {Row, Col} from 'antd';
import {CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement } from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <div>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <Col span={12}>
            <label>
              Card Number
              <CardNumberElement style={{base: {fontSize: '18px'}}} />
            </label>
          </Col>
        </Row>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <Col>
            <label>
              Expiry Date
              <CardExpiryElement style={{base: {fontSize: '18px'}}} />
            </label>
          </Col>
        </Row>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <Col>
            <label>
              CVC
              <CardCVCElement style={{base: {fontSize: '18px'}}} />
            </label>
          </Col>
        </Row>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <Col>
            <label>
              Postal Code
              <PostalCodeElement style={{base: {fontSize: '18px'}}} />
            </label>
          </Col>
        </Row>
      </div>
    );
  }
};


export default CardSection;
