import { Divider, Input, Button, Layout } from 'antd'
import { AiOutlineSend } from 'react-icons/ai'
import { GrImage, GrEmoji } from 'react-icons/gr'
import React from 'react'
import './SendMessage.css'

const SendMessage = () => {
return (
    <div className="send-message">
    <Divider />
    <div className="send-container">
        <Input placeholder="Type message here..." className="send-input" />
        <div className="send-options">
        <Button className="send-btn">
            <AiOutlineSend />
        </Button>
        <Button className="send-btn">
            <GrImage />
        </Button>
        <Button className="send-btn">
            <GrEmoji />
        </Button>
        </div>
    </div>
    </div>
)
}

export default SendMessage
