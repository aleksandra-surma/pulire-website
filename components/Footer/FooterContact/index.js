import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { contactData } from 'data/contact';
import { PageContext } from 'data/pageContext';
import MoreInfo from 'components/MoreInfo';
import paths from 'data/paths';

const FooterContact = () => {
  const { currentPage: pathnameUrl } = useContext(PageContext);

  return (
    <article className="flex flex-col pb-10 footer__contact md:w-1/5">
      <h2 className="pb-4 text-3xl laptop:text-4xl font-bold font-redHat tracking-logo">{contactData.title}</h2>
      <div className="flex pt-6">
        <Icon icon="bx:bxs-phone-call" width="24" height="24" className="mr-4" />
        <p>
          <a href={`tel:${contactData.phoneNumber}`}>{contactData.phoneNumber}</a>
        </p>
      </div>
      <div className="flex pt-6">
        <Icon icon="bx:bx-mail-send" width="24" height="24" className="mr-4" />
        <p>
          <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
        </p>
      </div>
      <div className="flex pt-6">
        <Icon icon="fa-brands:facebook-square" width="24" height="24" className="mr-4" />
        <p>
          <a href={contactData.socialMedia.facebook.address} target="_blank" rel="noopener noreferrer">
            {contactData.socialMedia.facebook.label}
          </a>
        </p>
      </div>
      <div className="flex py-6">
        <Icon icon="cib:instagram" width="24" height="24" className="mr-4" />
        <p>
          <a href={contactData.socialMedia.instagram.address} target="_blank" rel="noopener noreferrer">
            {contactData.socialMedia.instagram.label}
          </a>
        </p>
      </div>

      {pathnameUrl !== paths.contact ? <MoreInfo directionPage={paths.contact} /> : null}
    </article>
  );
};

export default FooterContact;
