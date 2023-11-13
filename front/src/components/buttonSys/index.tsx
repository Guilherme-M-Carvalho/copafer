import { Button, ButtonProps } from "@mui/material";

export default function ButtonSys({...props}: ButtonProps){
    return <Button {...props} sx={{boxShadow: "none", textTransform: "capitalize"}} />
}