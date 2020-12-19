import React from 'react'
import Top from '../components/Top/Top'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import ShopeeFeatures from '../components/ShopeeFeatures/ShopeeFeatures'


const HomeScreen = () => {
    return (
        <div className="container">
            <Top />
            <Header />
            <Hero />
            <ShopeeFeatures />
        </div>
    )
}

export default HomeScreen
