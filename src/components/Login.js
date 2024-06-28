import React, { useRef, useState } from 'react';
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/cartSlice';

const Login = () => {
    const [error, setError] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const name = useRef(null);
    const eMail = useRef(null);
    const password = useRef(null);
    const [userState, setUser] = useState("default");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [eye, setEye] = useState(true);

    const handleNext = async (e) => {
        e.preventDefault(); // Prevent form submission
        // Validate
        const message = validate(eMail.current.value, password.current.value); // Sending it to validate.js
        console.log(message);
        if (message === "Enter a valid E-mail") {
            setError(message);
        } else {
            setError(null);
        }
        setErrorPassword(message);

        if (message === null) {
            try {
                // Sign up
                const userCredential = await createUserWithEmailAndPassword(auth, eMail.current.value, password.current.value);
                const userFirebase = userCredential.user;

                await updateProfile(userFirebase, {
                    displayName: name.current.value,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                });

                const { email } = userFirebase;
                dispatch(addUser({ email }));
                navigate("select");

            } catch (error) {
                const errorMessage = error.message;
                setErrorPassword(errorMessage);
            }
        }
    };

    const handlePasswordToggle = () => {
        setEye(!eye);
    };

    return (
        <div className='w-full md:w-6/12 h-screen p-4'>
            <div className='w-full md:w-6/12 h-auto rounded-xl md:flex justify-center md:items-center flex-col'>
                <div>user: {userState}</div>
                <form onSubmit={handleNext} className='w-full sm:w-3/4'>
                    <h2 className="font-bold font-serif text-lg md:text-xl">Personal Info</h2>
                    <input type='text' placeholder='Enter your name' ref={name} className='p-2 my-2 block w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200' />
                    <p className='font-bold text-red-500'>{error}</p>
                    <input type='text' placeholder='Enter your E-mail' ref={eMail} className='p-2 my-2 block w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200' />
                    <p className='font-bold text-red-500'>{errorPassword}</p>
                    <div className='relative'>
                        <input type={eye ? "password" : "text"} placeholder='Enter your password' ref={password} className='p-2 my-2 block w-full rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200' />
                        <button type="button" onClick={handlePasswordToggle} className='absolute inset-y-0 right-0 px-3 py-2'>
                            {eye ? 'Show' : 'Hide'}
                        </button>
                    </div>
                    <div className="pt-4 md:pt-20 flex justify-end">
                        <button className='py-2 px-4 my-2 block w-16 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200' type="submit">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
