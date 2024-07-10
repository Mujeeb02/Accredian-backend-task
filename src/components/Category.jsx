import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <div className='flex justify-center  py-4'>
      <div className='bg-blue-100   flex items-center gap-8 px-8 py-2 rounded-full shadow-md'>
        <NavLink
          to="/refer"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
          }
        >
          Refer
        </NavLink>
        <NavLink
          to="/benefits"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
          }
        >
          Benefits
        </NavLink>
        <NavLink
          to="/faqs"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
          }
        >
          FAQs
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
          }
        >
          Support
        </NavLink>
      </div>
    </div>
  );
};

export default Category;
