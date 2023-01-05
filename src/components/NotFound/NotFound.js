import React from 'react';
import notFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='flex justify-center my-10'>
           <img className='w-2/5' src={notFound} alt="" /> 
        </div>
    );
};

export default NotFound;