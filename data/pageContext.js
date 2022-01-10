import { createContext } from 'react';

export const initialPageContextValue = {
  currentPage: '/',
  isMobileMenuActive: false,
  toggleMenuActive: () => {},
};

export const PageContext = createContext(initialPageContextValue);
