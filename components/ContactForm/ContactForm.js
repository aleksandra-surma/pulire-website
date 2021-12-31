import { formData } from 'data/contact';
import ErrorCommunique from 'components/ErrorComunicate/ErrorComunicate';
import SendConfirmation from 'components/SendConfirmation/SendConfirmation';
import useFormState from 'hooks/useFormState';
import { useRef } from 'react';
import { handleOnChange, handleSubmit } from '../helpers/form';

const ContactForm = () => {
  const formState = useFormState();
  const offerFormRef = useRef();

  const { formValues, error, isMessageSend } = formState;

  const {
    contactFormPlaceholders: { name, email, message },
  } = formData;

  return (
    <form onSubmit={(e) => handleSubmit(e, formState, offerFormRef)} className="pt-10" ref={offerFormRef}>
      <div className="pb-8">
        <input
          placeholder={name}
          id="name"
          name="name"
          type="text"
          className="pl-10 w-full h-8 text-gray-800 border-b-2 border-l-2 border-gray-300 outline-none autofill:bg-yellow-200 invalid:hover:border-red-500 valid:hover:border-green-500"
          required
          value={formValues.name}
          onChange={(e) => handleOnChange(e, 'name', formState)}
        />
      </div>
      <div className="pb-8">
        <input
          placeholder={email}
          id="email"
          name="email"
          type="email"
          className="pl-10 w-full h-8 text-gray-800 border-b-2 border-l-2 border-gray-300 outline-none autofill:text-bold invalid:hover:border-red-500 valid:hover:border-green-500"
          aria-describedby="email"
          required
          value={formValues.email}
          onChange={(e) => handleOnChange(e, 'email', formState)}
        />
      </div>
      <div className="pb-5">
        <textarea
          placeholder={message}
          id="message"
          name="message"
          className="pl-10 w-full h-32 text-gray-800 border-b-2 border-l-2 border-gray-300 outline-none resize-y invalid:hover:border-red-500 valid:hover:border-green-500"
          required
          value={formValues.message}
          onChange={(e) => handleOnChange(e, 'message', formState)}
        />
      </div>
      {error?.label ? <ErrorCommunique error={error} /> : null}
      {isMessageSend ? <SendConfirmation /> : null}

      <button
        type="submit"
        className="px-4 py-3 mt-5 w-full text-lg font-bold text-white bg-gray-800 rounded-md disabled:opacity-60 lg:w-60 hover:bg-gray-700">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
