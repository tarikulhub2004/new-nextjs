import React from 'react';

const loading = () => {
    return (
        <div className='flex text-2xl text-red-700 h-[80vh] items-center justify-center'>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default loading;