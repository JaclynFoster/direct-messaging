import React from 'react'
import SearchMessages from '../Components/Conversations/SearchMessages'
import '../Components/Conversations/Conversations.css'
import { Content } from 'antd/es/layout/layout'
import ConvoList from '../Components/Conversations/ConvoList'
import Messaging from '../Components/Conversations/Messaging'

const Conversations = () => {
    return (
    <Content>
      {/* Conversations page will have a nested routes link for when the user clicks on specific conversations allowing user to access chat messaging */}
    <SearchMessages />
    <div className="messaging-flex">

    <ConvoList />
    <Messaging />
    </div>
    </Content>

    )
}

export default Conversations
