import React from 'react'
import './Products.css'
import products from '../../data/products'
import ShopeeProduct from './ShopeeProduct'

const ShopeeProducts = () => {
    return (
        <div className="products-container">
            {products.map(product => (
                <div key={product._id} className="product-info">
                    <ShopeeProduct product={product} />
                </div>
            ))}
        </div>
    )
}

export default ShopeeProducts
