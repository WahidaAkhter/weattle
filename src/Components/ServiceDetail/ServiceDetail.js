import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();

    return (
        <div className='text-center'>
            <h2>Package Number you choose to book:{serviceId}</h2>
            <div>
                <Link to="/checkout">
                    <button className='btn btn-success'> Proceed Your Booking</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;