import React from 'react';
import { Row, Col } from 'antd';
import AntLogo from '../images/AntLogo.png';

class AppFooter extends React.Component {
  render(){
    return(
      <div className="getsBackground" style={{marginTop: '20px'}}>
        <Row type="flex" justify="center" align="center">
          <Col span={18} style={{display: "flex", justifyContent: "center"}}>
            <img src={AntLogo} style={{height: '75px', marginBottom: '5px'}} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default AppFooter;
