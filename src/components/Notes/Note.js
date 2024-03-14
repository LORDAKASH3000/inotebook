import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const Note = ({note, toggleEdit, deleteNote}) => {
    return (
        <>
            <Card
                style={{ width: '18rem' }}
                className="mb-2 text-start px-0 mx-3 my-2"
            >
                <Card.Header className='bg-primary text-white'>{note.tag}</Card.Header>
                <Card.Body className='bg-light text-dark'>
                    <Card.Title >
                        {note.title}
                       <FontAwesomeIcon className='ms-2' onClick={(e)=>deleteNote(e, note._id)} icon={faTrashAlt} />
                       <FontAwesomeIcon className='ms-2' onClick={()=>toggleEdit(note)} icon={faEdit} />
                    </Card.Title>
                    
                    <Card.Text>
                        {note.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Note;
