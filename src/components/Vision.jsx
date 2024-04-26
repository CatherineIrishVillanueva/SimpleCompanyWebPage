import React from 'react';
import Image6 from './Images/Image6.png';

const Vision = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center items-center'>
                <p className='text-gray-700 font-bold text-3xl relative'>VISION
                        <span className="absolute bottom-0 left-1/2 top-9 transform -translate-x-1/2 w-[100px] h-1 bg-[#00df9a] rounded-full"></span>
                    </p>
                    <p className='text-black mt-4 justify-center text-lg' style={{textAlign: 'justify'}}>At Plutosophia, we envision a future where the digital landscape is secure and empowered by artificial intelligence. Our mission is to pioneer innovative solutions at the intersection of cybersecurity and AI, safeguarding businesses and individuals against evolving threats while harnessing the potential of AI to enhance efficiency, accuracy, and resilience. We aspire to be the trusted partner of choice, driving forward the boundaries of cybersecurity and AI to create a safer, more intelligent world for all.</p>
                </div>
                <img className='w-[500px] mx-auto my-4' src={Image6} alt='Image3' />
            </div>

        </div>
    )
}

export default Vision
