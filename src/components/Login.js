import React, { useRef, useState } from 'react';
import { validate } from '../utils/validate';
import { Link } from 'react-router-dom';


const Login = () => {
    const [error,setError]=useState(null)
    const [errorPassword,seterrorPassword]=useState(null)
    const name = useRef(null)
    const eMail=useRef(null)
    const password = useRef(null)

    const handleNext=(e)=>{
        //validate
        const message=validate(eMail.current.value,password.current.value)//sending it to validate.js
        console.log(message)
        if (message==="Enter a valid E-mail"){
            setError(message)
        }
        seterrorPassword(message)
        
        
    }
    return (
        <div className='w-6/12 h-96 rounded-xl  flex justify-center items-center'>
            <form onSubmit={(e)=>e.preventDefault()} className='w-3/4'>
                <h2 className="font-bold font-serif">Personal Info</h2>
                <input type='text' placeholder='Enter your name'ref={name} className='p-2 my-2 block w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200'/>
                <p className='font-bold text-red-500'>{error}</p>
                <input type='text' placeholder='Enter your E-mail' ref={eMail} className='p-2 my-2 block w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200'/>
                <p className='font-bold text-red-500'>{errorPassword}</p>
                <input type='password' placeholder='Enter your password'ref={password} className='p-2 my-2 block w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200'/>
                <div className="pt-20 flex justify-end">
                    
                        
                    
               <Link to={"/select"}> <button className='pt-2 my-2 block w-16 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200' onClick={handleNext}>Next</button></Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
