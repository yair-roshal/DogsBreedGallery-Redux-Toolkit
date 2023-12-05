import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#1a3f6c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#add8e6",
      contrastText: "#000",
    },
    background: {
      default: "#131415",
      paper: "#1a222c",
    },
  },
});

export default theme;
