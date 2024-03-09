import React from 'react'
import Note from './Note'

const NoteList = () => {
    const notes = [
        {
          "_id": "65e8b1d77d5dcfc69ebb139d",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:35.249Z",
          "__v": 0
        },
        {
          "_id": "65e8b1da7d5dcfc69ebb139f",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:38.520Z",
          "__v": 0
        },
        {
          "_id": "65e8b1db7d5dcfc69ebb13a11",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:39.663Z",
          "__v": 0
        },
        {
          "_id": "65e8b1db7d5dcfc69ebb13a12",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:39.663Z",
          "__v": 0
        },
        {
          "_id": "65e8b1db7d5dcfc69ebb13a13",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:39.663Z",
          "__v": 0
        },
        {
          "_id": "65e8b1db7d5dcfc69ebb13a14",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:39.663Z",
          "__v": 0
        },
        {
          "_id": "65e8b1db7d5dcfc69ebb13a15",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:39.663Z",
          "__v": 0
        },
        {
          "_id": "65e8b1db7d5dcfc69ebb13a16",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:39.663Z",
          "__v": 0
        },
        {
          "_id": "65e8b1db7d5dcfc69ebb13a17",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:39.663Z",
          "__v": 0
        },
        {
          "_id": "65e8b1db7d5dcfc69ebb13a18",
          "user": "65d779a2e768e87f3cd3ae1d",
          "title": "First note",
          "description": "This is my first note",
          "tag": "First",
          "date": "2024-03-06T18:11:39.663Z",
          "__v": 0
        }
    ]

  return (
    <div className='row'>
      {notes.map((note)=>{
        return <Note key={note._id} title={note.title} desc={note.desc} tag={note.tag} />
      })}
    </div>
  )
}

export default NoteList;
