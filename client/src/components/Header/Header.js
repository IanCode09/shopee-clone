import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../Logo/Logo'
import BtnSearch from '../../assets/images/icons/btnsearch.png'
import BtnCart from '../../assets/images/icons/cart.png'
import Button from '../../UI/Button/Button'

const Header = () => {
    return (
        <div className="header-container">
            <Logo />
            <div className="search">
                <input type="text" className="search-input" placeholder="Search..." />
                <Button isSearch>
                    <img style={{ width: 20 }} src={BtnSearch} alt="search" />
                </Button> 
            </div>

            <Link to="/cart">
                <img style={{ width: 35 }} src={BtnCart} alt="Cart" />
            </Link>
        </div>
    )
}

export default Header
