import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Hero from './Hero';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
            <Hero></Hero>
        </div>
    );
};

export default Home;