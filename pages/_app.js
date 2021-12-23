import 'styles/globals.css';
import { StrictMode } from 'react';
import HeadContainer from 'components/Head/Head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <HeadContainer />
      <Component {...pageProps} />
    </StrictMode>
  );
};

export default MyApp;
