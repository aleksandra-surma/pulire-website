import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FaCheck } from 'react-icons/fa';
import useMobileNav from 'hooks/useMobileNav';
import Image from 'next/image';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import ButtonReserve from './ButtonReserve';
import ButtonMoreOrLess from './ButtonMoreOrLess';

const Offer = ({ offer }) => {
  const [isOpened, setIsOpened] = useState(false);

  const { isDesktop } = useMobileNav();

  const { description: rawDescription, shortDescription: rawShortDescription } = offer;

  const description = addNonBreakableSpaces(rawDescription);
  const shortDescription = addNonBreakableSpaces(rawShortDescription);

  return (
    <article
      key={offer.uuid}
      className="flex p-6 my-8 w-full rounded-lg text-sm lg:text-base lg:min-h-[300px] bg-white shadow-lg hover:shadow-custom-1 lg:hover:scale-[1.004]">
      <div className="lg:w-1/2 lg:mr-10">
        <div className="flex items-center mb-5">
          <div className="m-3 animate-none hover:animate-shake">{offer.icon}</div>
          <h3 className="ml-4 text-base font-semibold text-left">{offer.title}</h3>
        </div>
        <div className="mb-8 leading-8 text-left xxs:text-justify">
          <p>{isOpened ? description : shortDescription}</p>
        </div>
        {isOpened && !isDesktop ? (
          <div className="py-8 lg:p-8 lg:w-1/2 lg:py-16">
            <Image src={offer.offerUrl} alt="Serwetki z logiem pulire" />
          </div>
        ) : null}
        {isOpened && offer.offerChecklist ? (
          <>
            {offer.offerChecklistTitle ? <h4 className="pb-2">{offer.offerChecklistTitle}</h4> : null}
            <ul className="pb-8">
              {offer.offerChecklist.map((item) => {
                return (
                  <li className="flex items-center py-2" key={uuid()}>
                    <FaCheck className="mr-4 text-green-600" />
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}
        <ButtonMoreOrLess isOpened={isOpened} setIsOpened={setIsOpened} />
        {isOpened ? <ButtonReserve /> : null}
      </div>
      {isDesktop ? (
        <div className="relative w-1/2 min-h-full bg-blue-100">
          <Image
            src={offer.offerUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            alt={offer.offerImageAlt}
          />
        </div>
      ) : null}
    </article>
  );
};

export default Offer;
