import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import contactData from 'data/contact';
import navButtonsData from 'data/buttons';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';

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
        <section className="lg:w-1/2 flex flex-col">
          {/* from lg */}
          <h2 className="text-5xl font-redHat tracking-logo font-bold pb-2">{companyName.toUpperCase()}</h2>
          <p>{shortDescription.toUpperCase()}</p>
          <p>{contactText}</p>
          <div>
            <p>{phoneNumber}</p>
          </div>
          <div>
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
