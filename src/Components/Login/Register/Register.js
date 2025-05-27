import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';

const Register = () => {


    const [agree, setAgree] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/home');
    }

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }




    // if (error) {
    //     errorElement = (<div className="text-danger">Error: {error?.message}</div>);
    // }

    if (loading || updating) {
        return <Loading />
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        // const email = event.target.email.value;
        // const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: email });
        alert('Updated profile');
    }



    return (
        <div>
           
            <h2 className='text-primary text-center mt-5 mb-5'>Please Register</h2>
            <div className='container w-50 mx-auto'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox"
                            className={` ${agree ? 'text-success' : 'text-danger'}`} label="Accept terms and Condition" />

                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => createUserWithEmailAndPassword(email, password)}>
                        Register
                    </Button>
                </Form>

                <p>Already Registerd? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;