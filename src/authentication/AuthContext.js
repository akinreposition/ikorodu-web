import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const [ userType, setUser ] = useState({
        type: 'merchant',
        id: '112j0j0ffasd',
        locationId: '234NG-LLKRD',
        username: 'Akin Odeku'
    } )
    return (
        <AuthContext.Provider
        value={{
            userType,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}