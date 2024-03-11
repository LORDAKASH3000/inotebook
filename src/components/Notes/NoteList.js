import React, { useContext } from 'react'
import Note from './Note'

import NoteContext from '../../Context/Notes/NoteContext';
const NoteList = () => {
  const context = useContext(NoteContext);
  const { noteList } = context;

  return (
    <div className='row'>
      {noteList.map((note) => {
        return <Note key={note._id} title={note.title} desc={note.description} tag={note.tag} />
      })}
    </div>
  )
}

export default NoteList;
