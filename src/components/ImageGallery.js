import React from 'react';
import { Card, Col, Row } from 'antd';

class ImageGallery extends React.Component {

  render() {
    return(
      <Row type="flex" justify="center">
          <Col span={18}>
            <Card
               hoverable
               cover={<img alt="example" src={this.props.image} />}
               style={{ margin: "10px" }}
               bodyStyle={{padding: "0"}}
             >

            </Card>
          </Col>
      </Row>
    )
  }
}

export default ImageGallery;
