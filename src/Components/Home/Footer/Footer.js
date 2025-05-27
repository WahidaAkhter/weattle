import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center text-danger'>
            <small>Copyright@wahida-{year}</small>
        </div>
    );
};

export default Footer;