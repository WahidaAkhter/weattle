import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let errorElement;

    if(loading){
        return <Loading/>
    }

    if (error) {
        return (
            errorElement = <p className='text-danger'>Error: {error.message}</p>

        );
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='m-5'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>

            {errorElement}

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    style={{ height: '80px' }} className='btn btn-primary text-center w-100 fs-3'>
                    <img className='px-2' style={{ height: '3rem' }} src="https://cdn-icons-png.flaticon.com/512/281/281781.png?w=740" alt="" />
                    Google Sign In
                </button>
            </div>


        </div>
    );
};

export default SocialLogin;