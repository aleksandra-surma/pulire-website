import { useMedia } from 'use-media';
import home from 'data/home';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useMobileNav from 'hooks/useMobileNav';

export default function HomeIntro() {
  const [description, setDescription] = useState('');
  const { isDesktop } = useMobileNav();

  const {
    homeIntro: {
      title,
      description: { mobile: mobileDescription, desktop: desktopDescription },
    },
  } = home;

  const isMobile = useMedia({ maxWidth: 767 });

  useEffect(() => {
    if (isMobile) {
      setDescription(addNonBreakableSpaces(mobileDescription));
    } else {
      setDescription(addNonBreakableSpaces(desktopDescription));
    }
  }, [isMobile]);

  return (
    <section className="flex flex-col-reverse w-full leading-8 lg:flex-row lg:items-start lg:justify-between font-redHat">
      <div className="flex flex-col justify-center lg:my-8 lg:my-0 lg:p-14 lg:w-1/2 lg:min-h-[calc(100vh-160px)]">
        <h2 className="pb-8 text-3xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="min-h-[calc(100vh-160px)] mb-[80px] relative flex justify-center w-[90vw] h-[calc(100vh-180px)] lg:mx-20 justify-center lg:w-2/5 lg:max-w-[700px]">
        <Image
          src={isDesktop ? home.homeUrlDesktop : home.homeUrl}
          priority
          layout="fill"
          objectFit="contain"
          quality={65}
          alt="czarna gąbka"
          sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh, (min-width: 0px) 50vw"
          unoptimized
        />
      </div>
    </section>
  );
}
