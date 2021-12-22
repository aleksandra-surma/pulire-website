import 'styles/globals.css';
import { StrictMode } from 'react';
import HeadContainer from 'components/Head/Head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <HeadContainer />
      <div suppressHydrationWarning>{typeof window === 'undefined' ? null : <Component {...pageProps} />}</div>
    </StrictMode>
  );
};

export default MyApp;
