import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#101213',
      dark: '#0B0C0D',

      light: '#ff',
      contrastText: '#ff'
    },
    secondary: {
      main: '#47FEFF',
      light: '#fff',
      contrastText: '#066658'
    },
    third: {
      main: '#00EFBC',
      light: '#ff',
      contrastText: '#066658'
    },
    white: {
      main: '#fff',
      dark: '#1878F2',
      light: '#fff',
      contrastText: '#1878F2'
    },
    black: {
      main: '#101213'
    },
    orange: {
      main: '#FFA500'
    },
    error: {
      main: red.A400
    },
    success: {
      main: '#3BFF93',
      light: '#3BFF93'
    },
    background: {
      default: '#ffffff',
      paper: '#1F3362'
    }
  }
});

export default theme;
