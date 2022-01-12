import { v4 as uuid } from 'uuid';
import useMobileNav from 'hooks/useMobileNav';
import { offersData } from 'data/offers';
import Image from 'next/image';
import home from '../../data/home';

export default function HomeOffer() {
  const { isDesktop } = useMobileNav();

  const {
    offers,
    homeOffersShort: { heading, description },
  } = offersData;

  return (
    <section className="relative flex flex-col-reverse mb-20 leading-8 lg:flex-row">
      <div className="relative lg:sticky top-[150px] flex mx-20 my-20 justify-center w-1/2 h-[calc(100vh-260px)]">
        <Image src={home.homeOfferUrl} priority layout="fill" objectFit="contain" alt="pociągnięcie czarną farbą" />
      </div>
      <div className="flex flex-col justify-center lg:p-14 lg:w-3/5 min-h-[calc(100vh-80px)]  tallMobile:min-h-[80vh]">
        <div className="mb-10">
          <h3 className="pb-8 text-3xl font-semibold text-left">{heading}</h3>
          <p className="text-justify">{description}</p>
        </div>
        <ul>
          {offers.map(({ title, icon, homeOfferDescription }) => {
            return (
              <li key={uuid()} className="flex mb-12">
                {isDesktop ? <div className="mr-4 text-justify">{icon}</div> : null}
                <div>
                  <h4 className="flex items-center h-[40px] font-semibold text-xl mb-4">{title}</h4>
                  <p className="text-justify">{homeOfferDescription}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
