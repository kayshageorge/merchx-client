import React from 'react';
import localStore from '../lib/localStore';
import { Token } from '../lib/requests';
import { Row, Col, Form, Input, Button, Icon } from 'antd';
import { Redirect, Link } from 'react-router-dom';

const FormItem = Form.Item;

class BandSignIn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSignIn= () => {} } = this.props;
    const formData = new FormData(e.currentTarget);

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        Token.create({
          email: values.email,
          password: values.password
        }).then(data => {
          if (!data.errors) {
            localStore.set('jwt', data.jwt);
            onSignIn();
            console.log(data.jwt)
            this.props.history.push('/');
          } else {
            this.setState({
              errors: [{
                message: "Invalid Username or Password!"
              }]
            })
          }
        })
      }
    });
  }

  render() {
    const { errors } = this.state
    const { getFieldDecorator } = this.props.form;
    return(
      <div className="getsBackground">
        <Row type="flex" align="middle" style={{height: '100vh'}}>
          <Col span={18} offset={3} style={{margin: 'auto'}}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <Link to='/band/sign_up'>register now!</Link>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

const WrappedSignIn = Form.create()(BandSignIn);

export default WrappedSignIn;
