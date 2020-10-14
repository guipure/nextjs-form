const { createMuiTheme } = require('@material-ui/core');

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: '1.875rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.125rem',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 600,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1.125rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  palette: {
    primary: {
      main: '#359FF4',
    },
    secondary: {
      main: '#00BFA5',
    },
    text: {
      primary: '#fff',
    },
  },
});

export default theme;