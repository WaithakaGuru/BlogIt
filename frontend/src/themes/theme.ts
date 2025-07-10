import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export default createTheme({
    
    palette: {
        primary: {
            main: '#4f46e5',
        },
        secondary: {
            main: orange[600],
        },
        text: {
            primary: "#5072fb",
            secondary: "#555",
            disabled: "#ddd",
        },
    },
    typography: {
        fontFamily: "Outfit, Montserrat",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 680,
            md: 990,
            lg: 1200,
            xl: 1400,
        },
    },
 });