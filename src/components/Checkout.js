import React from 'react';

const Summary = () => {
    return (
        <div className='w-full md:w-6/12 h-auto rounded-xl p-6 relative'>
            <div className='container w-11/12 sm:w-3/4 pt-24 mx-auto bg-gray-100 shadow-md md:shadow-lg absolute top-10 left-1/2 transform -translate-x-1/2'>
                <div className='image flex justify-center'>
                    <div className='text-6xl'>✅</div>
                </div>
                <div className='text-3xl md:text-4xl font-serif font-bold flex justify-center pt-4 text-gray-800'>
                    Thank you!
                </div>
                <div className='flex justify-center sm:block hidden'>
                    <div className='pt-4 text-sm md:text-base lg:text-lg text-center text-gray-600'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
