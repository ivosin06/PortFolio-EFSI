import React, { useContext, createContext, useState, useEffect } from "react";
import { getInfoPersonal } from "../api/apiFunctions";

const UserContext = createContext();
const UserFunctions = createContext();



export const UserProvider = ({ children }) => {
    const [User, setUser] = useState(null);
    const [Logged, setLogged] = useState(false);

    const initInfo= async() => {
        if (User === null) {
            await getInfoPersonal().then((data) => {
                if (data) {
                    setUser({ ...data })
                    setLogged(true)
            
                }
                else {
                    setUser(null)
                    setLogged(false)
                    console.log("no llego la info")
                }
            })
        }
        else {
            setUser(null)
        
        }

    }
    useEffect(()=>{
        initInfo();
    },[])

    let functions = {Logged :Logged}


    return (
        <UserFunctions.Provider value={functions}>
            <UserContext.Provider value={User}>
                {children}
            </UserContext.Provider>
        </UserFunctions.Provider>
    );
}
export function useUserContext() {
    return useContext(UserContext);
}
export function useUserFunctions() {
    return useContext(UserFunctions);
}