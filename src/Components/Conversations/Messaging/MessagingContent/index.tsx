import React from 'react'
import './MessagingContent.css'

const MessagingContent = () => {
return (
    <div className="messaging-content-container">
    <div className="inbound-container">
        <div className="inbound-user-container">
        <div className="inbound-user">
            <img
            className="messaging-imgs"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/337532976_791402431832331_3528733174529250909_n.jpg?stp=c0.22.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=QCOdGU_8TZMAX-aDowX&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD9KhX49LNsM_Sm-zsQ2CCAN_yCQpwjcsWW3SBdLTBnhw&oe=651792C3"
            />
            <span>First Last</span>
        </div>
        <span> 11:42 AM</span>
        </div>
        <div className="inbound-text">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        </div>
    </div>
    
    <div className="outbound-container">
        <div className="outbound-user-container">
        <div className="outbound-timestamp">
        <span>11:45 AM</span>
        </div>
        <div className="outbound-text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
        </div>
    </div>
    </div>
)
}

export default MessagingContent
