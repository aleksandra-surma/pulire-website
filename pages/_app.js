import 'styles/globals.css';
import { StrictMode, useEffect } from 'react';
import HeadContainer from 'components/Head/Head';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.GA_VERCEL_ID, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <StrictMode>
      <HeadContainer />
      <Component {...pageProps} />
    </StrictMode>
  );
};

export default MyApp;
