import { Button, Form, Input, InputNumber, Select } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setAppointment } from '../reducers/appointmentReducer';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AppointmentForm: React.FC = () => {
    const dispatch = useDispatch()
    
  const onFinish = (values: any) => {
    dispatch(setAppointment(values));
    console.log(values);
  };

  return (
    <div className='wrapper'>
    <div className='login-card'>
      <h1 className= 'login-card__title'>Manager Appointment Form</h1>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name="patientId" label="Patient Id" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="siteLocation" label="Site Location" >
        <Input />
      </Form.Item>

      <Form.Item label="Service Type">
        <Input.Group compact>
          <Form.Item
            name="serviceType"
            noStyle
            rules={[{ required: true, message: 'Service Type is required' }]}
          >
            <Select placeholder="Select Type">
              <Option value="Pfizer">Pfizer</Option>
              <Option value="JNJ">JNJ</Option>
            </Select>
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item name="confirmationCode" labelCol={{ span: 10 }}
      wrapperCol={{ span: 16 }}
        label="Confirmation Code" rules={[{ type: 'number'}] } >
        <InputNumber style={{width: "100%"}} />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>

  );
};

export default AppointmentForm;