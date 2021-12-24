import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import contactData from 'data/contact';
import navButtonsData from '../../data/buttons';

const Contact = () => {
  const { companyName, shortDescription, contactText, phoneNumber, email } = contactData;
  const contactPath = navButtonsData.contact.path;

  return (
    <>
      <Head>
        <title>Pulire - kontakt</title>
      </Head>
      <BaseLayout currentPageUrl={contactPath}>
        <section>
          <h2>{companyName.toUpperCase()}</h2>
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
