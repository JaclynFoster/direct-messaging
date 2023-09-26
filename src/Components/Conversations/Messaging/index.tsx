import React from 'react'
import './Messaging.css'
import {AiOutlinePlusCircle, AiOutlineVideoCamera, AiOutlineSetting} from 'react-icons/ai'
import {HiOutlineBellAlert} from 'react-icons/hi2'

const Messaging = () => {
return (
<div className="messaging-container">
<div className="messaging-title-container">
    <div>
    <h4>Job Expectations</h4>

    </div>
    <div className="messaging-users-container">
    <img className="messaging-imgs"src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/337532976_791402431832331_3528733174529250909_n.jpg?stp=c0.22.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=QCOdGU_8TZMAX-aDowX&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD9KhX49LNsM_Sm-zsQ2CCAN_yCQpwjcsWW3SBdLTBnhw&oe=651792C3"/>
    <AiOutlinePlusCircle className="messaging-imgs"/>
    </div>
    <div className="messaging-settings-container">
        <AiOutlineVideoCamera className="settings-icon"/>
        <HiOutlineBellAlert className="settings-icon"/>
        <AiOutlineSetting className="settings-icon"/>
    </div>
</div>
</div>
)
}

export default Messaging
