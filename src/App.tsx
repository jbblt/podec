import { Box, Button, Container, createTheme, Paper, ThemeProvider, useMediaQuery } from '@mui/material';
import ResponsiveAppBar from 'components/navBar/NavBar';
import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ColorModeContext } from 'theme/ColorModeContext';

import { PodecTheme } from './theme/theme';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode]
  );
  const theme = useMemo(
    () =>
      createTheme({
        ...PodecTheme,
        palette: {
          ...PodecTheme.palette,
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box className={'app-wrapper'} bgcolor="background.default">
          <header>
            <ResponsiveAppBar />
          </header>
          <Container component="main" maxWidth="sm" sx={{ mb: 2 }}>
            <Paper variant="elevation" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <Outlet />
            </Paper>
          </Container>
          <Container component="footer" maxWidth="sm" sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                onClick={() => {
                  alert('clicked');
                }}
                sx={{ mt: 3, ml: 1 }}
              >
                Valider
              </Button>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
