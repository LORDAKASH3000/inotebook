import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddNote = () => {
    return (
        <Form className='container-sm my-4 text-start'>
            <h2 className='my-4'>Add New Note</h2>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tag</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type='submit'>Add</Button>
        </Form>
    )
}

export default AddNote;
