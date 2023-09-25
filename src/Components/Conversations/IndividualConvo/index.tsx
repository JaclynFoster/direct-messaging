import React from 'react'
import './IndividualConvo.css'

const IndividualConvo = () => {
return (
    <div className="individual-container">
    <div className="convoImg-container">
        <img
        className="convo-img"
        src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/337532976_791402431832331_3528733174529250909_n.jpg?stp=c0.22.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=QCOdGU_8TZMAX-aDowX&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD9KhX49LNsM_Sm-zsQ2CCAN_yCQpwjcsWW3SBdLTBnhw&oe=651792C3"
        />
    </div>
    <div className="flex-container">
        <div className="subject-container">
        <h4>Job Expectations</h4>
        <span>6:04 PM</span>
        </div>
        <div className="badge-container">
        <pre className="badge-pre">
            Some random snippet from the actual message
        </pre>
        <span className="badge">4</span>
        </div>
    </div>
    </div>
)
}

export default IndividualConvo
