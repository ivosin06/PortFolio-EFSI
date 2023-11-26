import React, { useContext, createContext, useState, useEffect } from "react";
import { getInfoProyects } from "../api/apiFunctions";

const ProyectContext = createContext();
const ProyectFunctions = createContext();

export const ProyectProvider = ({ children }) => {
    const [Proyect, setProyect] = useState(null);
    const [FavProyects, setFavProyects] = useState(null);
    const initInfo = async () => {
        if (Proyect === null) {
            await getInfoProyects().then((data) => {
                setProyect(data)
            })
        }
        else {
            setProyect(null)
        }
    }

    const handleSetFav = (e) => {
        const idSelected = e.currentTarget.value;
        const favSelected = Proyect.map((p)=>{
            if(idSelected == p.idProyect){
                p.fav = !p.fav;
            }
            return p
        })
        setFavProyects(favSelected)
    };
      
      
    useEffect(() => {
        initInfo();
    }, [])

    return (
        <ProyectFunctions.Provider value={{handleSetFav, FavProyects}}>
            <ProyectContext.Provider value={Proyect}>
                {children}
            </ProyectContext.Provider>
        </ProyectFunctions.Provider>
    );

}

export function useProyectContext() {
    return useContext(ProyectContext)
}

export function useProyectFunctions() {
    return useContext(ProyectFunctions)
}