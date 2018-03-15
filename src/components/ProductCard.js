import React from 'react';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

class ProductCard extends React.Component {
  render() {
    const { title, images, description, band_id } = this.props.product;

    return(
      <div>
        <Row>
          <Col span={12}>
            <Card
               hoverable
               cover={<img alt="example" src={images} />}
             >
               <Meta
                 title={title}
                 description="www.instagram.com"
               />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProductCard;
