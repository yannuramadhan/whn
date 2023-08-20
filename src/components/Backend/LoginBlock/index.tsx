import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { Button, Form, Input, Row, Col, message } from 'antd';
import './styles.css';

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
      history.push('/dashboard');
    }
  }, [history]);

  const onFinish = async (values: User) => {
    try {
      const response = await axios.get('http://localhost:4000/users', {
        params: {
          username: values.username,
          password: values.password
        }
      });
      const users: User[] = response.data;
      const loggedInUser = users.find(user => user.username === values.username && user.password === values.password);

      if (loggedInUser) {
        message.success("Login Berhasil");
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        history.push('/dashboard');
      } else {
        message.error("Username / Password Salah");
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Gagal:', errorInfo);
  };

  return (
    <div className="login-form">
      <p className="login-title">LOGIN</p>
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
    </div>
  );
};

export default Login;
