import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Divider } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { FaRegFaceGrinTongueWink } from 'react-icons/fa6'
import {AiOutlineHome, AiOutlineCalendar, AiOutlineQuestionCircle, AiOutlineMail, AiOutlineSetting, AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineDashboard, MdOutlineManageAccounts, MdOutlineSupportAgent} from 'react-icons/md'
import {FiUsers, FiMessageSquare, FiLogOut} from 'react-icons/fi'

const LinkStyling = () => {
return (
    <Sider>
    <h1 className="welcome">WELCOME</h1>
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
        <AiOutlineMenu/>
        <h1>Menu:</h1>
        <Menu.Item key="1">
        <AiOutlineHome/>
        <span>Home</span>
        <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2">
        <MdOutlineDashboard/>
        <span>Dashboard</span>
        <Link to="/dashboard" />
        </Menu.Item>
        <Menu.Item key="3">
        <FiUsers/>
        <span>Users</span>
        <Link to="/users" />
        </Menu.Item>
        <Menu.Item key="4">
        <FiMessageSquare/>
        <span>Conversations</span>
        <Link to="/conversations" />
        </Menu.Item>
        <Menu.Item key="5">
        <AiOutlineCalendar/>
        <span>Calendar</span>
        <Link to="/calendar" />
        </Menu.Item>
    </Menu>
    <Divider />
    <Menu theme="dark" mode="inline">
        <MdOutlineSupportAgent/>
        <h1>Support:</h1>
        <Menu.Item key="6">
        <AiOutlineQuestionCircle/>
        <span>Need Help?</span>
          {/* <Link to="/conversations"/> */}
        </Menu.Item>
        <Menu.Item key="7">
        <AiOutlineMail/>
        <span>Contact Us</span>
          {/* <Link to="/calendar"/> */}
        </Menu.Item>
    </Menu>
    <Divider />
    <Menu theme="dark" mode="inline">
        <AiOutlineSetting/>
        <h1>Settings:</h1>
        <Menu.Item key="8">
        <MdOutlineManageAccounts/>
        <span>Account</span>
          {/* <Link to="/"/> */}
        </Menu.Item>
        <Menu.Item key="9">
        <FiLogOut/>
        <span>Logout</span>
          {/* <Link to="/"/> */}
        </Menu.Item>
    </Menu>
    </Sider>
)
}

export default LinkStyling

