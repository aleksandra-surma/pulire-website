import { useMedia } from 'use-media';
import home from 'data/home';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import { useEffect, useState } from 'react';

export default function HomeIntro() {
  const [description, setDescription] = useState('');
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
    <section className="flex flex-col w-full leading-8 text-justify lg:flex-row lg:items-center lg:justify-between font-redHat">
      <div className="flex flex-col justify-center lg:p-14 lg:w-1/2 min-h-[calc(100vh-80px)]  tallMobile:min-h-[80vh]">
        <h2 className="pb-8 text-3xl text-left font-semibold">{title}</h2>
        <p className="">{description}</p>
      </div>
      <div className="bg-green-100 w-full min-h-[400px] lg:w-1/2 lg:ml-10 lg:py-10 lg:h-full">HomeIntro - img</div>
    </section>
  );
}
