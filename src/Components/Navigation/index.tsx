import React, { useState } from 'react'
import '../Navigation/Navigation.css'
import LinkStyling from './LinkStyling'
import { Button, Divider, Drawer } from 'antd'
import Headline from './Headline'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import Sider from 'antd/es/layout/Sider'

const Navigation = () => {
const [open, setOpen] = useState(false)

const openDrawer = () => {
    setOpen(true)
}
const onClose = () => {
    setOpen(false)
}
return (
    <Sider theme="light">
    <Headline />
    <Divider />
    <Button onClick={openDrawer}>
        {true ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />} MENU
    </Button>

    <Drawer title="Menu" placement="left" onClose={onClose} open={open}>
        <LinkStyling />
    </Drawer>
    </Sider>
)
}

export default Navigation

