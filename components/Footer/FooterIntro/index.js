import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { contactData } from 'data/contact';
import home from 'data/home';
import { PageContext } from 'data/pageContext';
import MoreInfo from 'components/MoreInfo';
import paths from 'data/paths';

const FooterIntro = () => {
  const { currentPage: pathnameUrl } = useContext(PageContext);

  return (
    <article className="footer__intro md:w-1/3 xl:w-1/4 mb-20 md:mb-0">
      <h2 className="pb-4 text-3xl laptop:text-4xl font-bold font-redHat tracking-logo">
        {contactData.companyName.toUpperCase()}
      </h2>
      <div className="">
        {home.shortDescription.map((paragraph) => (
          <p key={uuid()} className="py-2 text-justify font-extralight">
            {paragraph}
          </p>
        ))}
      </div>
      {pathnameUrl !== paths.home ? <MoreInfo directionPage={paths.home} /> : null}
    </article>
  );
};

export default FooterIntro;
