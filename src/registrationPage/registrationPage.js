import React, { useState } from 'react';
import leftImg from '../../src/img/img-edited.jpg';
import './RegistrationPage.css'

const RegistrationPage = (props) => {
    const [value, setValue] = useState('');
    const [click, setClick] = useState(false);
    const [otherCheck, setOtherckeck] = useState(false);
    const [clickedCheck, setClickedcheck] = useState(false);
    const hanldeChecked = (innerValue) => {
        setValue(innerValue);
        setClick(!click)

        click ? setClickedcheck(!clickedCheck) && setOtherckeck(!otherCheck) : setClickedcheck(false) && setOtherckeck(false);
        // setIschecked(!isChecked)
    }
    const mode = props.mode;
    return (
        <div id='registration' className='lg:flex'>

            <div className='lg:w-2/4 lg:h-screen'>
                <img className='w-full lg:h-screen bg-blue-700' src={leftImg} alt="" />
            </div>
            <div id={`${mode ? 'forms-light' : 'forms-dark'}`} className='lg:w-3/4 w-full lg:h-screen pb-24 flex flex-col  justify-evenly lg:items-start  lg:px-24 px-5 rounded-lg pt-5 right-side'>

                <div className='w-full'>
                    <div className='mt-28'>
                        {
                            props.changeMode(mode)
                        }
                    </div>
                    <h1 className='lg:text-5xl md:text-5xl text-2xl font-bold text-start text-white'>Register</h1>
                    <hr className='w-full my-3 border-2 border-solid' />
                    <div>
                        <h1 className='text-3xl text-start font-bold text-white'>Create Profile</h1>
                        <div className='flex flex-col justify-evenly items-start w-full'>
                            <div className='lg:flex items-center md:flex my-5'>
                                <div className='flex my-5 ml-2'>
                                    <p className='lg:text-2xl lg:display-inline display-none md:text-2xl font-bold text-white'>First Name : </p>
                                    <input className='ml-2 px-2 rounded-md py-2' type="text" placeholder='First Name' />
                                </div>
                                <div className='flex ml-2 my-5'>
                                    <p className='lg:text-2xl lg:display-inline display-none md:text-2xl text-start font-bold text-white'>Sir Name : </p>
                                    <input className='ml-2 px-2 rounded-md py-2' type="text" placeholder='Sir Name' />
                                </div>
                            </div>
                            <div className='lg:flex md:flex my-5'>
                                <p className='text-2xl text-start font-bold text-white'>Age : </p>
                                <input className='ml-3 px-2 py-2 rounded-md md:mt-0 lg:mt-0 mt-2' type="date" name="" id="" />
                            </div>
                            <div className='my-5'>
                                <p className='text-start font-bold text-2xl text-white'>Gender : </p>
                                <div>
                                    <div className='flex'>
                                        <input onChange={() => hanldeChecked('male')} checked={value === 'male' ? clickedCheck : otherCheck} className='lg:text-2xl md:text-2xl' type="checkbox" name="acs" id="male" />
                                        <p className='ml-2 font-bold text-white lg:text-2xl md:text-2xl'>Male</p>
                                    </div>
                                    <div className='flex'>
                                        <input onChange={() => hanldeChecked('female')} checked={value === 'female' ? clickedCheck : otherCheck} className='lg:text-2xl md:text-2xl' type="checkbox" name="acs" id="female" />
                                        <p className='ml-2 font-bold text-white lg:text-2xl md:text-2xl'>Female</p>
                                    </div>
                                    <div className='flex'>
                                        <input onChange={() => hanldeChecked('others')} checked={value === 'others' ? clickedCheck : otherCheck} className='lg:text-2xl md:text-2xl' type="checkbox" name="acs" id="others" />
                                        <p className='ml-2 font-bold text-white lg:text-2xl md:text-2xl'>Others</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex my-5'>
                                <p className='text-start lg:display-inline display-none font-bold text-2xl text-white'>Location :</p>
                                <input className='ml-2 px-2 rounded-md py-2' type="text" placeholder='Location' />
                            </div>
                        </div>
                    </div>
                    {/* {
                        props.changeMode(mode)
                    } */}
                    <hr className='w-full my-3 border-2 border-solid' />
                    <div className='w-full'>
                        <h1 className='text-3xl text-start font-bold text-white'>Create Account</h1>
                        <form action="">
                            <div className='lg:flex md:flex block items-center justify-start my-5'>
                                <h3 className='lg:text-2xl md:text-2xl font-bold mr-12 text-white text-start'>Set User Name</h3>
                                <input className='lg:text-2xl px-2 md:text-2xl border-2 border-solid' type="text" />
                            </div>
                            <div className='lg:flex md:flex block items-center justify-start my-5'>
                                <h3 className='lg:text-2xl md:text-2xl font-bold mr-16 text-white text-start'>Set password</h3>
                                <input className='lg:text-2xl px-2 md:text-2xl border-2 border-solid' type="text" />
                            </div>
                            <div className='lg:flex md:flex block items-center justify-start my-5'>
                                <h3 className='lg:text-2xl md:text-2xl font-bold mr-5 text-white text-start'>Retype Password</h3>
                                <input className='lg:text-2xl px-2 md:text-2xl border-2 border-solid' type="text" />
                            </div>
                            <button className={`lg:text-2xl p-2 font-bold  ml-2 text-white rounded-lg  lg:w-1/4 hover:bg-blue-500 hover:text-black border-solid border-2 relative left-0 mt-10 ${mode ? 'bg-purple-500' : 'bg-gray-900'}`}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;