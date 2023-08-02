import { createTheme } from "@mui/material";

const poketheme = createTheme({
    palette: {
        primary: {main: '#181818', light: '#8C97CF'},
        secondary: {main: '#0AFFB6'},
        info: {main: '#1B6D88'}
    },
    typography: {
        fontFamily: [
              'Inter',
              '"Helvetica Neue"',
        ].join(','),
    },
});

export default poketheme;
