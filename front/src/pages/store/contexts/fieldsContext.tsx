import { ReactNode, createContext } from "react";
import useFields from "../hooks/useFields";
import { FieldsProps, HandleCepProps, HandleDeleteContactProps, HandleValueContactProps, HandleValueProps, SetAllFieldsProps } from "../types/fields";

type FieldsContextProps = {
    handleValueContact: HandleValueContactProps;
    handleValue: HandleValueProps;
    handleCep: HandleCepProps;
    cleanFields: () => void;
    handleAddContact: () => void;
    handleDeleteContact: HandleDeleteContactProps;
    setAllFields:SetAllFieldsProps;
    fields: FieldsProps;
}

export const FieldsContext = createContext({} as FieldsContextProps)

export default function FieldsProvider({children}: {children: ReactNode}) {

    const fields = useFields()

    return (<FieldsContext.Provider value={{ ...fields }}>
        {children}
    </FieldsContext.Provider>)
}