import React from 'react'
import features from './features'
import ShopeeFeature from './ShopeeFeature'
import './Features.css'

const ShopeeFeatures = () => {
    return (
        <div className="features-container">
            {features.map(feature => (
                <div key={feature._id}>
                    <ShopeeFeature feature={feature} />
                </div>
            ))}
        </div>
    )
}

export default ShopeeFeatures
