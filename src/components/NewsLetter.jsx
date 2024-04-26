import React from 'react';
import { ReactTyped } from "react-typed";

const News = () => {
    return (
        <div className='w-full py-16 text-white bg-black px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <ReactTyped
                        strings={['Keep updated with our announcements?']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                        style={{ fontSize: '35px', fontWeight: 'bold', paddingBottom: '8px' }}
                    />
                    <p>Contact us for more information</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md' type='email' placeholder='Enter Email'></input>
                        <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default News;
