import { createContext } from 'react';

export const initialPageContextValue = {
  currentPage: '/',
  isMobileMenuActive: false,
  toggleMenuActive: () => {},
  handleCookiesPolicyAgree: () => {},
  handleDismissCookiesPopUp: () => {},
};

export const PageContext = createContext(initialPageContextValue);
