import React from 'react'
import { Link } from 'react-router-dom'
import LinkStyling from '../LinkStyling'

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
    <div className="nav-links-main">
        {links.map(link => {
        return (
        <div key={link.text}>
            <LinkStyling propsStyle={{}} propsClass="" to={link.route}>
            {link.text}
            </LinkStyling>
        </div>
        )
    })}
    </div>
)
}

export default NavLinks
