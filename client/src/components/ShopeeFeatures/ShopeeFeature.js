import React from 'react'
import './Features.css'

const ShopeeFeature = ({ feature }) => {
    return (
        // <div className="features-container">
            <div className="features-info">
                <img src={feature.image} alt={feature.name} />
                {feature.name}
            </div>
        // </div>
    )
}

export default ShopeeFeature
