import React from 'react';
import { Row, Col, Icon, Badge } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CartHeader extends React.Component {
  render() {
    const bandName = this.props.currentBand.band_name
    return (
      <div className="getsBackground">
        <Row type="flex" justify="center" align="center">
          <Col span={18} style={{display: "flex", justifyContent: "center"}}>
            <Link style={{marginTop: "15px"}} to={`/band/${this.props.currentBand.id}`}>
              <h1>{bandName}</h1>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentBand: state.currentBand,
  }
}

export default connect(mapStateToProps)(CartHeader);
