import React from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Bannar from './Bannar/Bannar';
import COA from './COA/COA';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            <COA></COA>
        </div>
    );
};

export default Home;