import App from 'App';
import ErrorPage from 'pages/error/ErrorPage';
import { ClientForm } from 'pages/Form/clientForm/ClientForm';
import { ModelFormPage } from 'pages/Form/modelForm/ModelFormPage';
import { SectionForm } from 'pages/Form/sectionFrom/SectionForm';
import { createBrowserRouter } from 'react-router-dom';

export enum RoutesPath {
  ROOT = '/',
  FORM_CLIENT = 'form/client',
  FORM_MODEL = 'form/model',
  FORM_SECTION = 'form/coupe',
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
        element: <ModelFormPage />,
      },
      {
        path: RoutesPath.FORM_SECTION,
        element: <SectionForm />,
      },
    ],
  },
]);
