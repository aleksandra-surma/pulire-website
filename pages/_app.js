import 'styles/globals.css';
import { StrictMode, useEffect } from 'react';
import { useRouter } from 'next/router';
import HeadMeta from 'components/HeadMeta';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
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
      <HeadMeta />
      <Component {...pageProps} />
    </StrictMode>
  );
};

export default MyApp;
