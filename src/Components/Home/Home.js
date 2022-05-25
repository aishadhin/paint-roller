import React from 'react';
import Reviews from '../Reviews';
import ShowReviews from '../ShowReviews';
import Banner from './Banner';
import Business from './Business';
import Hero from './Hero';
import Partners from './Partners';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
            <ShowReviews></ShowReviews>
            <Hero></Hero>
            <Partners></Partners>
        </div>
    );
};

export default Home;