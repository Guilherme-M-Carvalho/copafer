import { TextField, TextFieldProps } from "@mui/material";

export default function Input({ error, helperText, label, ...props }: TextFieldProps) {
    return (<TextField
        error={error}
        label={label}
        variant="filled"
        helperText={helperText}
        {...props}
    />)
}