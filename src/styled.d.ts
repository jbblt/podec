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
