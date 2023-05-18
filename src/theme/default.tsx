import { alpha, darken } from '@mui/material';

const colors = {
  brandGrey1: '#1E1F20',
  brandGrey2: '#1C1C1C',
  brandGrey3: '#090A0C',
  primary: '#CB3C1D',
  secondary: '#A1A1A1',
  primaryAlt: '#090A0C',
  white: '#252525',
  trueWhite: '#FFFFFF',
};

export default {
  header: {
    height: '80px',
    background: colors.brandGrey3,
  },
  sidebar: {
    width: '290px',
    background: colors.primaryAlt,
    textColor: colors.secondary,
    dividerBg: '#1D1818',
  },
  palette: {
    primary: {
      main: colors.primary,
      light: alpha(colors.primary, 0.6),
      lighter: alpha(colors.primary, 0.85),
      dark: darken(colors.primary, 0.2),
    },
    secondary: {
      main: colors.secondary,
      light: alpha(colors.secondary, 0.6),
      lighter: alpha(colors.secondary, 0.85),
      dark: darken(colors.secondary, 0.2),
    },
    background: {
      default: colors.brandGrey2,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        },
      },
    },
  },
};
