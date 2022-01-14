import { useMedia } from 'use-media';
import home from 'data/home';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useMobileNav from 'hooks/useMobileNav';
// import brushStroke from 'public/images/brush-stroke-home-01.jpeg';

export default function HomeIntro() {
  const [description, setDescription] = useState('');
  const { isDesktop } = useMobileNav();

  const {
    homeIntro: {
      title,
      description: { mobile: mobileDescription, desktop: desktopDescription },
    },
  } = home;

  const isMobile = useMedia({ maxWidth: 767 }); // todo: replace by isTablet

  useEffect(() => {
    if (isMobile) {
      setDescription(addNonBreakableSpaces(mobileDescription));
    } else {
      setDescription(addNonBreakableSpaces(desktopDescription));
    }
  }, [isMobile]);

  return (
    <section className="flex flex-col-reverse w-full leading-8 text-justify lg:flex-row lg:items-center lg:justify-between font-redHat">
      <div className="flex flex-col justify-center lg:p-14 lg:w-1/2 min-h-[calc(100vh-80px)] tallMobile:min-h-[80vh]">
        <h2 className="pb-8 text-3xl text-left font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
      {isDesktop ? (
        <div className="relative flex mx-20 justify-center w-2/5 h-[40vh] lg:h-[calc(100vh-160px)]">
          <Image src={home.homeUrl} priority layout="fill" objectFit="contain" alt="czarna gąbka" />
        </div>
      ) : (
        <div className="relative flex justify-center w-[90vw] h-[calc(100vh-80px)]">
          <Image src={home.homeUrl} priority layout="fill" objectFit="contain" alt="czarna gąbka" />
        </div>
      )}
      {/* {isDesktop ? ( */}
      {/*  <div className="absolute lg:top-[calc(100vh-180px)] lg:left-[-450px]"> */}
      {/*    <Image src={brushStroke} /> */}
      {/*  </div> */}
      {/* ) : null} */}
    </section>
  );
}
