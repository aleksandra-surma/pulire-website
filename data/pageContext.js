import { createContext } from 'react';

export const initialPageContextValue = {
  currentPage: '/',
};

export const PageContext = createContext(initialPageContextValue);

// Example of contect
// export const initialPageContextValue = {
//   visibleHamburger: false,
//   mobile: false,
//   activeMobileNavigation: false,
//   visibleSlider: false,
//   handleChangeActiveMobileNav: () => {},
//   handleCookiesPolicyAgree: () => {},
//   handleDismissCookiesPopUp: () => {},
// };
