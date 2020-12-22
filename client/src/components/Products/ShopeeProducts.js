import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Products.css'
import { dataProducts } from '../../actions/productActions'
import ShopeeProduct from './ShopeeProduct'
import Spinner from '../../UI/Spinner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const ShopeeProducts = () => {
    const dispatch = useDispatch()

    const productData = useSelector((state) => state.productData)
    const { loading, products, error } = productData

    useEffect(() => {
        dispatch(dataProducts())
    }, [dispatch])

    return (
        <div className="products-container">
            <h1>Hot Products</h1>
            {loading ? (
                <Spinner />
            ) : error ? (
                <ErrorMessage className="alert danger">{error}</ErrorMessage>
            ) : (
                <div className="products-list">
                    {products.map(product => (
                        <div key={product._id} className="product-info">
                            <ShopeeProduct product={product} />
                        </div>
                    ))}
                </div>                
            )}
        </div>
    )
}

export default ShopeeProducts
