import { formData } from 'data/contact';
import ErrorCommunique from 'components/ContactForm/ErrorComunicate';
import SendConfirmation from 'components/ContactForm/SendConfirmation';
import useFormState from 'hooks/useFormState';
import { useEffect, useRef, useState } from 'react';
import { handleSubmit } from 'helpers/form';
import ReCaptchaV2 from 'react-google-recaptcha';
import ButtonFormSubmit from './ButtonFormSubmit';
import { InputTextArea, InputTextField } from './InputField';

const ContactForm = () => {
  const formState = useFormState();
  const offerFormRef = useRef();
  const recaptchaRef = useRef();

  const { error, isMessageSend } = formState;

  const { policyMessage } = formData;

  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (isSending === true && isMessageSend) {
      setIsSending(false);
    }
  }, [isSending, isMessageSend]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e, formState, offerFormRef, recaptchaRef, setIsSending)}
      className="pt-10"
      ref={offerFormRef}>
      <InputTextField formState={formState} name="name" type="text" required />
      <InputTextField formState={formState} name="email" type="email" required />
      <InputTextArea formState={formState} name="message" required />

      {error?.label ? <ErrorCommunique error={error} /> : null}
      {isMessageSend ? <SendConfirmation /> : null}
      <ReCaptchaV2 ref={recaptchaRef} sitekey={process.env.SITE_KEY} />
      <ButtonFormSubmit isSending={isSending} />
      <p className="pt-6 text-xs text-neutral-600">{policyMessage}</p>
    </form>
  );
};

export default ContactForm;
