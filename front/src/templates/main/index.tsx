import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBarMain from '../appBar';
import DrawerMain from '../drawer';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { MainContext } from '../../contexts/MainContext';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function Main({ children }: { children: React.ReactNode }) {

    const { open, handleToggle } = React.useContext(MainContext)


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarMain />
            <DrawerMain />
            <Box component="main" sx={{ flexGrow: 1, p: "16px", pl: 0, height: "100vh", background: "#ededed !important", width: (theme: Theme) => open ? "calc(100vw - 240px)" : `calc(100vw - ${theme.spacing(8)} - 17px)` }}>
                <Box sx={{overflowY: "auto", background: "#FAFCFF",  width: '100%', display: "flex", flexDirection: "column", height: "100%", borderRadius: "16px", p:3, pt: 0 }} onClick={() => open && handleToggle()}>
                    <DrawerHeader />
                    {children}
                </Box>
            </Box>
        </Box>
    );
}