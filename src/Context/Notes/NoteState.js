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

    const updateNoteList = (note, mode)=>{
        switch(mode){
            case "ADD":{
                setNoteList(prevList => ([...prevList, note]));
                break;
            }
            case "UPDATE":{
                let newList = noteList.filter(obj => obj._id !== note._id);
                newList.push(note);
                setNoteList(newList);
                break;
            }
            case "REMOVE":{
                let newList = noteList.filter(obj => obj._id !== note._id);
                setNoteList(newList);
                break;
            }
        }
        
    }

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
        if (!data?.error){
            updateNoteList(data, "ADD");
            return {success: true};
        }
        return data;
    }

    const editNote = async (e, {title, description, tag}, noteID)=>{
        e.preventDefault();
        const response = await fetch(process.env.REACT_APP_UPDATE_NOTE_URL + "/" + noteID, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': user.auth_token
            },
            body: JSON.stringify({title, description, tag})
        });
        const data = await response.json();
        if (!data?.error){
            updateNoteList(data, "UPDATE");
            return {success: true};
        }
        return data;
    }

    const deleteNote = async (e, noteID)=>{
        e.preventDefault();
        const response = await fetch(process.env.REACT_APP_DELETE_NOTE_URL + "/" + noteID, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': user.auth_token
            }
        });
        const data = await response.json();
        if (!data?.error){
            updateNoteList(data, "REMOVE");
            return {success: true};
        }
        return data;
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