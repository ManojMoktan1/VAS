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


const { TextArea } = Input;

const { RangePicker } = DatePicker;
const VaccinationCreateForm = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setComponentDisabled(disabled);
  };

  return (
    <div className='wrapper'>
    <div className='card'>

    <h1 className= 'card__title'>VACCINATION FORM</h1>

      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Form.Item label="Service Name">
          <Input />
        </Form.Item>

        <Form.Item label="Site Location">
          <Input />
        </Form.Item>

        <Form.Item name="range-picker" label="Start and End Date" >
          <RangePicker />
        </Form.Item>

        <Form.Item label="Dose Type">
          <Select>
            <Select.Option value="single">Single</Select.Option>
            <Select.Option value="multiple">Multiple</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Duration">
          <Input />
        </Form.Item>

        <Form.Item label="Gender">
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
            <Radio value="other"> Other </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="ageGreaterThan" 
        label="Age greater than" rules={[{ type: 'number'}] } >
        <InputNumber style={{width: "100%"}} />
      </Form.Item>


        <Form.Item label="Ethnicity">
          <Input />
        </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className='btn-register' type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        
      </Form>
      </div>
      </div>
  );
};

export default () => <VaccinationCreateForm />;