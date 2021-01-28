import React from 'react';
import { AuthProvider } from './authContext';

export const AppContextProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
