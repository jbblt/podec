/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_REACT_APP_TEMPLATE_ID: string;
  readonly VITE_REACT_APP_SERVICE_ID: string;
  readonly VITE_REACT_APP_PUBLIC_KEY: string;
  // More env variables...
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
