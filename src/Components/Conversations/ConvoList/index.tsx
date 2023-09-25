import { Button, Divider } from 'antd'
import React from 'react'
import './ConvoList.css'
import IndividualConvo from '../IndividualConvo'

const ConvoList = () => {
    return (
    <div className="convoList-container">
    <div className="newMessage-container">
        <h2>All Conversations</h2>
        <Button>New Message</Button>
    </div>
    <Divider />
    <IndividualConvo />
    <IndividualConvo />
    <IndividualConvo />
    </div>
)
}

export default ConvoList
