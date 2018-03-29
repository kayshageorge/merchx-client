import React from 'react';
import { Row, Col, Icon, Badge } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BandHeader extends React.Component {
  render() {
    const bandName = this.props.user.band_name
    return (
      <Row type="flex" justify="center" align="center" style={{marginTop: "15px"}}>
        <Col span={18} style={{display: "flex", justifyContent: "center"}}>
          <Link to={`/band/${this.props.user.id}`}>
            <h1>{bandName}</h1>
          </Link>
        </Col>
        <Col span={6}>
        
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(BandHeader);
