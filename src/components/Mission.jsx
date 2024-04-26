import React from 'react';
import Image3 from './Images/Image3.png';

const Mission = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Image3} alt='Image3' />
                <div className='relative flex flex-col justify-center items-center'>
                    <p className='text-gray-700 font-bold text-3xl relative'>MISSION
                        <span className="absolute bottom-0 left-1/2 top-9 transform -translate-x-1/2 w-[125px] h-1 bg-[#00df9a] rounded-full"></span>
                    </p>
                    <p className='mt-4 justify-center text-lg' style={{textAlign: 'justify'}}>Empowering businesses to thrive securely in the digital era, our mission at Plutosophia is to safeguard the future by seamlessly integrating cutting-edge cybersecurity solutions with advanced AI technologies. Through relentless innovation and unwavering dedication, we strive to deliver unparalleled protection, enabling our clients to navigate the complexities of cyberspace with confidence and peace of mind. Our commitment to excellence drives us to continuously evolve, anticipate emerging threats, and proactively adapt, ensuring that we remain at the forefront of safeguarding data integrity, privacy, and trust in an ever-evolving digital landscape.</p>
                </div>
            </div>
        </div>
    )
}

export default Mission;
