import React, {useContext, useEffect, useState} from 'react'
import NoteContext from './NoteContext';
import { useNavigate } from "react-router-dom";

import UserContext from '../../Context/User/UserContext';

const NoteState = (props)=>{
    const [noteList, setNoteList] = useState([]);
    const context = useContext(UserContext);
    const navigate = useNavigate();
    const { user } = context;
    const checkAuthenticate = ()=>{
        if(!user.isAuthenticate) navigate("/login")
    }

    useEffect(()=>{
        checkAuthenticate();
        fetchAllNotesByUser();
    },[])

    const fetchAllNotesByUser = async ()=>{
        const response = await fetch(process.env.REACT_APP_FETCH_ALL_NOTES_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': user.auth_token
            }
        });
        const data = await response.json();
        if (data){
            setNoteList(data);
            return {success: true};
        }
        return {data, success: false};
    }

    const addNewNote = async (e, {title, description, tag})=>{
        e.preventDefault();
        const response = await fetch(process.env.REACT_APP_ADD_NOTE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': user.auth_token
            },
            body: JSON.stringify({title, description, tag})
        });
        const data = await response.json();
        if (data.success)fetchAllNotesByUser();
        return data;
    }

    const editNote = ()=>{

    }

    const deleteNote = ()=>{

    }

    const CRUD = {
        noteList,
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