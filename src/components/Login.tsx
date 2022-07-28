import { Button, Form, Input } from 'antd';
import React from "react";
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsUserLoggedIn } from '../reducers/authReducer';
import './Login.css'

const Login: React.FC = () => {

  const dispatch = useDispatch()

  
  const navigate = useNavigate();


  
    const onFinish = (values: any) => {
      if( values.username === "manoj" && values.password === "hero") {
        dispatch(setIsUserLoggedIn(true));
        navigate("/")
        
      } else {
        console.log("wrong pass");
        
      }
      };

    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <div className='wrapper'>
          <div className='login-card'>
            <h1 className= 'login-card__title'>LOGIN HERE</h1>
            <Form className='align-form'
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
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button className='btn-login' type="primary" htmlType="submit">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    };
    
    export default Login;
