import React from 'react';
import { BUTTON_VALUE } from './utils/constants';

const Sidebar = ({ currentStep }) => {
    const buttonsValue = BUTTON_VALUE;
    return (
        <div className='h-screen w-4/12 flex flex-col rounded-2xl'>
            <img
                className="opacity-60 relative z-1 rounded-3xl"
                src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjExMDYtd2FuLTEzLXguanBn.jpg'
                alt='Background'
            />
            <div className='absolute p-10 z-10 flex flex-col justify-start items-start'>
                {buttonsValue.map(button => (
                    <div key={button.id}>
                        <h5>{button.heading}</h5>
                        <button
                            className={`mb-4 p-2 rounded font-bold ${currentStep === button.id ? 'bg-blue-600 text-white' : 'bg-blue-200 rounded-full'}`}
                        >
                            {button.id}
                        </button>
                        <button
                            className={`mb-4 p-2 rounded font-bold ${currentStep === button.id ? 'bg-blue-600 text-white' : 'bg-initial'}`}
                        >
                            {button.value}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
