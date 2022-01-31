import { v4 as uuid } from 'uuid';
import useMobileNav from 'hooks/useMobileNav';
import { offersData } from 'data/offers';
import Image from 'next/image';
import home from 'data/home';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';

export default function HomeOffer() {
  const { isDesktop } = useMobileNav();

  const {
    offers,
    homeOffersShort: { heading },
  } = offersData;

  return (
    <section className="flex relative flex-col-reverse mt-20 leading-8 lg:flex-row">
      <div className="relative self-center lg:self-auto lg:sticky lg:top-[150px] flex mx-20 mb-12 justify-center w-1/2 h-[400px] lg:h-[calc(100vh-260px)] tabletTall:my-16">
        <Image
          src={home.homeOfferUrl}
          layout="fill"
          objectFit="contain"
          quality={70}
          sizes="(min-width: 1200px) 60vw, (min-width: 0px) 30vw"
          alt="płyn do mycia szyb w czarnej butelce"
        />
      </div>
      <div className="flex flex-col justify-center lg:p-14 lg:w-3/5 min-h-[calc(100vh-80px)] tallMobile:min-h-[80vh]">
        <div className="mb-4">
          <h3 className="pb-8 text-3xl font-semibold text-left">{heading}</h3>
        </div>
        <ul>
          {offers.map(({ title, icon, homeOfferDescription: rawHomeOfferDescription }) => {
            const homeOfferDescription = addNonBreakableSpaces(rawHomeOfferDescription);

            return (
              <li key={uuid()} data-aos="fade-left" className="flex mb-12">
                {isDesktop ? <div className="mr-4 text-justify">{icon}</div> : null}
                <div>
                  <h4 className="flex items-center h-[40px] font-semibold text-xl mb-4">{title}</h4>
                  <p className="text-left xxs:text-justify">{homeOfferDescription}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
