import React, { useContext } from 'react';
import { PageContext } from '../../data/pageContext';

const Footer = () => {
  const { currentPage: pathnameUrl } = useContext(PageContext);

  return (
    <footer className="flex justify-center items-center w-full h-24 border-t">
      {pathnameUrl !== '/kontakt' ? <div>Info footer</div> : null}
      <p>Copyright © 2022 pulire.co All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
