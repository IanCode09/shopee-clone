import React from 'react'
import { Link } from 'react-router-dom'
import shopeeLogo from '../../assets/images/logo.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className="Brand-Icon">
            <Link to='/'>
                <img src={shopeeLogo} alt="Logo" />
            </Link>
        </div>
    )
}

export default Logo
