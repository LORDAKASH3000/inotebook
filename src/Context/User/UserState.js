import React from 'react'
import UserContext from './UserContext';

const UserState = (props)=>{
    
    const auth_token = localStorage.getItem('auth-token');

    const signUp = ()=>{
        
    }

    const signIn = async ()=>{
        e.preventDefault();
        const response = await fetch(process.env.REACT_APP_SIGNIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
    }

    const fetchUserDetails = ()=>{

    }

    const signOut = ()=>{

    }

    const Authenticate = {
        auth_token,
        signUp,
        signIn,
        fetchUserDetails,
        signOut
    }

    return (
        <UserContext.Provider value={Authenticate}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;