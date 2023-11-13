import { ReactNode, createContext } from "react";
import useLocationRoutes from "../hooks/useLocationRoutes";
import usePermission from "../hooks/usePermission";

type createContextData = {
    create: boolean;
    read: boolean;
    update: boolean;
    deletePerm: boolean;
    exportPerm: boolean;
    handleReadPermission: ({ module }: {
        module: number;
    }) => boolean;
}

type LocationProviderProps = {
    children: ReactNode;
}


export const LocationContext = createContext({} as createContextData)

export function LocationProvider({ children }: LocationProviderProps) {

    useLocationRoutes()
    const permissions = usePermission()

    return (
        <LocationContext.Provider value={{
            ...permissions
        }}>
            {children}
        </LocationContext.Provider>
    )
}