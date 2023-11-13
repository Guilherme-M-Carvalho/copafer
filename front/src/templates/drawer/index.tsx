import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { MainContext } from '../../contexts/MainContext';
import { useContext } from 'react';
import { modules } from '../../constants/modules';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: "#ededed !important",
    border: "none !important"
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 17px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 17px)`,
    },
    backgroundColor: "#ededed !important",
    border: "none !important"
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    backgroundColor: "#ededed !important",
    border: "none !important"

}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function DrawerMain() {

    const { open, handleToggle } = useContext(MainContext)

    const { module: moduleSys } = useSelector((root: RootState) => root.routes)


    const navigate = useNavigate()

    return (
        <Drawer variant="permanent" PaperProps={{
            id: "drawer"
        }} open={open} onClick={(e: any) => {
            if (e.target.id === "drawer") {
                handleToggle()
            }
        }}>
            <DrawerHeader>
            </DrawerHeader>
            <List sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}>
                {modules.map(({ name, icon: Icon, id, route }, index) => {
                    const active = id === moduleSys.id
                    return (
                        <ListItem key={name} disablePadding sx={{ display: 'block', marginTop: id === 2 ? "auto" : "", mb: id === 2 ? "64px" : "" }}>
                            <ListItemButton
                                onClick={() => {
                                    navigate(route)
                                    if (open) {
                                        handleToggle()
                                    }
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    background: active ? "#FAFCFF" : "",
                                    ml: "16px",
                                    borderRadius: "16px 0 0 16px"
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {!!Icon &&<Icon sx={{ color: "#454242" }} />}
                                </ListItemIcon>
                                <ListItemText primary={name} sx={{ opacity: open ? 1 : 0, color: "#454242" }} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    )

}