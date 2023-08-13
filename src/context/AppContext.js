import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children})
{
    const [category,setCategory] = useState('All');

    const [isSort,setIsSort] = useState('none');

    const [toSearch,setToSearch] = useState('');

    const value = {
        category,
        setCategory,
        isSort,
        setIsSort,
        toSearch,
        setToSearch,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}