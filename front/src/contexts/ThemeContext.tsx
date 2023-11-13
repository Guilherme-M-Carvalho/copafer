import { ReactNode, createContext, useState } from "react";
import { ThemeProvider as ProviderTheme, createTheme } from '@mui/material/styles';
import { colors } from '../styles/app'



export const ThemeContext = createContext({})

type ThemeProviderProps = {
    children: ReactNode;
}

type ThemeProps = "light" | "dark";

// @babel-ignore-comment-in-output Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
        black: true;
        successDark: true;
        successLight: true;
        warningLight: true;
        dangerLight: true;
        inQueue: true;
        inCheck: true;
        underMaintenance: true;
        approvedRepaired: true;
        waitingApproval: true;
        fixedUp: true;
        noRepair: true;
        approved: true;
        disapproved: true;
    }
}
declare module '@mui/material/Switch' {
    interface SwitchPropsColorOverrides {
        neutral: true;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        neutral: true;
    }
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [themeType, setThemeType] = useState<ThemeProps>('light')
    const [menu, setMenu] = useState<boolean>(false)

    const theme = createTheme(colors(themeType));



    function handleTheme(dark: boolean) {
        if (dark) setThemeType('dark')
        else setThemeType('light')
    }

    function handleMenu(menu: boolean) {
        setMenu(menu)
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme, handleMenu, menu }}>
            <ProviderTheme theme={theme}>
                {children}
            </ProviderTheme>
        </ThemeContext.Provider>
    )
}