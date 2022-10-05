import leftImg from '../../src/img/img-edited.jpg';
import './RegistrationPage.css'

const RegistrationPage = (props) => {
    const mode = props.mode;
    return (
        <div id='registration' className='lg:flex'>

            <div className='lg:w-2/4 lg:h-screen'>
                <img className='w-full lg:h-screen bg-blue-700' src={leftImg} alt="" />
            </div>
            <div id={`${mode ? 'forms-light' : 'forms-dark'}`} className='lg:w-3/4 lg:h-screen pb-24 flex flex-col  justify-evenly lg:items-start  lg:px-24 px-5 rounded-lg pt-5'>

                <div className='w-full'>
                    <div className='pt-9'>
                        {
                            props.changeMode(mode)
                        }
                    </div>
                    <h1 className='lg:text-5xl text-2xl font-bold text-start text-white'>Register</h1>
                    <hr className='w-full my-3 border-2 border-solid' />
                    <div>
                        <h1 className='text-3xl text-start font-bold text-white'>Create Profile</h1>
                        <form action="" className='flex flex-col justify-evenly items-start'>
                            <div className='lg:flex my-5'>
                                <div className='flex my-5'>
                                    <p className='text-2xl font-bold text-white'>First Name : </p>
                                    <input className='ml-2' type="text" />
                                </div>
                                <div className='flex ml-5 my-5'>
                                    <p className='text-2xl text-start font-bold text-white'>Sir Name : </p>
                                    <input className='ml-2' type="text" />
                                </div>
                            </div>
                            <div className='flex my-5'>
                                <p className='text-2xl font-bold text-white'>Age : </p>
                                <input className='ml-3' type="date" name="" id="" />
                            </div>
                            <div className='my-5'>
                                <p className='text-start font-bold text-2xl text-white'>Gender : </p>
                                <div>
                                    <div className='flex'>
                                        <input type="checkbox" name="" id="" />
                                        <p className='ml-2 font-bold text-white'>Male</p>
                                    </div>
                                    <div className='flex'>
                                        <input type="checkbox" name="" id="" />
                                        <p className='ml-2 font-bold text-white'>Female</p>
                                    </div>
                                    <div className='flex'>
                                        <input type="checkbox" name="" id="" />
                                        <p className='ml-2 font-bold text-white'>Others</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex my-5'>
                                <p className='text-start font-bold text-2xl text-white'>Location :</p>
                                <input className='ml-2' type="text" />
                            </div>
                        </form>
                    </div>
                    {/* {
                        props.changeMode(mode)
                    } */}
                    <hr className='w-full my-3 border-2 border-solid' />
                    <div className='w-full'>
                        <h1 className='text-3xl text-start font-bold text-white'>Create Account</h1>
                        <form action="">
                            <div className='lg:flex block items-center justify-start my-5'>
                                <h3 className='text-2xl font-bold mr-12 text-white text-start'>Set User Name</h3>
                                <input className='text-2xl border-2 border-solid' type="text" />
                            </div>
                            <div className='lg:flex block items-center justify-start my-5'>
                                <h3 className='text-2xl font-bold mr-16 text-white text-start'>Set password</h3>
                                <input className='text-2xl border-2 border-solid' type="text" />
                            </div>
                            <div className='lg:flex block items-center justify-start my-5'>
                                <h3 className='text-2xl font-bold mr-5 text-white text-start'>Retype Password</h3>
                                <input className='text-2xl border-2 border-solid' type="text" />
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