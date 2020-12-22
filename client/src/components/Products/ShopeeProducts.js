import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Products.css'
// import products from '../../data/products'
import ShopeeProduct from './ShopeeProduct'

const ShopeeProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/server/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])

    return (
        <div className="products-container">
            <h1>Hot Products</h1>
            <div className="products-list">
                {products.map(product => (
                    <div key={product._id} className="product-info">
                        <ShopeeProduct product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopeeProducts
