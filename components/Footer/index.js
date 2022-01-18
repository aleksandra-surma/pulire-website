import { useContext, forwardRef } from 'react';
import { PageContext } from 'data/pageContext';
import paths from 'data/paths';
import FooterIntro from './FooterIntro';
import FooterOffers from './FooterOffers';
import FooterContact from './FooterContact';
import Copyrights from './Copyrights';

const Footer = (props, ref) => {
  const { currentPage: pathnameUrl } = useContext(PageContext);

  return (
    <footer ref={ref}>
      {pathnameUrl !== paths.contact ? (
        <>
          <section className="flex flex-col justify-between p-4 w-full font-extralight text-white bg-neutral-800 sm:flex-row items-left justify-left xxs:p-6 tablet:p-8">
            <FooterIntro />
            <FooterOffers />
            <FooterContact />
          </section>
          <Copyrights />
        </>
      ) : (
        <Copyrights white />
      )}
    </footer>
  );
};

export default forwardRef(Footer);
