import React from 'react';
import fontDeveloper from '../../images/front-end-developer.jpg';
import ui from '../../images/ui.jpg';
import others from '../../images/others.jpg'

const Skills = () => {
    return (
        <div className='bg-slate-900 p-16 '>
            <h1 className='text-center text-4xl font-bold text-white'>My Skills</h1>
            <div class="divider w-52 text-rose-600 mx-auto font-bold secondary">what i provide</div> 
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12 my-12'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full mt-7">
                <figure><img src={fontDeveloper} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">Frontend Development</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full mt-7">
                <figure><img src={ui} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">UI/UX Designing</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full mt-7">
                <figure><img src={others} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">Others Skills</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Skills;