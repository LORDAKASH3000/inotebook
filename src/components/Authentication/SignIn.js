import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignIn() {
    return (
        <Form className='container-sm my-4 text-start'>
            <h2 className='my-4'>Login To Add & View Notes</h2>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" type='submit'>Login</Button>
        </Form>
    )
}

export default SignIn;