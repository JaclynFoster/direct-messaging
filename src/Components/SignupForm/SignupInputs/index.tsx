import { Input, Button, Form } from 'antd'
import React from 'react'

interface SignupValue {
    name: string;
    value: string;
    required: boolean;
}

interface SignupType {
    first_name: SignupValue;
    last_name: SignupValue;
    email: SignupValue;
    username: SignupValue;
    password: SignupValue;
}

interface SignupTypeProps {
    signupType: SignupType;
    setSignupType: (value: SignupType) => void;
}
const SignupInputs = (props: SignupTypeProps) => {
    const { signupType, setSignupType } = props

const getKeyVal = (keyName: string) => {
    switch (keyName) {
        case 'first_name':
        return 'first_name'
        case 'last_name':
        return 'last_name'
        case 'email':
        return 'email'
        case 'username':
        return 'username'
        case 'password':
        return 'password'
        default:
        return 'first_name'
    }
    }
const onHandleChange = (keyname: string, inputValue: string) => {
    const keyvalue = getKeyVal(keyname)
    setSignupType({
        ...signupType,
        [keyvalue]: {
        ...signupType[keyvalue],
        value: inputValue
        }
    })
    }

return (
    <div>
    {Object.keys(signupType).map((keyName: string) => {
        const keyvalue = getKeyVal(keyName)
        return (
        <div key={keyvalue}>
            <label>{signupType[keyvalue].name}</label>
            <label>{signupType[keyvalue].required ? <span>*</span> : ''}</label>
            <Input
            placeholder={signupType[keyvalue].name}
            value={signupType[keyvalue].value}
            onChange={e => onHandleChange(keyvalue, e.target.value)}
            />
        </div>
        )
    })}
    </div>
)
}

export default SignupInputs
