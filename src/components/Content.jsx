import React from 'react';
import { ReactTyped } from "react-typed";
import video from './Images/Video.mp4';

const Content = () => {
  return (
    <div className='text-white relative z-0' style={{
      minHeight: '625px'
    }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='absolute inset-0 bg-black opacity-50'></div> 
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='max-w-[800px] w-full mx-auto text-center'>
          <p className='text-[#00df9a] p-2 md:text-2xl sm:text-xl text-sm font-bold'>CHANGE THE WORLD FOR THE BETTER FUTURE</p>
          <h1 className='text-white md:text-6xl sm:text-4xl text-3xl font-bold md:py-6'>Technology is everywhere.</h1>
          <div>
            <ReactTyped
              strings={['Artificial Intelligence (AI) and Machine Learning', 'Cloud Services', 'Cybersecurity', 'Blockchain and Cryptocurrency', 'Data and Analytics']}
              typeSpeed={120}
              backSpeed={140}
              loop
              style={{ color: 'white', fontSize: '20px' }}
            />
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black hover:bg-[#00df98d5] hover:text-white text-xl'>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
