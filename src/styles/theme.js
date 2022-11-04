import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B2D42'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;
