import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import NoteContext from '../../Context/Notes/NoteContext';

const AddNote = () => {
    const [newNote, setNewNote] = useState({title: "", description: "", tag: ""});
    const [errorMessageQueue, setErrorMessageQueue] = useState([]);
    const context = useContext(NoteContext);    
    const { addNewNote } = context;
    const handelonChange = e => setNewNote({...newNote, [e.target.name]: e.target.value});

    return (
        <Form 
            className='container-sm my-4 text-start'
            onSubmit = { async (e)=>{
                setErrorMessageQueue([]);
                const response = await addNewNote(e,newNote);
                if (!response.success) setErrorMessageQueue(...errorMessageQueue, [response.error]);
            }}
        >
            <h2 className='my-4'>Add New Note</h2>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name='title' onChange={handelonChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name='description' onChange={handelonChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tag</Form.Label>
                <Form.Control type="text" name='tag' onChange={handelonChange} required />
            </Form.Group>
            {
                errorMessageQueue.length !== 0
                &&
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                    {errorMessageQueue.at(errorMessageQueue.length - 1)}
                </div>
            }
            <Button variant="primary" type='submit'>Add</Button>
        </Form>
    )
}

export default AddNote;
