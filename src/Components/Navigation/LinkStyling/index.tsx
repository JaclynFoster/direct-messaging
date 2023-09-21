import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Divider } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { FaRegFaceGrinTongueWink } from 'react-icons/fa6'

const LinkStyling = () => {
return (
    <Sider>
    <h1>WELCOME</h1>
    <Divider />
    <div className="profile-pic">
        <FaRegFaceGrinTongueWink />
        <div className="tagline">
        <label>First Last</label>
        <span>My Tagline</span>
        </div>
    </div>
    <Divider />
    <Menu theme="dark" mode="inline">
        <h1>Menu:</h1>
        <Menu.Item key="1">
          {/* <Icon type="pie-chart" /> */}
        <span>Home</span>
        <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2">
          {/* <Icon type=""/> */}
        <span>Dashboard</span>
        <Link to="/dashboard" />
        </Menu.Item>
        <Menu.Item key="3">
        <span>Users</span>
        <Link to="/users" />
        </Menu.Item>
        <Menu.Item key="4">
        <span>Conversations</span>
        <Link to="/conversations" />
        </Menu.Item>
        <Menu.Item key="5">
        <span>Calendar</span>
        <Link to="/calendar" />
        </Menu.Item>
    </Menu>
    <Divider />
    <Menu theme="dark" mode="inline">
        <h1>Support:</h1>
        <Menu.Item key="6">
        <span>Need Help?</span>
          {/* <Link to="/conversations"/> */}
        </Menu.Item>
        <Menu.Item key="7">
        <span>Contact Us</span>
          {/* <Link to="/calendar"/> */}
        </Menu.Item>
    </Menu>
    <Divider />
    <Menu theme="dark" mode="inline">
        <h1>Settings:</h1>
        <Menu.Item key="8">
        <span>Account</span>
          {/* <Link to="/"/> */}
        </Menu.Item>
        <Menu.Item key="9">
        <span>Logout</span>
          {/* <Link to="/"/> */}
        </Menu.Item>
    </Menu>
    </Sider>
)
}

export default LinkStyling

