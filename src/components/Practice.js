import React, { useRef } from 'react'

const Practice = () => {
    const email=useRef(null)
    const handleNext=(e)=>{
        e.preventDefault()
       
       const check=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.current.value)
       console.log(check)
       
    }
    return (
    
    
        <div>
            <form onSubmit={handleNext} className='w-full sm:w-3/4'>
                    <h2 className="font-bold font-serif text-lg md:text-xl">Personal Info</h2>
                    <input type='text' placeholder='Enter your name' className='p-2 my-2 block w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200' />
                    <p className='font-bold text-red-500'></p>
                    <input type='text' placeholder='Enter your E-mail'ref={email} className='p-2 my-2 block w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200' />
                    <p className='font-bold text-red-500'></p>
                    <div className='relative'>
                        <input type="password" placeholder='Enter your password'  className='p-2 my-2 block w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200' />
                        <button type="button" className='absolute inset-y-0 right-0 px-3 py-2'>
                           
                        </button>
                    </div>
                    <div className="pt-4 md:pt-20 flex justify-end">
                        <button className='py-2 px-4 my-2 block w-16 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200' type="submit">Next</button>
                    </div>
                </form>
            
        </div>
    )
}

export default Practice
