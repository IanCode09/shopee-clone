import React from 'react'
import './Categories.css'
import categories from './categories'
import ShopeeCategory from './ShopeeCategory'

const ShopeeCategories = () => {
    return (
        <div className="categories-container">
            <h3 className="text-light">KATEGORI</h3>

            <div className="categories-list">
                {categories.map(category => (
                    <div key={category._id}>
                        <ShopeeCategory category={category} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopeeCategories
