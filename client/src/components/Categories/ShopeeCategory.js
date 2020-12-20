import React from 'react'
import './Categories.css'

const ShopeeCategory = ({ category }) => {
    return (
        <div className='category-list'>
            <img src={category.image} alt={category.name} />
            {category.name}
        </div>
    )
}

export default ShopeeCategory
