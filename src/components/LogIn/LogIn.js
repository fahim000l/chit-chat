// import React, { useState } from 'react';
// import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
import leftImg from '../../img/img-edited.jpg';
import './LogIn.css'
// import ModeFeature from '../ModeFeature/ModeFeature';

const LogIn = ({ mode, changeMode }) => {
    // const mode = props.mode;
    // const [mode, setMode] = useState(false);
    const navigate = useNavigate();

    const handleSigninBtn = () => {
        navigate('/registrationPage');
    }
    return (
        <div className='lg:flex'>
            <div className='lg:w-2/4 lg:h-screen'>
                <img className='w-full lg:h-screen bg-blue-700' src={leftImg} alt="" />
            </div>
            <div id={`${mode ? 'right-portion-light-mode' : 'right-portion-dark-mode'}`} className='lg:w-3/4 lg:h-screen pb-24 flex flex-col  justify-evenly lg:items-start  lg:px-24 px-5 rounded-lg'>
                <div className={`mt-5 w-1/4 lg:w-auto border-solid border-2 rounded-lg ${mode ? 'pl-10' : 'pr-10'}  py-2`}>
                    {
                        // mode ? <MoonIcon onClick={() => setMode(!mode)} className="h-6 w-10 text-white font-bold text-2xl" /> : <SunIcon onClick={() => setMode(!mode)} className="h-6 w-10 text-white font-bold text-2xl" />
                        changeMode(mode)
                    }
                </div>

                <div className='w-full flex items-center pt-2 justify-end font-bold'>
                    <h4 className='lg:text-2xl text-white'>Create Account : </h4>
                    <button onClick={handleSigninBtn} className={`lg:text-2xl p-2 font-bold  ml-2 ${mode ? 'bg-purple-500' : 'bg-gray-900'} text-white rounded-lg  lg:w-1/4 hover:bg-blue-500 hover:text-black border-solid border-2`}>Sign In</button>
                </div>
                <div className='lg:mb-24 mb-10'>
                    <h3 className='lg:text-5xl text-2xl text-white font-bold'>Welcome to <br /> <span className='italic'>Chit-Chat</span></h3>
                    <p className='text-start text-white font-bold'>Please Log In</p>
                </div>
                <hr className='border-solid border-2 w-full' />
                <div className='flex flex-col w-full lg:mt-0 mt-10 lg:items-start justify-evenly'>

                    <input id='email-input-field' className='p-3 lg:mb-5 mb-2 lg:w-4/5 font-bold border-solid border-2 border-black rounded-md' type="text" placeholder='Email/Phone Number' />
                    <input id='email-input-field' className='p-3 lg:my-5 mb-2 mt-2 lg:w-4/5 font-bold border-solid border-2 border-black rounded-md' type="password" placeholder='Password' />
                    <button className={`text-2xl mt-2 font-bold p-3 text-white  border-solid border-2 rounded-lg w-full lg:w-1/4 hover:bg-blue-500 hover:text-black ${mode ? 'bg-purple-500' : 'bg-gray-900'}`}>Log In</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;