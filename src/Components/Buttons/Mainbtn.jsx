import React from 'react'
import { Link } from 'react-router-dom'

export default function Mainbtn({ className = '', text, to = "#", }) {
    return (
        <>
            <Link to={to} className={`main-btn ${className}`}>
                {text}
            </Link>
        </>
    )
}
