import React, { useContext, useState } from 'react'
import Note from './Note'

import NoteContext from '../../Context/Notes/NoteContext';
import UpdateModal from '../Others/UpdateModal';
const NoteList = () => {
  const [errorMessageQueue, setErrorMessageQueue] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const handleModalView = (note) => {
    setEdit(prevedit => (!prevedit));
    setEditNote(note);
  }
  const handelDelete = async (e, id)=>{
    setErrorMessageQueue([]);
    const response = await deleteNote(e, id);
    if (!response.success) setErrorMessageQueue(...errorMessageQueue, [response.error]);
  }

  const context = useContext(NoteContext);
  const { noteList, deleteNote } = context;

  return (
    <>
      {
        errorMessageQueue.length !== 0
        &&
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          {errorMessageQueue.at(errorMessageQueue.length - 1)}
        </div>
      }
      <UpdateModal view={edit} toggleEdit={setEdit} editableNote={editNote} />
      <div className='row'>
        {noteList.map((note) => {
          return <Note note={note} key={note._id} toggleEdit={handleModalView} deleteNote={handelDelete} />
        })}
      </div>
    </>
  )
}

export default NoteList;
