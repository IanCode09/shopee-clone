import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const ShopeeProduct = ({ product }) => {
    return (
        <>
            <Link to={`/shopee/${product._id}`}>
                <img src={product.image} alt={product.nameProduct} />
                <p className="text-light">{product.nameProduct}</p>
                <p style={{ color: 'rgb(197, 204, 155)',  marginTop: 10 }}>Rp.{product.price}</p>
            </Link>
        </>
    )
}

export default ShopeeProduct
