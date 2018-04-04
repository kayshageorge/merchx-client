import React from 'react';
import { Row, Col } from 'antd';

class AppFooter extends React.Component {
  render(){
    return(
      <div className="getsBackground">
        <Row type="flex" justify="center" align="center">
          <Col span={18} style={{display: "flex", justifyContent: "center"}}>
            <h1>MerchAnt</h1>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AppFooter;
