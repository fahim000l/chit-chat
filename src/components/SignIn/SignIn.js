import React, { useContext, useState } from 'react';
import { Utility } from '../../Contexts/UtilityContext';
import './SignIn.css'
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Authentication } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const SignIn = () => {
    const { mode, setMode, slide, setSlide } = useContext(Utility);
    const { logIn, resetPassword } = useContext(Authentication);
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = (event) => {

        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.emailVerified) {
                    // navigate(from, { replace: true });
                    navigate('/');
                }
                else {
                    Swal.fire('Your account is not verified yet')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleEmail = (event) => {

        setUserEmail(event.target.value);
    }
    const handleReset = () => {
        setError('')
        if (!userEmail) {
            alert('Please Provide your email');
        }
        resetPassword(userEmail)
            .then(() => {
                alert('Please check your email to reset the password');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }




    return (
        <div className={`${mode ? 'dark-mode-bg' : 'light-mode-bg'} lg:static duration-500 ease-in absolute ${slide ? 'top-[55%]' : 'top-[0px]'} w-full lg:w-[60%] lg:pt-[97px] p-10 lg:px-[100px] rounded-lg lg:h-full`}>
            {
                slide ?
                    <ChevronDoubleUpIcon onClick={() => setSlide(!slide)} className="text-white w-[50px] mx-auto lg:hidden" />
                    :
                    <ChevronDoubleDownIcon onClick={() => setSlide(!slide)} className="text-white w-[50px] mx-auto lg:hidden" />
            }

            <div>
                {
                    mode ?
                        <FaToggleOff onClick={() => setMode(!mode)} className='text-white cursor-pointer text-5xl'></FaToggleOff>
                        :
                        <FaToggleOn onClick={() => setMode(!mode)} className='text-white cursor-pointer text-5xl'></FaToggleOn>
                }
            </div>
            <h1 className='lg:text-8xl text-3xl font-bold text-start text-white'>Welcome to <br /> Chit-Chat</h1>
            <hr className='w-[75%] rounded-lg font-bold border-[5px] mx[auto] border-white border-solid my-[50px]' />
            <div className='lg:w-[50%] w-full mt-[50px]'>
                <h2 className='lg:text-5xl text-2xl font-semibold my-[20px] text-white'>Sign In to your account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='block text-start font-bold text-2xl mt-[20px] text-white mb-[10px]' htmlFor="email">Email</label>
                        <input onBlur={handleEmail} required className='text-2xl p-2 w-full rounded-lg' type="email" name="email" id="" placeholder='Enter your email' />
                    </div>
                    <div>
                        <label className='block text-start font-bold text-2xl mt-[20px] text-white mb-[10px]' htmlFor="password">password</label>
                        <input required className='text-2xl p-2 w-full rounded-lg' type="password" name="password" id="" placeholder='Enter the password' />
                    </div>
                    {
                        <p className='text-red-500 font-bold'>{error}</p>
                    }
                    <button className={`text-white px-5 py-2 rounded-lg text-2xl font-bold mt-[10px] block cursor-pointer ${mode ? 'bg-gray-900' : 'bg-purple-600'} hover:bg-blue-300 hover:text-black border-2 border-solid border-white hover:border-black`} type="submit">Sign In</button>
                </form>
                <div className='flex lg:flex-row flex-col lg:items-center items-start '>
                    <p className='text-start text-white mt-[10px] font-bold text-2xl lg:mr-2'>Forget Password ?</p>
                    <button onClick={handleReset} className={`text-white px-5 py-2 rounded-lg font-bold cursor-pointer ${mode ? 'bg-gray-900' : 'bg-purple-600'} hover:bg-blue-300 hover:text-black border-2 border-solid border-white hover:border-black`}>Reset</button>
                </div>
                <div className='flex lg:flex-row flex-col lg:items-center items-start mt-4'>
                    <p className='text-start text-white mt-[10px] font-bold text-2xl lg:mr-2'>Doesn't have an account ?</p>
                    <NavLink to={'/auth/signup'} className={`text-white px-5 py-2 rounded-lg font-bold cursor-pointer ${mode ? 'bg-gray-900' : 'bg-purple-600'} hover:bg-blue-300 hover:text-black border-2 border-solid border-white hover:border-black`}>Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SignIn;