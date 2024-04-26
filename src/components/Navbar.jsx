import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>PLUTOSOPIA</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 text-[#00df9a] relative font-bold text-lg'>Home
                <span className="absolute bottom-2 left-4 w-[50px] h-1 bg-[#00df9a] rounded-full text-lg"></span></li>
                <li className='p-4 text-black font-bold text-lg'>Company</li>
                <li className='p-4 text-black font-bold text-lg'>Resources</li>
                <li className='p-4 text-black font-bold text-lg'>About</li>
                <li className='p-4 text-black font-bold text-lg'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} className="text-black"/> : <AiOutlineMenu size={20} className="text-black"/>}
            </div>
            <div className={nav ? 'fixed left-0 top-3.5 w-[55%] h-full border-r border-r-gray-900 bg-white bg-opacity-90 ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>PLUTOSOPIA</h1>
            <ul className='uppercase'>
                <li className='p-4 text-[#00df9a] border-b border-gray-300 font-bold'>Home</li>
                <li className='p-4 text-black border-b border-gray-300 font-bold'>Company</li>
                <li className='p-4 text-black border-b border-gray-300 font-bold'>Resources</li>
                <li className='p-4 text-black border-b border-gray-300 font-bold'>About</li>
                <li className='p-4 text-black border-b border-gray-300 font-bold'>Contact</li>
            </ul>
            </div>
        </div>
        )
}

export default Navbar