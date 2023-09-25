import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'

interface FieldType {
    username?: string;
    password?: string;
    remember?: string;
}

const Login = () => {
    return (

        <div className="login-container">
            <Form name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 500}}
            >
            <h1>Login:</h1>
            <Form.Item<FieldType>
            label="Username"
            name="username" 
            >
                <Input/>
            </Form.Item>
            <Form.Item<FieldType>
                label="Password"
                name="password"
                >
                <Input />
            </Form.Item>
            <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            >
                <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
            </Form>
            <div>
                <h1>New User?</h1>
                <Button>Signup</Button>
            </div>

    </div>
        )
}

export default Login
