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
          <section className="flex flex-col justify-between p-4 w-full font-extralight text-white bg-neutral-800 sm:flex-row items-left justify-left xxs:p-6 tablet:p-8 font-redHat">
            <FooterIntro />
            <FooterOffers />
            <FooterContact />
          </section>
          <aside className="flex flex-col">
            <Copyrights />
            {/* <div className="flex flex-col px-4 pt-2 w-full h-full bg-neutral-800 xs:flex-row items-left justify-left xxs:px-6 tablet:px-8 tablet:pt-0 tablet:pb-8"> */}
            {/*  <a */}
            {/*    className="text-xs font-extralight text-neutral-400" */}
            {/*    href="http://www.ioten.io" */}
            {/*    target="_blank" */}
            {/*    title="autor strony" */}
            {/*    rel="noopener noreferrer"> */}
            {/*    ioten.io */}
            {/*  </a> */}
            {/* </div> */}
          </aside>
        </>
      ) : (
        <aside className="font-redHat">
          <Copyrights white />
          {/* <div className="flex flex-col px-4 pt-2 w-full h-full bg-white xs:flex-row items-left justify-left xxs:px-6 tablet:px-8 tablet:pt-0 tablet:pb-8"> */}
          {/*  <a */}
          {/*    className="text-xs font-extralight text-neutral-800" */}
          {/*    href="http://www.ioten.io" */}
          {/*    target="_blank" */}
          {/*    title="autor strony" */}
          {/*    rel="noopener noreferrer"> */}
          {/*    ioten.io */}
          {/*  </a> */}
          {/* </div> */}
        </aside>
      )}
    </footer>
  );
};

export default forwardRef(Footer);

// todo: add after deployment ioten.io
