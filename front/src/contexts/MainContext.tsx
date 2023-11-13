import { ReactNode, createContext } from "react";
import useDrawer from "../hooks/useDrawer";
import Main from "../templates/main";
import { useLocation } from "react-router-dom";

type createContextData = {
    handleToggle: () => void;
    open: boolean;
}

type MainProviderProps = {
    children: ReactNode;
}

export const MainContext = createContext({} as createContextData)

export function MainProvider({ children }: MainProviderProps) {
    const drawer = useDrawer()
    return (
        <MainContext.Provider value={{ ...drawer }}>
            <Main>
                {children}
            </Main>
        </MainContext.Provider>
    )
}