import React from 'react'
import { Link } from 'react-router-dom'

interface LinkProps {
    to: string;
    children: string;
    propsClass: string;
    propsStyle: any;
}

const LinkStyling = (props: LinkProps) => {
    return (
    <Link
        className={'links' + (props.propsClass || '')}
        style={{
        textDecoration: 'none',
        ...(props.propsStyle || {})
        }}
        to={props.to}
    >
        {props.children}
    </Link>
    )
}

export default LinkStyling
