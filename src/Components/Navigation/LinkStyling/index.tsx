import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Divider, Button, Drawer } from 'antd'
import Sider from 'antd/es/layout/Sider'

import {
    AiOutlineHome,
    AiOutlineCalendar,
    AiOutlineQuestionCircle,
    AiOutlineMail,
    AiOutlineSetting,
    AiOutlineMenu,
    AiOutlineMenuUnfold,
    AiOutlineMenuFold
} from 'react-icons/ai'
import {
    MdOutlineDashboard,
    MdOutlineManageAccounts,
    MdOutlineSupportAgent
} from 'react-icons/md'
import { FiUsers, FiMessageSquare, FiLogOut } from 'react-icons/fi'


const LinkStyling = () => {
 
    return (  
        <Menu theme="light" mode="inline">
            <AiOutlineMenu />
            <h1>Menu:</h1>
            <Menu.Item key="1">
            <AiOutlineHome />
            <span>Home</span>
            <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
            <MdOutlineDashboard />
            <span>Dashboard</span>
            <Link to="/dashboard" />
            </Menu.Item>
            <Menu.Item key="3">
            <FiUsers />
            <span>Users</span>
            <Link to="/users" />
            </Menu.Item>
            <Menu.Item key="4">
            <FiMessageSquare />
            <span>Conversations</span>
            <Link to="/conversations" />
            </Menu.Item>
            <Menu.Item key="5">
            <AiOutlineCalendar />
            <span>Calendar</span>
            <Link to="/calendar" />
            </Menu.Item>
            <Divider />
            <Menu theme="dark" mode="inline">
            <MdOutlineSupportAgent />
            <h1>Support:</h1>
            <Menu.Item key="6">
                <AiOutlineQuestionCircle />
                <span>Need Help?</span>
              {/* <Link to="/conversations"/> */}
            </Menu.Item>
            <Menu.Item key="7">
                <AiOutlineMail />
                <span>Contact Us</span>
              {/* <Link to="/calendar"/> */}
            </Menu.Item>
            </Menu>
            <Divider />
            <Menu theme="dark" mode="inline">
            <AiOutlineSetting />
            <h1>Settings:</h1>
            <Menu.Item key="8">
                <MdOutlineManageAccounts />
                <span>Account</span>
              {/* <Link to="/"/> */}
            </Menu.Item>
            <Menu.Item key="9">
                <FiLogOut />
                <span>Logout</span>
              {/* <Link to="/"/> */}
            </Menu.Item>
            </Menu>
        </Menu>
 
    )
}

export default LinkStyling


