/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
} from 'antd';

const LoginComponent = (props) => {
  const { handleLogin } = props;

  return (
    <Form layout="vertical" className="login-form">
      <Form.Item>
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
      </Form.Item>
      <Form.Item>
        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot" href="">Forgot password</a>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleLogin}>Log in</Button>
        Or
        <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;
