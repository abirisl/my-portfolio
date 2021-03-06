import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
         <div class="navbar bg-slate-900 text-white sticky top-0 z-50">
            <div class="navbar-start ">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content bg-slate-900 mt-3 p-2 shadow rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className='ml-10 text-3xl font-bold'>Portfo<span className='text-red-700'>lio</span></Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 mx-10">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;