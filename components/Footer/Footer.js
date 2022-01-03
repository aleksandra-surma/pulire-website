import { useContext } from 'react';
import { PageContext } from 'data/pageContext';
import { contactData } from 'data/contact';
import home from 'data/home';
import offers from 'data/offers';
import { v4 as uuid } from 'uuid';
import { Icon } from '@iconify/react';
import MoreInfo from 'components/MoreInfo/MoreInfo';

const Footer = () => {
  const { currentPage: pathnameUrl } = useContext(PageContext);

  return (
    <footer className="flex flex-col font-extralight p-4 w-full h-full bg-neutral-800 text-white xs:flex-row items-left justify-left xxs:p-6 tablet:p-8">
      {pathnameUrl !== '/kontakt' ? (
        <>
          <section className="footer__intro pb-10">
            <h2 className="pb-4 text-4xl font-bold font-redHat tracking-logo">
              {contactData.companyName.toUpperCase()}
            </h2>
            <div className="pb-10 ">
              {home.motto.map((mottoLine) => (
                <p key={uuid()} className="py-2 font-extralight">
                  {mottoLine}
                </p>
              ))}
            </div>
            {pathnameUrl !== '/' ? <MoreInfo directionPage="/" /> : null}
          </section>
          <section className="footer__offers pb-10">
            <h2 className="pb-4 text-4xl font-bold font-redHat tracking-logo">{offers.title}</h2>
            <ul className="pb-10 ">
              {offers.offers.map(({ offerName }) => (
                <li key={uuid()} className="flex">
                  <Icon icon="bx:bxs-phone-call" width="24" height="24" className="mr-4" />
                  <p className="py-2 font-extralight">{offerName}</p>
                </li>
              ))}
            </ul>
            {pathnameUrl !== '/oferta' ? <MoreInfo directionPage="/oferta" /> : null}
          </section>
          <section className="footer__contact pb-10">
            <h2 className="pb-4 text-4xl font-bold font-redHat tracking-logo">{contactData.title}</h2>
            <div className="flex pt-4">
              <Icon icon="bx:bxs-phone-call" width="24" height="24" className="mr-4" />
              <p>
                <a href={`tel:${contactData.phoneNumber}`}>{contactData.phoneNumber}</a>
              </p>
            </div>
            <div className="flex py-4">
              <Icon icon="bx:bx-mail-send" width="24" height="24" className="mr-4" />
              <p>
                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
              </p>
            </div>
            {pathnameUrl !== '/kontakt' ? <MoreInfo directionPage="/kontakt" /> : null}
          </section>
          <p className="pt-2 text-xs text-neutral-500">Copyright © 2022 pulire.co All Rights Reserved</p>
        </>
      ) : (
        <p className="text-xs text-neutral-500">Copyright © 2022 pulire.co All Rights Reserved</p>
      )}
    </footer>
  );
};

export default Footer;
