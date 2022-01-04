import { useState } from 'react';
import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import { contactData } from 'data/contact';
import navButtonsData from 'data/buttons';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import { Icon } from '@iconify/react';
import useMobileNav from 'hooks/useMobileNav';
import ContactForm from 'components/ContactForm/ContactForm';

const initialIsCopiedState = { email: false, phoneNumber: false };
const initialSetTimeoutIDs = { email: null, phoneNumber: null };

const Contact = () => {
  const [isCopied, setIsCopied] = useState(initialIsCopiedState);
  const [timeoutIDs, setTimeoutIDs] = useState(initialSetTimeoutIDs);
  const { isDesktop } = useMobileNav();

  const { companyName, shortDescription, contactText: rawContactText, phoneNumber, email } = contactData;
  const contactPath = navButtonsData.contact.path;

  const contactText = addNonBreakableSpaces(rawContactText);

  const handleCopyContent = (text, copyCategory) => {
    // double-click on the same field
    if (isCopied[copyCategory] === true) {
      return;
    }

    navigator.clipboard.writeText(text);
    setIsCopied({ ...initialIsCopiedState, [copyCategory]: true });

    const timeoutID = setTimeout(() => {
      setIsCopied(initialIsCopiedState);
    }, 3000);

    clearTimeout(timeoutIDs?.email);
    clearTimeout(timeoutIDs?.phoneNumber);

    setTimeoutIDs({ ...timeoutIDs, [copyCategory]: timeoutID });
  };

  return (
    <>
      <Head>
        <title>Pulire - kontakt</title>
      </Head>
      <BaseLayout currentPageUrl={contactPath}>
        <section className="flex flex-col lg:justify-center text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)] lg:w-2/5 font-redHat">
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
                <Icon className="text-neutral-400" icon="ant-design:copy-outlined" hFlip vFlip />
              </button>
              {isCopied.phoneNumber ? (
                <div className="absolute w-full left-full ml-4">
                  <p className="text-sm text-neutral-400">telefon skopiowany</p>
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
                <Icon className="text-neutral-400" icon="ant-design:copy-outlined" hFlip vFlip />
              </button>
              {isCopied.email ? (
                <div className="absolute w-full left-full ml-4">
                  <p className="text-sm text-neutral-400">email skopiowany</p>
                </div>
              ) : null}
            </div>
          </div>
          <ContactForm />
        </section>
        <div className="bg-neutral-100 w-full min-h-[400px] lg:w-1/2 lg:m-10 text-neutral-100">.</div>
      </BaseLayout>
    </>
  );
};

export default Contact;
