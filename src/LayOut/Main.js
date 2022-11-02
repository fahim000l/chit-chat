import React from 'react';
import { Outlet } from 'react-router-dom';
import BannerImg from '../components/BannerImg/BannerImg';

const Main = () => {
    return (
        <div className='flex flex-col lg:flex-row w-full'>
            <BannerImg></BannerImg>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;