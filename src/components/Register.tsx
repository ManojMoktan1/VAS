import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
  import React from 'react';
import { Link } from 'react-router-dom';

  import './Login.css'
  
 
  
  
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 10,
      },
    },
  };
  
  const Register: React.FC = () => {
    const [form] = Form.useForm();
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  

    
    return (
        <div className='wrapper'>
        <div className='login-card register-card'>
          <h1 className= 'login-card__title'>WELCOME TO VAS!</h1>
          <h1 className= 'login-card__title'>REGISTER HERE</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <div className='register-now'>
          Have an account? <Link  to='/login'> login here! </Link>
        </div>

        </Form.Item>

      </Form>
      </div>
      </div>
    );
  };
  
  export default Register;