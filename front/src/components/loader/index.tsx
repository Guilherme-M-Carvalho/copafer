import { Backdrop, CircularProgress } from "@mui/material";

type LoaderProps = {
    open: boolean;
}

export default function Loader({...props}: LoaderProps) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.tooltip + 1 }}
            {...props}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}