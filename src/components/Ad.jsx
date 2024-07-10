import React from 'react';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Ad = () => {
    return (
        <div className='relative z-[200] overflow-hidden h-[150px] flex items-center justify-between w-[1000px] rounded-md bg-[#1A73E8] mt-12 mb-8 ml-[20%]'>
            <div className='flex z-[300]'>
                <div className='h-[50px] w-[50px] flex items-center justify-center m-12 rounded-md bg-white'>
                    <TfiHeadphoneAlt className='text-[#1A73E8] text-2xl' />
                </div>
                <div className='flex flex-col gap-2 justify-center'>
                    <div className='text-white text-xl font-600 leading-[30px]'>
                        Want to delve deeper into the program?
                    </div>
                    <div className='text-sm font-500 text-[#F5F5F5]'>
                        Share your details to receive expert insights from our program team!
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center text-[#1A73E8] h-[50px] w-[140px] rounded-md bg-[#FFFFFF] mr-16 z-[300]'>
                <Link to="">Get in touch</Link>
            </div>
            <div className='absolute left-[70%] top-[150%] transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#237CF2] z-[100]'>
                <div className='relative left-[10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#3289FC] z-[200]'>
                    <div className='absolute left-[15%] top-[10%] h-[200px] w-[200px] rounded-full bg-[#4696FF] z-[300]'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ad;
