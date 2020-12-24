import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'

const CartHeader = () => {
    return (
        <div className="cart-header-container">
            <Logo />
            Keranjang Belanja
        </div>
    )
}

export default CartHeader
