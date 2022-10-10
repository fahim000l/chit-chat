// import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import leftImg from '../../src/img/img-edited.jpg';
import './RegistrationPage.css'

const RegistrationPage = ({ mode, changeMode }) => {


    const [males, setMales] = useState(true);
    const [females, setFemales] = useState(true);
    const [otherss, setOtherss] = useState(true);

    const [userData, setUserData] = useState({
        firstName: "",
        sirName: "",
        age: "",
        male: false,
        female: false,
        others: false,
        location: "",
        setUserName: "",
        setPassword: "",
        retypePassword: ""
    });

    let name, value, type;
    const handleUserData = (event) => {
        name = event.target.name;
        type = event.target.type;


        if (type === 'checkbox') {
            if (name === 'male') {
                // value = false;
                setUserData({ ...userData, [name]: males })
                setMales(!males)
                // setUserData({ ...userData, ['female']: false })
                // setUserData({ ...userData, ['others']: false })
                // setClick(!click);
            }
            else if (name === 'female') {
                // value = false;
                setUserData({ ...userData, [name]: females })
                setFemales(!females)
                // setUserData({ ...userData, ['male']: false })
                // setUserData({ ...userData, ['others']: false })
                // setClick(!click);
            }
            else {
                // value = false;
                setUserData({ ...userData, [name]: otherss })
                setOtherss(!otherss)
                // setUserData({ ...userData, ['male']: false })
                // setUserData({ ...userData, ['female']: false })
                // setClick(!click);
            }

        }
        else {
            value = event.target.value;
            setUserData({ ...userData, [name]: value });
        }


    }



    const handleSubmitBtn = async (e) => {
        e.PreventDefault();


        const { firstName, sirName, age, male, female, others, location, setUserName, setPassword, retypePassword } = userData;

        const res = await fetch("https://chit-chat-6cce7-default-rtdb.firebaseio.com/profiles.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                sirName,
                age,
                male,
                female,
                others,
                location,
                setUserName,
                setPassword,
                retypePassword
            }),
        }
        )
        if (res) {
            setUserData(
                {
                    firstName: "",
                    sirName: "",
                    age: "",
                    male: false,
                    female: false,
                    others: false,
                    location: "",
                    setUserName: "",
                    setPassword: "",
                    retypePassword: ""
                }
            );

            alert('Data stored Succressfully!!!');
        }
        else {
            alert('Response not found');
        }




    }
    // const [value, setValue] = useState('');
    // const [click, setClick] = useState(false);
    // const [otherCheck, setOtherckeck] = useState(false);
    // const [clickedCheck, setClickedcheck] = useState(false);





    // const hanldeChecked = (innerValue) => {
    //     setValue(innerValue);
    //     setClick(!click)

    //     click ? setClickedcheck(!clickedCheck) && setOtherckeck(!otherCheck) : setClickedcheck(false) && setOtherckeck(false);
    //     // setIschecked(!isChecked)
    // }
    // const mode = props.mode;
    return (
        <div id='registration' className='lg:flex'>

            <div className='lg:w-2/4 lg:h-screen'>
                <img className='w-full lg:h-screen bg-blue-700' src={leftImg} alt="" />
            </div>
            <div id={`${mode ? 'forms-light' : 'forms-dark'}`} className='lg:w-3/4 w-full lg:pb-48 pb-10 flex flex-col justify-evenly lg:items-start  lg:px-24 px-5 rounded-lg pt-5 right-side'>

                <form action='' method='POST'>
                    <div className={`mb-5 w-1/4 lg-w-1/6 mt-10 border-solid border-2 rounded-lg ${mode ? 'lg:pl-50 pl-10' : 'lg:pr-11 pr-10'}  py-2`}>
                        {
                            // className='lg:mt-28 mt-10'
                            changeMode(mode)
                        }
                    </div>
                    <h1 className='lg:text-5xl md:text-5xl text-2xl font-bold text-start text-white'>Register</h1>
                    <hr className='w-full my-3 border-2 border-solid' />
                    <div>
                        <h1 className='text-3xl text-start font-bold text-white'>Create Profile</h1>
                        <div className='flex flex-col justify-evenly items-start w-full'>
                            <div className='lg:flex items-center md:flex my-5'>
                                <div className='flex my-5 ml-2'>
                                    <p className='lg:text-2xl lg:inline md:inline hidden md:text-2xl font-bold text-white'>First Name : </p>
                                    <input id='first-name' onChange={handleUserData} className='ml-2 px-2 rounded-md py-2' name='firstName' type="text" required placeholder='First Name' value={userData.firstName} />
                                </div>
                                <div className='flex ml-2 my-5'>
                                    <p className='lg:text-2xl lg:inline md:inline hidden md:text-2xl text-start font-bold text-white'>Sir Name : </p>
                                    <input id='sir-name' onChange={handleUserData} className='ml-2 px-2 rounded-md py-2' type="text" placeholder='Sir Name' required name='sirName' value={userData.sirName} />
                                </div>
                            </div>
                            <div className='lg:flex md:flex my-5'>
                                <p className='text-2xl text-start font-bold text-white'>Date of Birth : </p>
                                <input className='ml-3 px-2 py-2 rounded-md md:mt-0 lg:mt-0 mt-2' required type="date" onChange={handleUserData} name="age" value={userData.age} id="" />
                            </div>
                            <div className='my-5'>
                                <p className='text-start font-bold text-2xl text-white'>Gender : </p>
                                <div>
                                    <div className='flex'>
                                        <input onChange={handleUserData} className='lg:text-2xl md:text-2xl' type="checkbox" name="male" id="male" value={userData.male} />
                                        <p className='ml-2 font-bold text-white lg:text-2xl md:text-2xl'>Male</p>
                                    </div>
                                    <div className='flex'>
                                        <input onChange={handleUserData} className='lg:text-2xl md:text-2xl' type="checkbox" name="female" id="female" value={userData.female} />
                                        <p className='ml-2 font-bold text-white lg:text-2xl md:text-2xl'>Female</p>
                                    </div>
                                    <div className='flex'>
                                        <input onChange={handleUserData} className='lg:text-2xl md:text-2xl' type="checkbox" name="others" id="others" value={userData.others} />
                                        <p className='ml-2 font-bold text-white lg:text-2xl md:text-2xl'>Others</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex my-5'>
                                <p className='text-start lg:inline md:inline hidden font-bold text-2xl text-white'>Location :</p>
                                <input id='location' onChange={handleUserData} className='ml-2 px-2 rounded-md py-2' required type="text" name='location' value={userData.location} placeholder='Location' />
                            </div>
                        </div>
                    </div>
                    {/* {
                        props.changeMode(mode)
                    } */}
                    <hr className='w-full my-3 border-2 border-solid' />
                    <div className='w-full'>
                        <h1 className='text-3xl text-start font-bold text-white'>Create Account</h1>
                        <div>
                            <div className='lg:flex md:flex block items-center justify-start my-5'>
                                <h3 className='lg:text-2xl md:text-2xl font-bold mr-12 text-white text-start'>Set User Name</h3>
                                <input id='set-user-name' required onChange={handleUserData} className='lg:text-2xl px-2 md:text-2xl border-2 border-solid' type="text" name='setUserName' value={userData.setUserName} />
                            </div>
                            <div className='lg:flex md:flex block items-center justify-start my-5'>
                                <h3 className='lg:text-2xl md:text-2xl font-bold mr-16 text-white text-start'>Set password</h3>
                                <input id='set-password' required onChange={handleUserData} className='lg:text-2xl px-2 md:text-2xl border-2 border-solid' type="text" name='setPassword' value={userData.setPassword} />
                            </div>
                            <div className='lg:flex md:flex block items-center justify-start my-5'>
                                <h3 className='lg:text-2xl md:text-2xl font-bold mr-5 text-white text-start'>Retype Password</h3>
                                <input id='retype-password' required onChange={handleUserData} className='lg:text-2xl px-2 md:text-2xl border-2 border-solid' type="text" name='retypePassword' value={userData.retypePassword} />
                            </div>
                            <button onClick={handleSubmitBtn} className={`lg:text-2xl p-2 font-bold  ml-2 text-white rounded-lg  lg:w-1/4 hover:bg-blue-500 hover:text-black border-solid border-2 relative left-0 mt-0 ${mode ? 'bg-purple-500' : 'bg-gray-900'}`}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;