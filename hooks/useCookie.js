import { useEffect, useState } from 'react';

const useCookie = () => {
  const [isActiveCookiePopUp, setIsActiveCookiePopUp] = useState(false);

  useEffect(() => {
    setIsActiveCookiePopUp(localStorage.getItem('cookie-notice-accept') !== 'accepted');
  }, []);

  const handleDismissCookiesPopUp = () => setIsActiveCookiePopUp(false);

  const handleCookiesPolicyAgree = () => {
    localStorage.setItem('cookie-notice-accept', 'accepted');
    handleDismissCookiesPopUp();
  };

  return { isActiveCookiePopUp, handleCookiesPolicyAgree, handleDismissCookiesPopUp };
};

export default useCookie;
