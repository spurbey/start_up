'use client';

import { createContext, useContext, useState } from "react";

const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = useState('p');
    const [email, setEmail] = useState('p');
    const [clubCode, setClubCode] = useState('p');
    // const [userName, setUserName] = useState('p');

    return (
        <UserContext.Provider value={{ userName, setUserName, email, setEmail, clubCode,setClubCode }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () => useContext(UserContext);