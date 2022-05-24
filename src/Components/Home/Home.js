import React from 'react';
import Footer from '../Shared/Footer';
import SignUp from '../SignUp';
import Banner from './Banner';
import Business from './Business';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
            <SignUp></SignUp>
            <Footer></Footer>
        </div>
    );
};

export default Home;