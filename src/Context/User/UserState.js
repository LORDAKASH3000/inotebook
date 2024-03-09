import React from 'react'
import UserContext from './UserContext';

const UserState = (props)=>{

    const auth_token = localStorage.getItem('auth-token');

    const signUp = ()=>{
        
    }

    const signIn = ()=>{

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