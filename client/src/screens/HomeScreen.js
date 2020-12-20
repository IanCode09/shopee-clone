import React from 'react'
import Top from '../components/Top/Top'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import ShopeeFeatures from '../components/ShopeeFeatures/ShopeeFeatures'
import ShopeeCategories from '../components/Categories/ShopeeCategories'
import ShopeeProducts from '../components/Products/ShopeeProducts'


const HomeScreen = () => {
    return (
        <div className="container">
            <Top />
            <Header />
            <Hero />
            <ShopeeFeatures />
            <ShopeeCategories />
            <ShopeeProducts />
        </div>
    )
}

export default HomeScreen
