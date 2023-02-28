import 'App.css';

import { Box } from '@mui/material';
import ResponsiveAppBar from 'components/navBar/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Box mt={3}>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
