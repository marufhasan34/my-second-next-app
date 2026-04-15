import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <h2 className='text-4xl'>this is the header </h2>
            <Link href={'/foods'}>
            <button className='btn'>All Foods here</button>
            </Link>
        </div>
    );
};

export default Header;