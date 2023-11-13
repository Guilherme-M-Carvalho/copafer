import { useState } from "react";

export default function useTabs(){

    const [tab, setValue] = useState('1');

    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };

    return {
        tab,
        handleChange
    }
}