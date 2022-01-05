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
    <>
      {pathnameUrl !== '/kontakt' ? (
        <footer>
          <section className="flex flex-col justify-between p-4 w-full font-extralight text-white bg-neutral-800 sm:flex-row items-left justify-left xxs:p-6 tablet:p-8">
            <article className="footer__intro md:w-1/3 xl:w-1/4 mb-20 md:mb-0">
              <h2 className="pb-4 text-3xl laptop:text-4xl font-bold font-redHat tracking-logo">
                {contactData.companyName.toUpperCase()}
              </h2>
              <div className="">
                {home.shortDescription.map((paragraph) => (
                  <p key={uuid()} className="py-2 text-justify font-extralight">
                    {paragraph}
                  </p>
                ))}
              </div>
              {pathnameUrl !== '/' ? <MoreInfo directionPage="/" /> : null}
            </article>
            <article className="footer__offers md:w-3/10 mb-20 md:mb-0">
              <h2 className="pb-4 text-3xl laptop:text-4xl font-bold font-redHat tracking-logo">{offers.title}</h2>
              <ul className="">
                {offers.offers.map(({ title }) => (
                  <li key={uuid()} className="flex py-2">
                    <Icon icon="bi:check-lg" width="24" height="24" className="mr-4 text-green-400" />
                    <p className="font-extralight">{title}</p>
                  </li>
                ))}
              </ul>
              {pathnameUrl !== '/oferta' ? <MoreInfo directionPage="/oferta" /> : null}
            </article>
            <article className="flex flex-col pb-10 footer__contact md:w-1/5">
              <h2 className="pb-4 text-3xl laptop:text-4xl font-bold font-redHat tracking-logo">{contactData.title}</h2>
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
            </article>
          </section>
          <p className="flex flex-col p-4 w-full h-full font-extralight text-white bg-neutral-800 xs:flex-row items-left justify-left xxs:p-6 tablet:p-8 pt-2 text-xs text-neutral-300">
            Copyright © 2022 pulire.co All Rights Reserved
          </p>
        </footer>
      ) : (
        <footer className="p-4 pt-8 w-full h-full font-extralight text-center tablet:text-left bg-white xxs:pt-10 tablet:pt-12 xs:flex-row items-left justify-left xxs:p-6 tablet:p-8">
          <p className="text-xs text-neutral-600">
            Copyright © {new Date().getFullYear()} pulire.co All Rights Reserved
          </p>
        </footer>
      )}
    </>
  );
};

export default Footer;
