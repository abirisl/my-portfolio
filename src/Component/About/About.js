import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-center text-4xl mt-3 text-white'>ABout Me</h1>
            <div class="hero min-h-screen p-14">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:ml-56'>
                    <h1 class="text-5xl font-bold">Mohammad Mehedi Hasan </h1>
                    <p class="py-6">I am a web developer from Mehedi Hasan and currently living in Chittagong, I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to
                        hire, you can get in touch with me here.</p>
                    <button class="btn btn-primary">Download Resume</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;