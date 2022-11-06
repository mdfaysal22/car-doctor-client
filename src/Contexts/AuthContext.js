import React, { createContext } from 'react';

export const userContext = createContext();
const AuthContext = ({children}) => {
    const user = {name: "Md Faysal", photo:"Empty"}
    const authInfo = {user}
    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;