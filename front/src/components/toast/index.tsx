import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import React from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} variant="filled" ref={ref}  {...props} />;
});

type ToastProps = {
    type: AlertColor;
    open: boolean;
    message: string;
    handleClose: () => void;
}

export default function Toast({ type, open, message, handleClose }: ToastProps) {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}