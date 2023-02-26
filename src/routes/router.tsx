import App from 'App';
import ErrorPage from 'pages/error/ErrorPage';
import { ClientForm } from 'pages/Form/clientForm/ClientForm';
import { ModelForm } from 'pages/Form/modelForm/ModelForm';
import { createBrowserRouter } from 'react-router-dom';

export enum RoutesPath {
  ROOT = '/',
  FORM_CLIENT = 'form/client',
  FORM_MODEL = 'form/model',
}

export const router = createBrowserRouter([
  {
    path: RoutesPath.ROOT,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RoutesPath.FORM_CLIENT,
        element: <ClientForm />,
      },
      {
        path: RoutesPath.FORM_MODEL,
        element: <ModelForm />,
      },
    ],
  },
]);
