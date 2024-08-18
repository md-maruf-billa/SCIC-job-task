import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-8'>
            <h3 className='text-5xl font-semibold'>Oops! page not found</h3>
            <img src="./notfound.png" alt="" />
            <Link to="/">
                <Button btnText={"Go Home"} customStyle={"bg-[#00b207] text-white"} />
            </Link>
        </div>
    );
};

export default NotFound;