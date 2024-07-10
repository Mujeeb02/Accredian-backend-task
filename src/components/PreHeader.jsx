import React from 'react'
import { Link } from 'react-router-dom'

const PreHeader = () => {
  return (
    <div className='h-[40px] font-800 w-full bg-[#1A73E826] flex items-center justify-center'>
      <h1 className='text-[#262626] text-[12px] '>Navigate your ideal career path with tailored expert advice</h1>
      <Link to="" className='text-[12px] text-[#1A73E8] ml-[20px] underline'>Contact Expert</Link>
    </div>
  )
}

export default PreHeader
