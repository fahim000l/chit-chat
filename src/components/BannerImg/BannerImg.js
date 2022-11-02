import React from 'react';
import bannerImg from '../../img/img-edited.jpg'

const BannerImg = () => {
    return (
        <div className='lg:w-[40%] '>
            <img className='w-full h-full bg-blue-700' src={bannerImg} alt="" />
        </div>
    );
};

export default BannerImg;