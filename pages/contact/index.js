import { useState } from 'react';
import BaseLayout from 'components/BaseLayout';
import { contactData } from 'data/contact';
import { navButtonsData } from 'data/buttons';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import { Icon } from '@iconify/react';
import useMobileNav from 'hooks/useMobileNav';
import ContactForm from 'components/ContactForm';
import Title from 'components/Title';
import Image from 'next/image';
import head from 'data/head';
import HeadSection from 'components/HeadSection';

const initialIsCopiedState = { email: false, phoneNumber: false };
const initialSetTimeoutIDs = { email: null, phoneNumber: null };

const Contact = () => {
  const [isCopied, setIsCopied] = useState(initialIsCopiedState);
  const [timeoutIDs, setTimeoutIDs] = useState(initialSetTimeoutIDs);
  const { isDesktop } = useMobileNav();

  const { companyName, shortDescription, contactText: rawContactText, phoneNumber, email, offerUrl } = contactData;
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
      <HeadSection title={head.contact.title} description={head.contact.description} ogData={contactData.ogData} />
      <BaseLayout currentPageUrl={contactPath}>
        <section className="flex flex-col lg:flex-row lg:justify-between text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)] font-redHat">
          <div className="lg:w-2/5">
            {isDesktop ? <Title title={companyName.toUpperCase()} /> : null}
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
            <div className="flex pb-6">
              <Icon icon="fa-brands:facebook-square" width="24" height="24" className="mr-4" />
              <p>
                <a href={contactData.socialMedia.facebook.address}>{contactData.socialMedia.facebook.label}</a>
              </p>
            </div>
            <div className="flex">
              <Icon icon="cib:instagram" width="22" height="22" className="mr-4" />
              <p>
                <a href={contactData.socialMedia.instagram.address}>{contactData.socialMedia.instagram.label}</a>
              </p>
            </div>
            <ContactForm />
          </div>
          {isDesktop ? (
            <div className="relative flex justify-center w-1/2 h-[calc(100vh-160px)]">
              <Image priority src={offerUrl} layout="fill" objectFit="contain" alt="pociągnięcie czarną farbą" />
            </div>
          ) : null}
        </section>
      </BaseLayout>
    </>
  );
};

export default Contact;
