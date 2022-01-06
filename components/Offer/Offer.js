import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Offer = ({ offer }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <article key={offer.uuid} className="p-4 py-5 my-8 w-full border-2 text-sm">
      <div className="flex mb-5 items-center">
        <div className="m-3">{offer.icon}</div>
        <h3 className="font-semibold  ml-4 text-left text-base">{offer.title}</h3>
      </div>
      <div className="mb-8 text-justify leading-8">
        <p>{isOpened ? offer.description : offer.shortDescription}</p>
      </div>
      {isOpened ? <div className="w-full mb-8 h-[200px] bg-green-200">img</div> : null}
      {isOpened && offer.offerChecklist ? (
        <>
          {offer.offerChecklistTitle ? <h4 className="pb-2 ">{offer.offerChecklistTitle}</h4> : null}
          <ul className="pb-8">
            {offer.offerChecklist.map((item) => {
              return (
                <li className="flex items-center py-2" key={uuid()}>
                  <FaCheck className="text-green-600 mr-4" />
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
      <button type="button" className="text-base" onClick={() => setIsOpened((prevVal) => !prevVal)}>
        {isOpened ? 'mniej info...' : 'więcej...'}
      </button>
      {isOpened ? (
        <button
          className="px-4 py-3 mt-8 w-full text-lg font-bold text-white bg-green-500 rounded-md disabled:opacity-60 lg:w-60 hover:bg-green-600"
          type="button">
          Rezerwuję
        </button>
      ) : null}
    </article>
  );
};

export default Offer;
