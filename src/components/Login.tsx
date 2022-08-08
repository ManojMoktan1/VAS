import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsUserLoggedIn } from '../reducers/authReducer';
import './Login.css'

const Login: React.FC = () => {

  const dispatch = useDispatch()

  
  const navigate = useNavigate()

  
  const isLoggedIn = useSelector((state:any) => state.auth.isUserLoggedIn )
  
    const onFinish = (values: any) => {

      if( values.email === "manoj@gmail.com" && values.password === "moktan") {
        dispatch(setIsUserLoggedIn(true));      
        navigate("/")
        
      } else if(isLoggedIn === true){
        navigate("/")
      }
      else {
        navigate('/login')
        
      }
      };

    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <div className='wrapper'>
          <div className='login-card'>
            <h1 className= 'login-card__title'>WELCOME TO VAS!</h1>
            <h1 className= 'login-card__title1'>LOGIN HERE</h1>
            <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        
        
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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" className='input-field' data-testid="email-input" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          className='input-field'
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          data-testid="password-input"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button btn-login">
          Log in
        </Button>
        <div className='register-now'>
          Don't have an account? <a href="" onClick={()=>{{navigate('/register')}}}>register now! </a>
        </div>
      </Form.Item>
    </Form>
          </div>
        </div>
      );
    };
    
    export default Login;
