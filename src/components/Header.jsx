import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full h-[79.2px] bg-white shadow-md'>
      <div className='w-[1360px] h-[60px] pt-4 flex flex-row justify-between items-center mx-auto'>
        <div className='flex flex-row items-center gap-[32px]'>
          <div className='w-[125px] h-[36.66px]'>
            <img src="/logo.png" alt="Logo" className='h-full' />
          </div>
          <div className='h-[40px] flex items-center px-4 border bg-[#1A73E8] rounded-md text-white'>
            Courses
          </div>
        </div>
        <div className='flex flex-row items-center gap-[24px]'>
          <Link to="/refer-earn" className='text-gray-700'>Refer & Earn</Link>
          <Link to="/resources" className='text-gray-700'>Resources</Link>
          <Link to="/about-us" className='text-gray-700'>About Us</Link>
          <Link to="/login" className='text-gray-700'>LogIn</Link>
          <div className='w-[115px] h-[40px] bg-[#1A73E8] flex items-center justify-center rounded-md text-white'>
            <Link to="/try-for-free">Try for free</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
