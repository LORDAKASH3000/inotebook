import React, { useState, useEffect } from 'react'
import UserContext from './UserContext';
import { useNavigate } from "react-router-dom";

const UserState = (props)=>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "Anonymous",
        _id: null,
        auth_token: null,
        isAuthenticate: false
    });
    
    useEffect(()=>{
        isAuthenticate();
    },[]);

    const isAuthenticate = () => {
        let a_token = localStorage.getItem('auth-token');
        if (a_token !== null){
            setUser(prevUser=>({...prevUser, ["auth_token"]:a_token, ["isAuthenticate"]:true }))
            fetchUserDetails(a_token);
        }
    }

    const signUp = async(e, {name, email, password})=>{
        e.preventDefault();
        const response = await fetch(process.env.REACT_APP_SIGNUP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const data = await response.json();
        if (data?.authToken){
            localStorage.setItem('auth-token', data.authToken);
            isAuthenticate();
            fetchUserDetails(data.authToken);
            return {success: true};
        }
        return {data, success: false};
    }

    const signIn = async (e, {email, password})=>{
        e.preventDefault();
        const response = await fetch(process.env.REACT_APP_SIGNIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const data = await response.json();
        if (data?.authToken){
            localStorage.setItem('auth-token', data.authToken);
            isAuthenticate();
            fetchUserDetails(data.authToken);
            return {success: true};
        }
        return {data, success: false};
    }

    const fetchUserDetails = async (auth_token)=>{
        const response = await fetch(process.env.REACT_APP_FETCH_USER_DETAILS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': auth_token
            }
        });
        const data = await response.json();
        if (data){
            const {name, _id, email} = data;
            setUser(prevUser=>({...prevUser, name, _id, email}))
            return {success: true};
        }
        return {data, success: false};
    }

    const signOut = ()=>{
        localStorage.removeItem('auth-token');
        setUser({
            name: "Anonymous",
            _id: null,
            auth_token: null,
            isAuthenticate: false
        });
        navigate("/login");
    }

    const Authenticate = {
        user,
        signUp,
        signIn,
        signOut
    }

    return (
        <UserContext.Provider value={Authenticate}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;