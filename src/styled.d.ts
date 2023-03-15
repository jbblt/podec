import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  // interface PaletteOptions {}

  // interface PaletteColor {}

  // interface SimplePaletteColorOptions {}
}
