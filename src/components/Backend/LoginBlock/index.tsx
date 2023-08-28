import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, message } from 'antd';
import { BodyContainer, LoginForm, LoginTitle } from "./styles";

interface User {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    if (storedLoggedInStatus === 'true') {
      setIsLoggedIn(true);
      window.location.href = "/dashboard";
    }
  }, [history]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isLoggedIn) {
      console.log('Setting timeout...');
      timeout = setTimeout(() => {
        setIsLoggedIn(false);
        console.log('timeout...');
        localStorage.setItem('isLoggedIn', 'false');
      }, 60000); 
    }
  }, [isLoggedIn]);

  const onFinish = async (values: User) => {
    try {
      const response = await axios.get('https://api.whnmandiri.co.id/login', {
        params: {
          username: values.username,
          password: values.password
        }
      });

      if (response.data.message === 'Login successful') {
        message.success("Login Berhasil");
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "/dashboard";
      } 

    } catch (error) {
      console.error('Error:', error);
      message.error("Username / Password Salah");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Gagal:', errorInfo);
  };
  
  return (
    <BodyContainer>
      <LoginForm>
        <LoginTitle>Login</LoginTitle>
        <Form 
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Silakan masukkan username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Silakan masukkan password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              <span>Masuk</span>
            </Button>
          </Form.Item>
        </Form>
      </LoginForm>
    </BodyContainer>
  );
};

export default Login;
