import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { PageContext } from 'data/pageContext';
import MoreInfo from 'components/MoreInfo';
import paths from 'data/paths';
import { Icon } from '@iconify/react';
import { offersData } from 'data/offers';

const FooterOffers = () => {
  const { currentPage: pathnameUrl } = useContext(PageContext);

  return (
    <article className="footer__offers md:w-3/10 mb-20 md:mb-0 pr-4">
      <h2 className="pb-4 text-3xl laptop:text-4xl font-bold font-redHat tracking-logo">{offersData.title}</h2>
      <ul className="">
        {offersData.offers.map(({ title }) => (
          <li key={uuid()} className="flex py-2">
            <Icon icon="bi:check-lg" width="24" height="24" className="mr-4 text-green-400" />
            <p className="font-extralight">{title}</p>
          </li>
        ))}
      </ul>
      {pathnameUrl !== paths.offer ? <MoreInfo directionPage={paths.offer} /> : null}
    </article>
  );
};

export default FooterOffers;
