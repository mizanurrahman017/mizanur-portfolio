import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from '../../../Components/Banner/Banner';
import About from '../../../Components/About/About';
import Service from '../../../Components/Service/Service';
import Custom from '../../../Components/Custom/Custom';
import Contact from '../../../Components/Contact/Contact';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,  // animation speed
            // once: true,      // একবারই animation হবে
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div>
            <Banner />
            <About />
            <Service />
            <Custom />
            <Contact />
        </div>
    );
};

export default Home;
