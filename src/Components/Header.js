import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import logo from './imgs/myLogo.png';

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='lg:flex justify-between items-center bg-black text-white sticky absolute top-0 z-50'>

            <div className='flex justify-between px-5 py-4 w-full items-center'>

                <Link to='/' className='flex gap-2 items-center hover:text-blue-600 md:px-3'>
                    <img src={logo} alt="" className='h-9' />
                    <h1 className='font-bold text-3xl cus-style'>Code-War-Test</h1>
                </Link>

                <div onClick={() => setOpen(!open)} className='h-6 w-6 lg:hidden ml-auto py-4 flex items-center cursor-pointer w-10'>
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>
            </div>

            <ul className={`lg:flex items-center justify-end gap-7 absolute mr-5 py-4 lg:static w-full bg-zinc-900 lg:bg-black duration-700 ease-in ${open ? 'top-[68px]' : 'top-[-200px]'}`}>

                <NavLink className='font-bold text-2xl block hover:text-purple-500 px-3' to='/topics'>Topics</NavLink>

                <NavLink className='font-bold text-2xl block hover:text-purple-500 px-3 py-3 lg:py-0' to='/statistics'>Statistics</NavLink>

                <NavLink className='font-bold text-2xl block hover:text-purple-500 px-3' to='blog'>Blog</NavLink>

            </ul>
        </div>
    );
};

export default Header;