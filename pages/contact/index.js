import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import contactData from 'data/contact';
import navButtonsData from 'data/buttons';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import { Icon } from '@iconify/react';

const Contact = () => {
  const { companyName, shortDescription, contactText: rawContactText, phoneNumber, email } = contactData;
  const contactPath = navButtonsData.contact.path;

  const contactText = addNonBreakableSpaces(rawContactText);

  return (
    <>
      <Head>
        <title>Pulire - kontakt</title>
      </Head>
      <BaseLayout currentPageUrl={contactPath}>
        <section className="flex flex-col text-justify lg:w-1/2 font-redHat">
          {/* from lg */}
          <h2 className="pb-2 text-5xl font-bold font-redHat tracking-logo">{companyName.toUpperCase()}</h2>
          <p>{shortDescription.toUpperCase()}</p>
          <p>{contactText}</p>
          <div className="flex">
            <Icon icon="bx:bxs-phone-call" width="24" height="24" className="mr-4" />
            <p>{phoneNumber}</p>
          </div>
          <div className="flex">
            <Icon icon="bx:bx-mail-send" width="24" height="24" className="mr-4" />
            <p>{email}</p>
          </div>
          {/* contact form */}
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
