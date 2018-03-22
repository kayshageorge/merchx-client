import React from 'react';
import { Input, Col, Row, Form, Button } from 'antd';
import { Band } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';
import { Redirect } from 'react-router-dom';

class Portal extends React.Component {
  constructor() {
    super();
    this.state = {bandName: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({bandName: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    Band.search(this.state.bandName).then(data => {
      this.props.updateCurrentBand(data[0].id)
      return data[0].id
    }).then((id) => this.props.history.push(`/band/${id}`))
  }

  render(){
    const band = this.props.currentBand;

    return(
      <Form onSubmit={this.handleSubmit} >
        <Row type="flex" align="middle" style={{height: '100vh'}}>
          <Col span={18} offset={3} style={{margin: 'auto'}}>
            <div>
              <Input value={this.state.bandName} onChange={this.handleChange} required placeholder="Enter access code..."/>
              <div style={{marginLeft: "40%", marginTop: "5px"}}>
                <Button type="primary" htmlType="submit">Enter</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentBand: state.currentBand
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentBand: (band) => dispatch(uiActions.updateCurrentBand(band)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
