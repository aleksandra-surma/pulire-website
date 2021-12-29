import { useEffect, useState } from 'react';
import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import contactData from 'data/contact';
import navButtonsData from 'data/buttons';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import { Icon } from '@iconify/react';
import useMobileNav from 'hooks/useMobileNav';
import ContactForm from 'components/ContactForm/ContactForm';

const initialIsCopiedState = { email: false, phoneNumber: false };

const Contact = () => {
  const [isCopied, setIsCopied] = useState(initialIsCopiedState);

  const { companyName, shortDescription, contactText: rawContactText, phoneNumber, email } = contactData;
  const contactPath = navButtonsData.contact.path;
  const { isDesktop } = useMobileNav();

  const contactText = addNonBreakableSpaces(rawContactText);

  const handleCopyContent = (text, copyCategory) => {
    if (isCopied[copyCategory] === true) {
      console.log('double copied');
      return;
    }

    navigator.clipboard.writeText(text);
    setIsCopied({ ...isCopied, [copyCategory]: true });

    setTimeout(() => {
      setIsCopied(initialIsCopiedState);
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Pulire - kontakt</title>
      </Head>
      <BaseLayout currentPageUrl={contactPath}>
        <section className="flex flex-col text-justify lg:w-1/2 font-redHat">
          {/* from lg */}
          {isDesktop ? (
            <h2 className="pb-2 text-5xl font-bold font-redHat tracking-logo">{companyName.toUpperCase()}</h2>
          ) : null}
          <p className="pb-6 text-sm xxs:text-base">{shortDescription.toUpperCase()}</p>
          <p className="pb-6 text-sm leading-8 xxs:text-base">{contactText}</p>
          <div className="flex py-4">
            <Icon icon="bx:bxs-phone-call" width="24" height="24" className="mr-4" />
            <div className="flex relative justify-between items-center w-32 lg:w-48">
              <p>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </p>
              <button onClick={() => handleCopyContent(phoneNumber, 'phoneNumber')} type="button">
                <Icon className="text-gray-400" icon="ant-design:copy-outlined" hFlip vFlip />
              </button>
              {isCopied.phoneNumber ? (
                <div className="absolute w-full left-full ml-4">
                  <p className="text-sm text-gray-400">telefon skopiowany</p>
                </div>
              ) : null}
              {/* todo: verify if phone dialling after click works properly */}
            </div>
          </div>
          <div className="flex pb-4">
            <Icon icon="bx:bx-mail-send" width="24" height="24" className="mr-4" />
            <div className="flex relative justify-between items-center w-32 lg:w-48">
              <p>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
              <button onClick={() => handleCopyContent(email, 'email')} type="button">
                <Icon className="text-gray-400" icon="ant-design:copy-outlined" hFlip vFlip />
              </button>
              {isCopied.email ? (
                <div className="absolute w-full left-full ml-4">
                  <p className="text-sm text-gray-400">email skopiowany</p>
                </div>
              ) : null}
            </div>
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
