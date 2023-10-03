import React, { useState } from 'react'
import { Button } from 'antd'
import axios from 'axios'
import SignupInputs from './SignupInputs'

const SignupForm = () => {
const initialSignupState = {
    first_name: { value: '', name: 'First Name', required: false },
    last_name: { value: '', name: 'Last Name', required: false },
    email: { value: '', name: 'Email', required: true },
    username: { value: '', name: 'Username', required: true },
    password: { value: '', name: 'Password', required: true }
    }

const [signupFields, setSignupFields] = React.useState(initialSignupState)

const stateReset = () => {
    setSignupFields(initialSignupState)
}

const createUser = () => {
    axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/createUser`, {
        first_name: signupFields.first_name.value,
        last_name: signupFields.last_name.value,
        email: signupFields.email.value,
        username: signupFields.username.value,
        password: signupFields.password.value
    })
    .then(response => {
        console.log('Create User Results:', response.data)
        stateReset()
    })
    .catch(error => {
        console.log('Create User Error:', error)
    })
}

return (
    <div>
        <h1>Create a New User!</h1>
        <SignupInputs signupType={signupFields} setSignupType={setSignupFields} />
        <Button type="primary" onClick={createUser}>
        Create User
        </Button>
    </div>
    )
}

export default SignupForm
