import { createContext, ReactNode, useState } from 'react';

export const FormStepContext = createContext({});

export const FormStepContextProvider = ({ children }: { children: ReactNode }) => {
  const state = useState({});

  return <FormStepContext.Provider value={state}>{children}</FormStepContext.Provider>;
};
