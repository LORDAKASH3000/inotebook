import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import NoteContext from '../../Context/Notes/NoteContext';

const UpdateModal = ({toggleEdit, view, editableNote}) => {
    const [newNote, setNewNote] = useState({title: null, description: null, tag: null});
    const [errorMessageQueue, setErrorMessageQueue] = useState([]);
    const context = useContext(NoteContext);    
    const { editNote } = context;
    const handelonChange = e => setNewNote({...newNote, [e.target.name]: e.target.value});
    const handleModalView = () => toggleEdit(false);
    const handleSubmit = async (e) => {
        setErrorMessageQueue([]);
        const response = await editNote(e, newNote, editableNote._id);
        if(response.success) handleModalView();
        setErrorMessageQueue(...errorMessageQueue, [response.error]);
    };

    return (
        <Modal show={view} onHide={handleModalView}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control defaultValue={editableNote==null?'':editableNote.title} type="text" name='title' onChange={handelonChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control defaultValue={editableNote==null?'':editableNote.description} type="text" name='description' onChange={handelonChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tag</Form.Label>
                <Form.Control defaultValue={editableNote==null?'':editableNote.tag} type="text" name='tag' onChange={handelonChange} />
            </Form.Group>
            {
                errorMessageQueue.length !== 0
                &&
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                    {errorMessageQueue.at(errorMessageQueue.length - 1)}
                </div>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalView}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
}

export default UpdateModal;
