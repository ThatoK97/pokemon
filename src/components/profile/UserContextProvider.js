import { createContext, useState } from 'react';

// define context objects
const UserContext = createContext();
const UserContextDispatcher = createContext();

//provide user details as context value to be consumed by children components
function useUserDetails() {
    const [userDetails, updateUserDetails] = useState({username: ""});
    return { userDetails, updateUserDetails };
}

function UserContextProvider({ children }) {
    const { userDetails, updateUserDetails } = useUserDetails();
    return (
    <UserContext.Provider value={userDetails}>
        <UserContextDispatcher.Provider value={updateUserDetails}>
            { children }
        </UserContextDispatcher.Provider>
    </UserContext.Provider>
    );
}

export {UserContext, UserContextDispatcher, UserContextProvider};