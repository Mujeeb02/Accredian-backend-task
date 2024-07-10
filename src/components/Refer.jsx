import React from 'react';
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaFilePen } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";


const Hero_Next = () => {
    return (
        <div className='w-full h-[585px] flex flex-col items-center mt-12 bg-[#EEF5FF] relative'>
            <h1 className='text-[27.66px] text-[#1A202C] pt-4'>
                How do I <span className='text-[#1A73E8]'>Refer</span>
            </h1>
            <div className='relative h-[600px] -mt-[150px]'>
                <img src="/hero2.png" alt="Hero" className='h-full w-full object-cover' />
                <div className='absolute left-[170px] top-[300px] flex flex-col items-center justify-center p-4 bg-inherit bg-opacity-75 rounded-md'>
                    <MdPersonAddAlt1 className='w-[88px] h-[66.96px] text-[#1A73E8]' />
                    <h1 className='h-[88px] w-[193px] text-[16px] text-center text-balance font-400 leading-[22px]'>
                        Submit referrals easily via our website's referral section
                    </h1>
                </div>
                <div className='absolute left-[510px] top-[300px] flex flex-col items-center justify-center p-4 bg-inherit bg-opacity-75 rounded-md'>
                    <FaFilePen className='w-[88px] h-[66.96px] text-[#1A73E8]' />
                    <h1 className='h-[88px] w-[193px] text-[16px] text-center text-balance font-400 leading-[22px]'>
                        Earn rewards once your referral joins an Accredian program.
                    </h1>
                </div>
                <div className='absolute left-[850px] top-[300px] flex flex-col items-center justify-center p-4 bg-inherit bg-opacity-75 rounded-md'>
                    <FaWallet className='w-[88px] h-[66.96px] text-[#1A73E8]' />
                    <h1 className='h-[88px] w-[193px] text-[16px] text-center text-balance font-400 leading-[22px]'>
                        Both parties receive a bonus 30 days after program enrollment.
                    </h1>
                </div>
            </div>
            <button className="w-[192px] h-[54px] bg-[#1A73E8] rounded-[8px] text-[#FFFFFF] text-[20px] leading-[24px] font-[400] flex items-center justify-center mt-4">
                Refer Now
            </button>
        </div>
    );
}

export default Hero_Next;
