import 'index.css';

import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes/router';

import { FormStepContextProvider } from './Context/FormStepContext';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <FormStepContextProvider>
    <CssBaseline enableColorScheme />
    <RouterProvider router={router} />
  </FormStepContextProvider>
);
