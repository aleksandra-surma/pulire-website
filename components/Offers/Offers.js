import offersData from '../../data/offers';
import Offer from '../Offer/Offer';

const Offers = () => {
  return (
    <div>
      {offersData.offers.map((offer) => {
        return <Offer key={offer.uuid} offer={offer} />;
      })}
    </div>
  );
};

export default Offers;
