import { useEffect, useState } from 'react';

const useCookie = () => {
  const [isActiveCookiePopUp, setIsActiveCookiePopUp] = useState(null);

  useEffect(() => {
    setIsActiveCookiePopUp(localStorage.getItem('cookie-notice-accept') !== 'accepted');
  }, [isActiveCookiePopUp]);

  const handleDismissCookiesPopUp = () => setIsActiveCookiePopUp(false);

  const handleCookiesPolicyAgree = () => {
    localStorage.setItem('cookie-notice-accept', 'accepted');
    handleDismissCookiesPopUp();
  };

  return { isActiveCookiePopUp, handleCookiesPolicyAgree, handleDismissCookiesPopUp };
};

export default useCookie;
