import React from 'react'
import './Messaging.css'
import MessagingTitle from './MessagingTitle'
import MessagingContent from './MessagingContent'
import { Divider } from 'antd'
import SendMessage from './SendMessage'


const Messaging = () => {
return (
<div className="messaging-container">
    <div>
    <MessagingTitle />
    <MessagingContent />
    </div>
    <div>
    <SendMessage />
    </div>
</div>
)
}

export default Messaging
