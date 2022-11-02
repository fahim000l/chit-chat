import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { FaToggleOff, FaToggleOn, FaGoogle, FaFacebook, FaGithub, FaUserAlt } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Authentication } from '../../Contexts/AuthContext';
import { Utility } from '../../Contexts/UtilityContext';
// import profileImg from '../../img/img-edited.jpg';
import './SignUp.css'

const SignUp = () => {
    const { mode, setMode, slide, setSlide } = useContext(Utility);
    const [profileImg, setProfileImg] = useState(<FaUserAlt></FaUserAlt>);
    const { createUser, googleSignIn, gitSignIn, fbSignIn, setProfile, emailVerify } = useContext(Authentication);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = (event) => {

        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const profilePic = form.profilePic.value;
        console.log(email, password, confirm, name, profilePic);

        if (password !== confirm) {
            setError('Password did not matched');
            return;
        }
        if (password.length < 6) {
            setError('Password must contain atleast 6 characters');
            return
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                emailVerify();
                setProfile(name);
                handleSetProfile(name, profilePic)
                setTimeout(() => {
                    sendingUserToDb(user);
                    Swal.fire('Your Account has been created successfully, Please check your email to verity the account');
                    form.reset();
                }, 2000)
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleGoogle = () => {
        setError('');
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                sendingUserToDb(user)
                // navigate(from, { replace: true })
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleGit = () => {
        setError('');
        gitSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                sendingUserToDb(user);
                // navigate(from, { replace: true });
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleFb = () => {
        setError('');
        fbSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                sendingUserToDb(user);
                // navigate(from, { replace: true });
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleSetProfile = (name, profilePic) => {

        const profile = {
            displayName: name,
            photoURL: profilePic
        }

        setProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const sendingUserToDb = (user) => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }




    return (
        <div className={`w-full lg:w-[60%] lg:h-full lg:pt-[59px] pt-5 pb-5 ${mode ? 'dark-mode-bg' : 'light-mode-bg'} lg:static absolute duration-500 ease-in ${slide ? 'top-[55%]' : 'top-[0px]'} w-full rounded-lg`}>
            {
                slide ?
                    <ChevronDoubleUpIcon onClick={() => setSlide(!slide)} className="text-white w-[50px] mx-auto lg:hidden" />
                    :
                    <ChevronDoubleDownIcon onClick={() => setSlide(!slide)} className="text-white w-[50px] mx-auto lg:hidden" />
            }
            <div className='lg:px-[100px] px-10'>
                {
                    mode ?
                        <FaToggleOff onClick={() => setMode(!mode)} className='text-white cursor-pointer text-5xl'></FaToggleOff>
                        :
                        <FaToggleOn onClick={() => setMode(!mode)} className='text-white cursor-pointer text-5xl'></FaToggleOn>
                }
            </div>
            {/* background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${picture})` */}
            <div className='w-full flex flex-col items-center'>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex justify-center items-center w-full'>
                        <hr className={`w-full border-[5px] ${mode ? 'border-white' : 'border-black'} border-solid `} />
                        <div style={{
                            backgroundImage: `url("${profileImg}")`
                        }} className={`w-[300px] relative overflow-hidden p-[110px] border-[5px] border-solid rounded-full ${mode ? 'border-white' : 'border-black'}`}>
                            <input className='absolute bottom-0 w-full left-0 h-[40%]' type="file" name='profilePic' alt="" id='profilePic' />
                        </div>

                        <hr className={`w-full border-[5px] ${mode ? 'border-white' : 'border-black'} border-solid `} />
                    </div>

                    <p className='mt-2 text-2xl text-white font-bold'>Upload your profile Picture</p>
                    <hr className='w-[75%] mx-auto rounded-lg border-[2px] mt-[20px] border-white border-solid ' />
                    <div className='w-full lg:px-[100px] lg:flex justify-between px-10'>
                        <div className='lg:w-[40%] mt-[10px]'>
                            <div>
                                <label className='block text-start font-bold text-2xl mt-[20px] text-white mb-[10px]' htmlFor="name">User Name</label>
                                <input placeholder='Your Name' className='text-2xl p-2 w-full rounded-lg' type="text" name="name" id="" />
                            </div>
                            <div>
                                <label className='block text-start font-bold text-2xl mt-[20px] text-white mb-[10px]' htmlFor="dob">Date of Birth :</label>
                                <input className='text-2xl p-2 w-full rounded-lg' type="date" name="" id="" />
                            </div>
                            <div>
                                <label className='block text-start font-bold text-2xl mt-[20px] text-white mb-[10px]' htmlFor="gender">Gender</label>
                                <div className='flex flex-col items-start'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="male" id="" />
                                        <label className='ml-[10px] text-start font-bold text-2xl text-white' htmlFor="male">Male</label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="female" id="" />
                                        <label className='ml-[10px] text-start font-bold text-2xl text-white' htmlFor="female">Female</label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="others" id="" />
                                        <label className='ml-[10px] text-start font-bold text-2xl text-white' htmlFor="others">Others</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[40%] mt-[10px]'>
                            <div>
                                <label className='block text-start font-bold text-2xl mt-[20px] text-white mb-[10px]' htmlFor="name">Email</label>
                                <input required placeholder='Your Email' className='text-2xl p-2 w-full rounded-lg' type="email" name="email" id="" />
                            </div>
                            <div>
                                <label className='block text-start font-bold text-2xl mt-[20px] text-white mb-[10px]' htmlFor="name">Create Password</label>
                                <input required placeholder='Your Password' className='text-2xl p-2 w-full rounded-lg' type="password" name="password" id="" />
                            </div>
                            <div>
                                <label className='block text-start font-bold text-2xl mt-[20px] text-white mb-[10px]' htmlFor="name">Confirm Password</label>
                                <input required placeholder='Retype Password' className='text-2xl p-2 w-full rounded-lg' type="password" name="confirm" id="" />
                            </div>
                        </div>
                    </div>
                    {
                        <p className='text-red-500 font-bold'>{error}</p>
                    }
                    <button className={`text-white px-5 py-2 rounded-lg text-2xl font-bold mt-[10px] mx-auto block cursor-pointer ${mode ? 'bg-gray-900' : 'bg-purple-600'} hover:bg-blue-300 hover:text-black border-2 border-solid border-white hover:border-black`} type="submit">Sign Up</button>
                </form>
            </div >
            <div className='lg:flex items-center lg:px-[100px] px-10'>
                <p className='font-bold text-2xl mt-[20px] text-white'>Sign In with :</p>
                <div className='flex items-center'>
                    <FaGoogle onClick={handleGoogle} className='text-white ml-10 cursor-pointer text-3xl' />
                    <FaFacebook onClick={handleFb} className='text-white ml-10 cursor-pointer text-3xl' />
                    <FaGithub onClick={handleGit} className='text-white ml-10 cursor-pointer text-3xl' />
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:items-center items-start px-10'>
                <p className='text-start text-white mt-[10px] font-bold text-2xl lg:mr-2'>Already have an account ?</p>
                <NavLink to={'/auth/signin'} className={`text-white px-5 py-2 rounded-lg font-bold cursor-pointer ${mode ? 'bg-gray-900' : 'bg-purple-600'} hover:bg-blue-300 hover:text-black border-2 border-solid border-white hover:border-black`}>Sign In</NavLink>
            </div>
        </div >
    );
};

export default SignUp;