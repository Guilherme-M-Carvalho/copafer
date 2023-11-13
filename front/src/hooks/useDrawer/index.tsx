import { useState } from "react";

export default function useDrawer(){

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(open => !open);
    };

    return{
        handleToggle,
        open
    }
}