import React, { Fragment, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Upload,
} from 'antd';

import './ClientPatientRegisterForm.css';

const ManagerAndPatientForm = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setComponentDisabled(disabled);
  };

  return (
<Fragment>

      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Form.Item label="First Name">
          <Input />
        </Form.Item>

        <Form.Item label="Last Name">
          <Input />
        </Form.Item>

        <Form.Item label="Date of Birth">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Ethnicity">
          <Input />
        </Form.Item>

        <Form.Item label="Gender">
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
            <Radio value="other"> Other </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: false,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>


    <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={['address', 'state']}
            noStyle
          >

          <Form.Item
            name={['address', 'street']}
            noStyle
          >
            <Input style={{ width: '30%' }} placeholder="street" />
          </Form.Item>

          <Form.Item
            name={['address', 'city']}
            noStyle
          >
            <Input style={{ width: '30%' }} placeholder="city" />
          </Form.Item>

          <Form.Item
            name={['address', 'state']}
            noStyle
          >
            <Input style={{ width: '40%' }} placeholder="state" />
          </Form.Item>



          </Form.Item>
        </Input.Group>
      </Form.Item>


      <Form.Item label="Payment Information">
        <Input.Group compact>
          <Form.Item
            name={['payment', 'information']}
            noStyle
          >

          <Form.Item
            name={['payment', 'insurance']}
            noStyle
          >
            <Input style={{ width: '30%' }} placeholder="Insurance ID" />
          </Form.Item>

          <Form.Item
            name={['payment', 'member']}
            noStyle
          >
            <Input style={{ width: '30%' }} placeholder="Member ID" />
          </Form.Item>

          <Form.Item
            name={['payment', 'provider']}
            noStyle
          >
            <Input style={{ width: '40%' }} placeholder="Insurance Provider" />
          </Form.Item>


          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item label="Document Image" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className='btn-register' type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        
      </Form>
      </Fragment>
  );
};

export default () => <ManagerAndPatientForm />;