import { FaceFrownIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Authentication } from '../../Contexts/AuthContext';
import { Utility } from '../../Contexts/UtilityContext';

const Home = () => {
    const { mode } = useContext(Utility);
    const { user, logOut } = useContext(Authentication);
    // const navigate = useNavigate();


    const handleLogOut = () => {
        logOut();
    }

    return (
        <div>
            <FaceFrownIcon className='lg:w-[500px] w-[100px] text-5xl mx-auto mt-[5%]' />
            {
                user?.displayName &&
                <div className='lg:text-5xl text-3xl p-5 lg:p-0 lg:w-[50%] mx-auto text-start'>
                    <h1>Welcome {user.displayName}</h1>
                    <p>
                        Sorry to bother you.
                    </p>
                    <p>This page has not been created yet by the dummy developer.</p>
                    <p>Wanna LogOut? <button onClick={handleLogOut} className={`text-white px-5 py-2 rounded-lg font-bold text-2xl cursor-pointer ${mode ? 'bg-gray-900' : 'bg-purple-600'} hover:bg-blue-300 hover:text-black border-2 border-solid border-white hover:border-black`}>Log Out</button></p>
                </div>

            }
        </div >
    );
};

export default Home;