import { useContext, forwardRef } from 'react';
import { PageContext } from 'data/pageContext';
import paths from 'data/paths';
import Image from 'next/image';
import FooterIntro from './FooterIntro';
import FooterOffers from './FooterOffers';
import FooterContact from './FooterContact';
import Copyrights from './Copyrights';

const iotenWhiteLogo = '/ioten-logo-white-small.png';

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
            <div className="flex px-4 pt-2 pb-4 w-full h-full bg-neutral-800 xs:flex-row items-left justify-left xxs:px-6 tablet:px-8 tablet:pt-0 tablet:pb-8">
              <p className="text-xs font-extralight text-neutral-300">Created by</p>
              <a
                className="text-xs font-bold text-neutral-300"
                href="https://www.ioten.io"
                target="_blank"
                title="autor strony"
                rel="noopener noreferrer">
                <div className="flex">
                  <div className="relative w-[70px]">
                    <Image
                      src={iotenWhiteLogo}
                      priority
                      layout="fill"
                      objectFit="contain"
                      quality={65}
                      alt="ioten, autor strony"
                    />
                  </div>
                  ioten.io
                </div>
              </a>
            </div>
          </aside>
        </>
      ) : (
        <aside className="font-redHat">
          <Copyrights white />
          <div className="flex px-4 pt-2 pb-4 w-full h-full bg-white items-left justify-left xxs:px-6 tablet:px-8 tablet:pt-0 tablet:pb-8">
            <p className="text-xs font-extralight text-neutral-300">Created by</p>
            <a href="https://www.ioten.io" target="_blank" title="autor strony" rel="noopener noreferrer">
              <div className="flex">
                <div className="relative w-[70px] h-[16px]">
                  <Image
                    src={iotenWhiteLogo}
                    priority
                    layout="fill"
                    objectFit="contain"
                    alt="ioten, autor strony internetowej pulire"
                  />
                </div>
                <p className="text-xs font-bold text-neutral-300">ioten.io</p>
              </div>
            </a>
          </div>
        </aside>
      )}
    </footer>
  );
};

export default forwardRef(Footer);
