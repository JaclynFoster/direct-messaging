import React from 'react'
import { Link } from 'react-router-dom'
import LinkStyling from '../LinkStyling'
import '../Navigation.css'
import { Divider } from 'antd'
import {FaRegFaceGrinTongueWink} from 'react-icons/fa6'
import {LuHelpCircle} from 'react-icons/lu'
import {AiOutlineMail, AiOutlineLogout} from 'react-icons/ai'
import {RiAccountCircleLine} from 'react-icons/ri'

const NavLinks = () => {
const links = [
    {
        text: 'Home',
        route: '/'
    },
    {
        text: 'Dashboard',
        route: '/dashboard'
    },
    {
        text: 'Users',
        route: '/users'
    },
    {
        text: 'Conversations',
        route: '/conversations'
    },
    {
        text: 'Calendar',
        route: '/calendar'
    }
]

return (
    <div>
        <h1>WELCOME</h1>
        <Divider />
        <div className="profile-pic">
            <FaRegFaceGrinTongueWink/>
            <div className="tagline">
            <label>First Last</label>
            <span>My Tagline</span>
            </div>
        </div>
        <Divider />
        <div className="nav-links-main">
        <label>Menu:</label>
        {links.map(link => {
            return (
                <div key={link.text}>
            <LinkStyling propsStyle={{}} propsClass="" to={link.route}>
            {link.text}
            </LinkStyling>
        </div>
        )
    })}
    <Divider />
    <div>
    <label>Support:</label>
    <LuHelpCircle />
        <h5>Need Help?</h5>
        <AiOutlineMail />
        <h5>Contact Us</h5>
    </div>
    <Divider />
    <div>
        <label>Settings:</label>
        <RiAccountCircleLine />
        <h5>Account</h5>
        <AiOutlineLogout />
        <h5>Logout</h5>
    </div>
    </div>
    </div>
)
}

export default NavLinks
