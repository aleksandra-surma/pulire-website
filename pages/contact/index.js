import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import contactData from 'data/contact';
import navButtonsData from 'data/buttons';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import { Icon } from '@iconify/react';
import useMobileNav from 'hooks/useMobileNav';
import ContactForm from 'components/ContactForm/ContactForm';

const Contact = () => {
  const { companyName, shortDescription, contactText: rawContactText, phoneNumber, email } = contactData;
  const contactPath = navButtonsData.contact.path;
  const { isHamburger } = useMobileNav();

  const contactText = addNonBreakableSpaces(rawContactText);

  return (
    <>
      <Head>
        <title>Pulire - kontakt</title>
      </Head>
      <BaseLayout currentPageUrl={contactPath}>
        <section className="flex flex-col text-justify lg:w-1/2 font-redHat">
          {/* from lg */}
          {!isHamburger ? (
            <h2 className="pb-2 text-5xl font-bold font-redHat tracking-logo">{companyName.toUpperCase()}</h2>
          ) : null}
          <p className="pb-6 text-sm xxs:text-base">{shortDescription.toUpperCase()}</p>
          <p className="pb-6 text-sm xxs:text-base">{contactText}</p>
          <div className="flex py-2 ">
            <Icon icon="bx:bxs-phone-call" width="24" height="24" className="mr-4" />
            <p>{phoneNumber}</p>
          </div>
          <div className="flex py-2">
            <Icon icon="bx:bx-mail-send" width="24" height="24" className="mr-4" />
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <ContactForm />
        </section>
      </BaseLayout>
    </>
  );
};

export default Contact;

// companyName: 'Pulire',
//   shortDescription: 'Kompleksowe sprzątanie obiektów',
//   contactText:
// 'Masz pytanie, chcesz otrzymać wycenę albo nawiązać współpracę? Skontaktuj się z nami za pomocą telefonu, maila albo formularza kontaktowego.',
//   phoneNumber: '535 412 571',
//   email: 'info@pulire.co',
