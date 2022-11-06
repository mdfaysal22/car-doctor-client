import React from 'react';
import errorImg from "./../../../assets/404.png"

const Error = () => {
    return (
        <div className='mx-10 my-10'>
            <img className='w-2/3 mx-auto h-auto' src={errorImg} alt="" />
        </div>
    );
};

export default Error;