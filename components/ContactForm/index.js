import { formData } from 'data/contact';
import ErrorCommunique from 'components/ContactForm/ErrorComunicate';
import SendConfirmation from 'components/ContactForm/SendConfirmation';
import useFormState from 'hooks/useFormState';
import { useRef } from 'react';
import { handleSubmit } from 'helpers/form';
import ButtonFormSubmit from './ButtonFormSubmit';
import { InputTextArea, InputTextField } from './InputField';

const ContactForm = () => {
  const formState = useFormState();
  const offerFormRef = useRef();

  const { error, isMessageSend } = formState;

  const { policyMessage } = formData;

  return (
    <form onSubmit={(e) => handleSubmit(e, formState, offerFormRef)} className="pt-10" ref={offerFormRef}>
      <InputTextField name="name" type="text" required />
      <InputTextField name="email" type="email" required />
      <InputTextArea name="message" required />

      {error?.label ? <ErrorCommunique error={error} /> : null}
      {isMessageSend ? <SendConfirmation /> : null}
      <ButtonFormSubmit />
      <p className="pt-6 text-xs text-neutral-600">{policyMessage}</p>
    </form>
  );
};

export default ContactForm;
