import React from 'react'
import NoteContext from './NoteContext';

const NoteState = (props)=>{

    const fetchAllNotesByUser = ()=>{

    }

    const addNewNote = ()=>{

    }

    const editNote = ()=>{

    }

    const deleteNote = ()=>{

    }

    const CRUD = {
        fetchAllNotesByUser,
        addNewNote,
        editNote,
        deleteNote
    }

    return (
        <NoteContext.Provider value={CRUD}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;