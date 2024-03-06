import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp() {
    return (
        <Form className='container-sm my-4 text-start'>
            <h2 className='my-4'>Complete Your Registration To Add Notes</h2>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" type='submit'>Sign Up</Button>
        </Form>
    )
}

export default SignUp;
