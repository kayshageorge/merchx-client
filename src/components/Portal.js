import React from 'react';
import { Input, Col, Row, Form, Button } from 'antd';
import { Band } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';
import { Redirect, Link } from 'react-router-dom';
import localStore from '../lib/localStore';
import AntLogo from '../images/AntLogo.png';

class Portal extends React.Component {
  constructor() {
    super();
    this.state = {bandName: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({bandName: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    Band.search(this.state.bandName).then(([ band ]) => {
      this.props.updateCurrentBand(band)
      localStore.set('currentBand', band )
      return band && band.id
    }).then((id) => {
      if (id) {
        this.props.history.push(`/band/${id}`)
      } else {
        this.props.updateErrorState('no such band')
      }
    })
  }

  render(){
    const band = this.props.currentBand;

    return(
      <div className="getsBackground">
        <Form onSubmit={this.handleSubmit} >
          {
            this.props.errors && <span style={{color: 'red'}}>{this.props.errors}</span>
          }
          <Row style={{display: 'flex', justifyContent: 'center', height: '40vh'}}>
            <Col>
              <img src={AntLogo} style={{height: '200px', marginTop: '75%', marginBottom: '0'}} />
            </Col>
          </Row>
          <Row type="flex" align="middle" style={{height: '57vh'}}>
            <Col span={18} offset={3} style={{margin: 'auto', marginTop: '120px'}}>
              <div>
                <Input value={this.state.bandName} onChange={this.handleChange} required placeholder="Enter access code..."/>
                <div style={{marginLeft: "40%", marginTop: "5px"}}>
                  <Button className="button" type="primary" htmlType="submit">Enter</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col offset={19} span={5}>
              <Link to='/band/sign_in'>In a band?</Link>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentBand: state.currentBand,
    errors: state.errors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentBand: (band) => dispatch(uiActions.updateCurrentBand(band)),
    updateErrorState: (error) => dispatch(uiActions.updateErrorState(error)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
