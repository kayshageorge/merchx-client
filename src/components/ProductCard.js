import React from 'react';
import { Card, Col } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

class ProductCard extends React.Component {
  render() {
    const { id, title, images, description, band_id, price } = this.props.product;

    return(
      <div>
        <Link to={`/products/${id}`}>
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
        </Link>
      </div>
    )
  }
}

export default ProductCard;
