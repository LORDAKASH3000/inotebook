import React, {useContext, useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import UserContext from '../../Context/User/UserContext';
function SignUp() {
    const [credentials, setCredentials] = useState({name: "",email: "", password: ""});
    const [errorMessageQueue, setErrorMessageQueue] = useState([]);
    const context = useContext(UserContext);
    const navigate = useNavigate();
    const { signUp } = context;
    const handelonChange = e => setCredentials({...credentials, [e.target.name]: e.target.value});
    return (
        <Form 
            className='container-sm my-4 text-start'
            onSubmit = { async (e)=>{
                setErrorMessageQueue([]);
                const response = await signUp(e,credentials);
                if (!response.success) setErrorMessageQueue(...errorMessageQueue, [response.error]);
                else {
                    navigate("/");
                }
            }}
        >
            <h2 className='my-4'>Complete Your Registration To Add Notes</h2>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' onChange={handelonChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' onChange={handelonChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' onChange={handelonChange} required />
            </Form.Group>
            {
                errorMessageQueue.length !== 0
                &&
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                    {errorMessageQueue.at(errorMessageQueue.length - 1)}
                </div>
            }
            <Button variant="primary" type='submit'>Sign Up</Button>
        </Form>
    )
}

export default SignUp;
