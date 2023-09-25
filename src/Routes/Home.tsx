import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'

const Home = () => {
    return <div>
        <h1>My Home Page</h1>
        <Menu theme="dark" mode="inline">
        <Menu.Item key="10">
        <span>Login / Signup</span>
        <Link to="/login" />
        </Menu.Item>
        </Menu>
    </div>
}

export default Home
