import { createTheme } from '@mui/material/styles';

import defaultTheme from './default';

declare module '@mui/material/styles' {
  interface Theme {
    header: {
      height: string;
      background: React.CSSProperties['color'];
    };
    sidebar: {
      width: string;
      background: string;
      textColor: string;
      dividerBg: string;
    };
  }

  interface ThemeOptions {
    header: {
      height: string;
      background: React.CSSProperties['color'];
    };
    sidebar: {
      width: string;
      background: string;
      textColor: string;
      dividerBg: string;
    };
  }
}

const theme = createTheme(defaultTheme);

export default theme;
