import React from 'react'
import "../Navigation/Navigation.css"
import LinkStyling from './LinkStyling'
import { Layout } from 'antd'
import Headline from './Headline'
import Sider from 'antd/es/layout/Sider'

const Navigation = () => {

    return (
    <div>
        <Headline />
        <LinkStyling />
    </div>
    )
}

export default Navigation
