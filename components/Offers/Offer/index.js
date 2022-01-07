import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FaCheck } from 'react-icons/fa';
import ButtonReserve from './ButtonReserve';
import ButtonMoreOrLess from './ButtonMoreOrLess';

const Offer = ({ offer }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <article key={offer.uuid} className="p-4 py-5 my-8 w-full text-sm border-2">
      <div className="flex items-center mb-5">
        <div className="m-3">{offer.icon}</div>
        <h3 className="ml-4 text-base font-semibold text-left">{offer.title}</h3>
      </div>
      <div className="mb-8 leading-8 text-justify">
        <p>{isOpened ? offer.description : offer.shortDescription}</p>
      </div>
      {isOpened ? <div className="w-full mb-8 h-[200px] bg-green-200">img</div> : null}
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
    </article>
  );
};

export default Offer;
