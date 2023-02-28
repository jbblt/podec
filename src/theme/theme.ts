import { ThemeOptions } from '@mui/material';

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export const PodecTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#81c784',
    },
    secondary: {
      main: '#fff59d',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition:
          'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
};
