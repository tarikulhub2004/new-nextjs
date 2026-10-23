import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='w-[80vh] my-auto mx-auto text-center space-y-5'>
            <h1 className='text-4xl text-[#d72050] font-bold'>This Page Not Found</h1>
            <button className='btn bg-[#d72050] text-white'>
                <Link href="/">Go To Home</Link>
            </button>
        </div>
    );
};

export default notFound;