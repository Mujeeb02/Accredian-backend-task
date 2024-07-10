import React from 'react';

const FAQ = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-row h-[220px] w-[70%] shadow-md'>
                <div className='flex flex-col gap-4 w-1/4'>
                    <div className='flex items-center shadow-md justify-center h-[60px] w-[180px] rounded-md'>
                        Eligibility
                    </div>
                    <div className='flex items-center shadow-md justify-center h-[60px] w-[180px] rounded-md'>
                        How to Use?
                    </div>
                    <div className='flex items-center shadow-md justify-center h-[60px] w-[180px] rounded-md'>
                        Terms & conditions
                    </div>
                </div>
                <div className='h-[200px] w-3/4 shadow-md p-4'>
                    <div className='text-base font-semibold leading-7 mb-2'>
                        Do I need to have prior Product Management and Project Management experience to enroll in the program?
                    </div>
                    <div className='mb-2'>
                        No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                        suitable for individuals from any field of work.
                    </div>
                    <div>
                        What is the minimum system configuration required?
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
