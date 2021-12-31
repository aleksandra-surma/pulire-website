import { useContext } from 'react';
import { PageContext } from 'data/pageContext';

const Footer = () => {
  const { currentPage: pathnameUrl } = useContext(PageContext);

  return (
    <footer className="flex items-center w-full h-24 justify-left">
      {pathnameUrl !== '/kontakt' ? <div>Info footer</div> : null}
      <p className="pl-4 text-xs text-gray-500 xxs:pl-6 tablet:pl-8">Copyright © 2022 pulire.co All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
