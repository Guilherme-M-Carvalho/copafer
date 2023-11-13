import { ReactNode, createContext, useState } from "react";
import { AlertColor } from "@mui/material";
import Toast from "../components/toast";
import Loader from "../components/loader";
// import DialogDelete from "../templates/dialogDelete";
// import DialogConfirm from "../templates/dialogConfirm";


type GlobalAlertContextData = {
    handleToast: ({open, type, message}: ToastProps) => void, 
    handleConfirmation: ({open, children, onCancel, onConfirm}: ConfirmationDeleteProps) => void, 
    handleLoading: (loading: boolean) => void;
    handleConfirmationDelete: ({open, children, onCancel, onConfirm}: ConfirmationDeleteProps) => void, 
}

type GlobalAlertProviderProps = {
    children: ReactNode;
}

type ToastProps = {
    open: boolean;
    type: AlertColor;
    message: string
}

type ConfirmationProps = {
    open: boolean;
    children: ReactNode;
    onCancel: () => void;
    onConfirm: () => void;
}
type ConfirmationDeleteProps = {
    open: boolean;
    children: ReactNode;
    onCancel: () => void;
    onConfirm: () => void;
}

export const GlobalAlertContext = createContext({} as GlobalAlertContextData)

export function GlobalAlertProvider({ children }: GlobalAlertProviderProps) {
    const [toast, setToast] = useState<ToastProps>({ open: false, type: 'success', message: '' })
    const [confirmation, setConfirmation] = useState<ConfirmationProps>({ open: false, children: null, onCancel: handleCloseConfirmation, onConfirm: handleCloseConfirmation})
    const [confirmationDelete, setConfirmationDelete] = useState<ConfirmationDeleteProps>({ open: false, children: null, onCancel: handleCloseConfirmationDelete, onConfirm: handleCloseConfirmationDelete})
    const [loading, setLoading] = useState(false)

    function handleToast({open, type, message}: ToastProps) {
        setToast({ open, type, message })
    }

    function handleConfirmation({open, children, onCancel: onCancelParent, onConfirm: onConfirmParent}: ConfirmationProps) {
        const onCancel = () => {
            onCancelParent()
            handleCloseConfirmation()
        }
        const onConfirm = () => {
            onConfirmParent()
            handleCloseConfirmation()
        }
        setConfirmation({ open, children, onCancel, onConfirm})
    }

    function handleConfirmationDelete({open, children, onCancel: onCancelParent, onConfirm: onConfirmParent}: ConfirmationDeleteProps) {
        const onCancel = () => {
            onCancelParent()
            handleCloseConfirmationDelete()
        }
        const onConfirm = () => {
            onConfirmParent()
            handleCloseConfirmationDelete()
        }
        setConfirmationDelete({ open, children, onCancel, onConfirm})
    }

    function handleLoading(loading: boolean){
        setLoading(loading)
    }

    function handleCloseConfirmationDelete(){
        setConfirmationDelete({ open: false, children: confirmationDelete.children, onCancel: handleCloseConfirmationDelete, onConfirm: handleCloseConfirmationDelete})
    }


    function handleCloseConfirmation(){
        setConfirmation({ open: false, children: confirmationDelete.children, onCancel: handleCloseConfirmation, onConfirm: handleCloseConfirmation})
    }

    return (
        <GlobalAlertContext.Provider value={{ handleToast, handleLoading, handleConfirmation, handleConfirmationDelete }}>
            {children}
            {/* <DialogDelete {...confirmationDelete} />
            <DialogConfirm {...confirmation} /> */}
            <Toast {...toast} handleClose={() => {setToast({ open: false, type: toast.type, message: '' });}} />
            <Loader open={loading} />
        </GlobalAlertContext.Provider>
    )
}