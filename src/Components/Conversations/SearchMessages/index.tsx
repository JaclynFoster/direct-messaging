import { Button, Input } from 'antd'
import { AiOutlineSearch } from 'react-icons/ai'
import React from 'react'
import './SearchMessages.css'

const SearchMessages = () => {
return (
    <div className="search-container">
        <Input
        addonBefore={<AiOutlineSearch />}
        placeholder="Type to search..."
        type="search"
        />
        <Button type="primary" htmlType="submit">
        Search
        </Button>
    </div>
)
}

export default SearchMessages
