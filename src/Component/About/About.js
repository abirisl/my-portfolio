import React from 'react';
import profile from '../../images/mehedi.png';

const About = () => {
    return (
        <div >
            <h1 className='text-center text-4xl mt-3 font-bold'>About me</h1>
            <div class="divider w-52 text-rose-600 mx-auto font-bold">who i am</div> 
            <div class="hero min-h-screen p-14">
                <div class="hero-content flex-col lg:flex-row lg:mx-24">
                    <img src={profile} class="max-w-sm rounded-lg shadow-2xl w-[300px] h-[400px]" alt=''/>
                    <div className='lg:ml-28'>
                        <h1 class="text-3xl font-bold">Mohammad Mehedi Hasan </h1>
                        <p class="py-6">I am a web developer from Mehedi Hasan and currently living in Chittagong, I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to
                            hire, you can get in touch with me here.</p>
                        <button class="btn btn-accent">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;