import { useContext } from 'react';
import { PageContext } from 'data/pageContext';
import { contactData } from 'data/contact';
import home from '../../data/home';

const Footer = () => {
  const { currentPage: pathnameUrl } = useContext(PageContext);

  return (
    <footer>
      {pathnameUrl !== '/kontakt' ? (
        <div className="flex flex-col p-4 w-full h-full bg-neutral-800 text-white xs:flex-row items-left justify-left xxs:p-6 tablet:p-8">
          <h2 className="pb-2 text-4xl font-bold font-redHat tracking-logo">{contactData.companyName.toUpperCase()}</h2>
          <p className="font-extralight">{home.motto}</p>
          <p className="text-xs text-neutral-500">Copyright © 2022 pulire.co All Rights Reserved</p>
        </div>
      ) : (
        <p className="text-xs text-neutral-500">Copyright © 2022 pulire.co All Rights Reserved</p>
      )}
    </footer>
  );
};

export default Footer;
