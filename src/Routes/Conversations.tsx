import React from 'react'
import SearchMessages from '../Components/Conversations/SearchMessages'
import '../Components/Conversations/Conversations.css'
import { Content } from 'antd/es/layout/layout'
import ConvoList from '../Components/Conversations/ConvoList'

const Conversations = () => {
    return (
    <Content>
      {/* Conversations page will have a nested routes link for when the user clicks on specific conversations allowing user to access chat messaging */}
    <SearchMessages />
    <ConvoList />

    </Content>
    )
}

export default Conversations
