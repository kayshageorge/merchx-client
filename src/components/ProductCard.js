import React from 'react';
import { Card, Col } from 'antd';
const { Meta } = Card;

class ProductCard extends React.Component {
  render() {
    const { title, images, description, band_id, price } = this.props.product;

    return(
      <div>
          <Col span={12}>
            <Card
               hoverable
               cover={<img style={{height: "30vh"}} alt="example" src={images} />}
               style={{ margin: "10px" }}
             >
               <Meta
                 title={title}
                 description={`$${price}`}
               />
            </Card>
          </Col>
      </div>
    )
  }
}

export default ProductCard;
