import React from 'react';
import About from '../About/About';
import Projects from '../Peojects/Projects';
import Skills from '../Skills/Skills';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='bg-slate-900'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;