import { ReactNode, createContext } from "react";
import useTabs from "../hooks/useTabs";

type TabsProps = {
    tab: string;
    handleChange: (event: any, newValue: string) => void;
}

export const TabsContext = createContext({} as TabsProps)

export default function TabsProvider({children}: {children: ReactNode}){

    const tabs = useTabs()

    return (<TabsContext.Provider value={{...tabs}}>
        {children}
    </TabsContext.Provider>)
}