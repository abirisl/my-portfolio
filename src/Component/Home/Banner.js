import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-[url('/src/images/bg.png.jpg')]">
            <div class="hero-content flex-col lg:flex-row-reverse">
               {/* <div className='max-w-sm'>
               <img src={profile}  alt=''/>
               </div> */}
                <div className='mt-10 lg:mr-[475px]'>
                    <h1 class="py-3 text-xl font-bold text-emerald-400">WELCOME TO MY WORLD</h1>
                    <p class="py-5 text-5xl font-bold text-white">Hi, I'am Mehedi</p>
                    <div class="text-3xl font-bold text-slate-400 lg:w-[500px]">
                        <Typewriter
                            options={{
                                strings: ["I'am Web Developer", "I'm a MARN Stack developer with basic knowledge in designing great User interface and develop real life interactions", 'I Design and Develop web based components and systems'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <button class="btn btn-secondary mt-5">Hire me</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;