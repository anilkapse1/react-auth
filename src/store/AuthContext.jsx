import React, { createContext, useState } from 'react'

export const Oathcontext = createContext({
    Token:'',
    IsLogged:false,
    Login:(token)=>{

    },
    Logout:()=>{

    }
});

const AuthContext = ({children}) => {
    const [token,setToken]=useState('');
    const isLoggedIn=!!token;
    const loginHandler=(token)=>{
        setToken(token)
    }
    const logoutHandler=()=>{
        setToken(null)
    }
    //context value in bunch
    const contextValue={
        Token:token,
        IsLogged:isLoggedIn,
        Login:loginHandler,
        Logout:logoutHandler
    }

    console.log('token is',token);
    return (
      <Oathcontext.Provider value={contextValue}>
          {children}
      </Oathcontext.Provider>
  )
}

export default AuthContext