import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';

import './ClientPatientRegisterForm.css';

const { Option } = Select;

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const ClientPatientRegisterForm = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setComponentDisabled(disabled);
  };

  return (
    <div className='wrapper'>
    <div className='card'>

    <h1 className= 'card__title'>CLIENT PATIENT REGISTRATION FORM</h1>

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
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
            <Input style={{ width: '30%' }} placeholder="state" />
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
            <Input style={{ width: '30%' }} placeholder="Insurance Provider" />
          </Form.Item>


          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className='btn-register' type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
        
      {/* <Form.Item label="Payment Information">
          <Input />
        </Form.Item>

        <Form.Item label="Insurance ID">
          <Input />
        </Form.Item>

        <Form.Item label="Member ID">
          <Input />
        </Form.Item>

        <Form.Item label="Insurance Provider">
          <Input />
        </Form.Item> */}


        {/* <Form.Item label="Chekbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>




        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item> */}
      </Form>
      </div>
      </div>
  );
};

export default () => <ClientPatientRegisterForm />;