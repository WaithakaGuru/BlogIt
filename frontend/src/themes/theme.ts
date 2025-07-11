import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: "#4f46e5",
    },
    secondary: {
      main: "#8B5CF6",
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
