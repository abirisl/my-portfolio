import React from 'react';
import profile from '../../images/mehedi.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen lg:p-10">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='mt-10 lg:mr-24'>
                    <h1 class="py-3 text-xl font-bold text-emerald-400">WELCOME TO MY WORLD</h1>
                    <p class="py-5 text-5xl font-bold text-white">Hi, I'am Mehedi</p>
                    <p class="text-3xl font-bold text-slate-400">I Design and Develop web based components and systems</p>
                    <p className='py-3 text-xl text-stone-400'>I'm a frontend developer with basic knowledge in designing great User interface and develop real life interactions</p>
                    <button class="btn btn-accent mt-5">Hire me</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;