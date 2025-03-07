import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import LipPlumperSection from '../Components/LipPlumperSection/LipPlumperSection';
import LipCareSection from '../Components/LipCareSection/LipCareSection';
import ProductCollections from '../Components/ProductCollections/ProductCollections';
import Footer from '../Components/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <LipPlumperSection/>
            <LipCareSection/>
            <ProductCollections/>
            <Footer/>
        </div>
    )
}

export default Home
