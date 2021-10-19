import React from 'react';
import Banner from '../Banner/Banner';
import Description from '../Description/Description';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Description></Description>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;