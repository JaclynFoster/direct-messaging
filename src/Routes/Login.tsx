
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Layout } from 'antd';
import LoginForm from '../Components/LoginForm';
const {Content} = Layout



const Login = () => {
    const navigate = useNavigate()
    const  signupHandler = () => {
        navigate('/signup', {replace: true})
    }
    return (

        <Content className="login-container">
            <LoginForm />
            <div>
                <h1>New User?</h1>
                <Button onClick={() => signupHandler()}>Signup</Button>
            </div>

        </Content>
        )
}

export default Login
