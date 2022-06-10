import React from 'react';
import project1 from '../../images/Screenshot.png';
import project2 from '../../images/Screenshot1.png';
import project3 from '../../images/Screenshot2.png';


const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-white'>My Projects</h1>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12 my-10'>
           <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={project2} alt="projects1" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Auto Parts (Manufacturer Company)</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={project3} alt="projects2" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Warehouse (Honda Warehouse)</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={project1} alt="projects3" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Travel Package(Insta sohor)</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
           </div>

        </div>
    );
};

export default Projects;