import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FaCheck } from 'react-icons/fa';
import useMobileNav from 'hooks/useMobileNav';
import ButtonReserve from './ButtonReserve';
import ButtonMoreOrLess from './ButtonMoreOrLess';

const Offer = ({ offer }) => {
  const [isOpened, setIsOpened] = useState(false);

  const { isDesktop } = useMobileNav();

  return (
    <article
      key={offer.uuid}
      className="flex p-6 my-8 w-full rounded-lg text-sm bg-white shadow-lg hover:shadow-custom-1 lg:hover:scale-[1.004]">
      <div className="lg:w-1/2 mr-10">
        <div className="flex items-center mb-5">
          <div className="m-3 animate-none hover:animate-shake">{offer.icon}</div>
          <h3 className="ml-4 text-base font-semibold text-left">{offer.title}</h3>
        </div>
        <div className="mb-8 leading-8 text-justify">
          <p>{isOpened ? offer.description : offer.shortDescription}</p>
        </div>
        {isOpened && !isDesktop ? <div className="w-full mb-8 h-[200px] bg-green-200">img</div> : null}
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
      {isDesktop ? <div className="w-1/2 min-h-full bg-green-200">img</div> : null}
    </article>
  );
};

export default Offer;
