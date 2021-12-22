import 'styles/globals.css';
import { StrictMode } from 'react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
};

export default MyApp;
