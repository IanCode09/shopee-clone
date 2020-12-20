import React from 'react'
import './Products.css'

const ShopeeProduct = ({ product }) => {
    return (
        <>
            <img src={product.image} alt={product.name} />
            <p className="text-light">{product.name}</p>
            <p style={{ color: ' rgb(197, 204, 155)',  marginTop: 10 }}>Rp.{product.price}</p>
        </>
    )
}

export default ShopeeProduct
