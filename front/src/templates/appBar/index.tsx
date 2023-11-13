import Toolbar from '@mui/material/Toolbar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: `calc(100% - ${65 + 33}px)`,
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth + 33}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    boxShadow: "none",
    marginTop: "16px",
    marginRight: "16px",
    borderRadius: "16px 16px 0 0",
    background: theme.palette.secondary.main

}));

export default function AppBarMain() {

    const { open, handleToggle } = useContext(MainContext)
    const { module: moduleSys } = useSelector((root: RootState) => root.routes)

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    onClick={(e) => {
                        handleToggle()
                    }}
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                >
                    <MenuIcon sx={{
                        color: "#454242"
                    }} />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ color: "#454242", fontWeight: "600" }}>
                    {moduleSys.name}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}