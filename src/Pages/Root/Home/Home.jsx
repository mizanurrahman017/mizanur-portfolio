import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from '../../../Components/Banner/Banner';
import About from '../../../Components/About/About';
import Service from '../../../Components/Service/Service';
import Custom from '../../../Components/Custom/Custom';
import Contact from './../../../Components/Contact/Contact';
import Skill from '../../../Components/Skill/Skill';
import Project from '../../../Components/Project/Project';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div >
            <Banner />
            <Skill></Skill>
            <About />
            <Project></Project>
            <Service />
            <Custom />
            <Contact />
        </div>
    );
};

export default Home;
