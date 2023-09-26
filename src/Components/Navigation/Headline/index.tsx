import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { Divider } from 'antd'
import { FaRegFaceGrinTongueWink } from 'react-icons/fa6'

const Headline = () => {
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
        </Sider>
    )
}

export default Headline