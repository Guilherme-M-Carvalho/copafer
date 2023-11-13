import { grey, red, blue } from "@mui/material/colors";


type modeProps = 'light' | 'dark';

export const colors = (mode: modeProps) => ({
  palette: {
    mode,
    ...(mode === 'light') ?
      {
        secondary: {
          light: "#eceff1",
          main: "#FAFCFF",
          dark: "#254487",
          contrastText: "#616466",
        },
        primary: {
          main: "#454242",
          contrastText: "#ffffff",
        },
        success: {
          main: "#2E7D32",
          contrastText: "#ffffff",
        },
        successDark: {
          main: "#8EC78E",
          contrastText: "#1F5C22",
        },
        successLight: {
          main: "#CDF0CD",
          contrastText: "#38BB36",
        },
        warningLight: {
          main: "#FAE1B2",
          contrastText: "#ED6C02",
        },
        dangerLight: {
          main: "#FAE6E6",
          contrastText: "#D32F2F",
        },
        neutral: {
          main: "#13408B",
          contrastText: "#ffff",
        },
        error: {
          main: "#D32F2F",
          contrastText: "#ffff",
        },
        divider: "#D9D9D9",
        text: {
          primary: "#000000",
          secondary: "#000000",
        },
        blue: {
          main: '#2c4992',
          900: "#000000",
          50: "#000000",
          subTitle: '#2c4992'
        },
        bluePrincipal: {
          main: "#000",
        },
        colorSwitch: {
          main: "#6dbceb"
        },
        lightColor: {
          main: "#f1f6ff"
        },
        blueSys: {
          main: '#2c4992',
          contrastText: "#fff"
        },
        teste: "#000",
        blueOcean: {
          main: "#00a7e1",
          contrastText: "#fff"
        },
        inputColor: {
          main: grey[500],
        },
        blackInput: {
          main: '#00a7e1',
          contrastText: "#00a7e1"
        },
        blueLabel: {
          main: '#182D5A',
          contrastText: "#00a7e1"
        },
        info: {
          main: '#D9D9D9',
          contrastText: "#000000"
        },
        black: {
          main: '#000000',
          contrastText: "#ffffff"
        },
        inQueue: {
          main: '#13408B',
          contrastText: "#fff"
        },
        inCheck: {
          main: '#1976D265',
          contrastText: "#1976D2"
        },
        underMaintenance: {
          main: '#FA872965',
          contrastText: "#FA8729"
        },
        approvedRepaired: {
          main: '#38BB3665',
          contrastText: "#38BB36"
        },
        waitingApproval: {
          main: '#13408B65',
          contrastText: "#13408B"
        },
        fixedUp: {
          main: '#38BB3665',
          contrastText: "#38BB36"
        },
        noRepair: {
          main: '#75757565',
          contrastText: "#757575"
        },
        approved: {
          main: '#09820E55',
          contrastText: "#09820E"
        },
        disapproved: {
          main: '#D32F2F65',
          contrastText: "#D32F2F"
        },
        // dark: will be calculated from palette.secondary.main,
        // contrastText: '#ffcc00',
        // },
        bluePrimary: {
          color: "#254487"
        },
        grayPrimary: {
          color: red[900]
        },
      }
      : {
        // primary: deepOrange,
        // divider: deepOrange[700],
        // background: {
        //     default: deepOrange[900],
        //     paper: deepOrange[900],
        // },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
        blue: {
          900: '#90caf9',
          50: '#424242'
        },
        red: {
          error: '#f44336'
        },
        bluePrincipal: {
          main: "#000000",
        },
        info: {
          main: '#D9D9D9',
          contrastText: "#000000"
        },
      }
  },
});
