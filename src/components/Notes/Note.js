import React from 'react'
import Card from 'react-bootstrap/Card';

const Note = ({title, desc, tag}) => {
    return (
        <>
            <Card
                style={{ width: '18rem' }}
                className="mb-2 text-start px-0 mx-3 my-2"
            >
                <Card.Header className='bg-primary text-white'>{tag}</Card.Header>
                <Card.Body className='bg-light text-dark'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Note;
