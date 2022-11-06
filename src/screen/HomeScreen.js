import React from 'react';
import CarCollection from '../components/CarCollection';
import Choose from '../components/Choose';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Offer from '../components/Offer';
import Service from '../components/Service';
import Team from '../components/Team';

const HomeScreen = () => {
    return (
        <div>
            <Hero />
            <Service />
            <Offer />
            <CarCollection/>
            <Team />
            <Choose />
            <Contact />
            
        </div>
    );
};

export default HomeScreen;