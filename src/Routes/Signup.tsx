import { Input, Button, Form} from "antd";
import React from "react";

interface SignupType {
firstName?: string;
lastName?: string;
email?: string;
newUsername?: string;
newPassword?: string;
}

const Signup = () => {
    return (
      <Form
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      style={{maxWidth: 600}}
      >
        <h1>Create a New User!</h1>
        <Form.Item<SignupType>
        label="First Name:"
        >
          <Input />
        </Form.Item>
        <Form.Item<SignupType>
        label="Last Name:"
        >
        <Input />
        </Form.Item>
        <Form.Item<SignupType>
        label="Email:"
        >
          <Input />
        </Form.Item>
        <Form.Item<SignupType>
        label="Username:"
        >
        <Input />
        </Form.Item>
        <Form.Item<SignupType>
        label="Password:"
        >
        <Input />
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">Create User</Button>
        </Form.Item>
      </Form>
    )
}

export default Signup