import { formData } from 'data/contact';
import { useRef, useState } from 'react';
import getPayload from 'utils/getPayload';
import ErrorCommunique from '../ErrorComunicate/ErrorComunicate';

const formValueInitialState = {
  name: '',
  email: '',
  message: '',
};

const errorInitialState = {
  label: '',
  message: '',
  type: '',
};

const ContactForm = () => {
  const offerForm = useRef();
  const [error, setError] = useState(errorInitialState);

  const {
    contactFormPlaceholders: { name, email, message },
  } = formData;

  const [formValues, setFormValues] = useState(formValueInitialState);

  const handleOnChange = (event, formField) => {
    const text = event.target.value;

    setFormValues({ ...formValues, [formField]: text });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setResponseState(null);
    // if (formProcessing) return;
    // setFormProcessing(true);

    const payload = await getPayload(offerForm.current);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response?.ok) {
      setError(errorInitialState);
      // setFormValues(formValueInitialState); todo: cleanning after sent contact form content
    } else if (!response?.ok) {
      console.log('response FAILED :(');
      const payloadError = response?.clone().json();
      payloadError?.then((errorFulfilled) => {
        setError((prevState) => {
          return {
            ...prevState,
            label: errorFulfilled?.payloadError?.label,
            message: errorFulfilled?.payloadError?.message,
            type: errorFulfilled?.payloadError?.type,
          };
        });
      });
      // setFormProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-10" ref={offerForm}>
      <div className="pb-8">
        <input
          placeholder={name}
          id="name"
          name="name"
          type="text"
          className="pl-10 w-full h-8 text-gray-800 border-b-2 border-l-2 border-gray-300 outline-none autofill:bg-yellow-200 invalid:hover:border-red-500 valid:hover:border-green-500"
          required
          value={formValues.name}
          onChange={(e) => handleOnChange(e, 'name')}
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
          onChange={(e) => handleOnChange(e, 'email')}
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
          onChange={(e) => handleOnChange(e, 'message')}
        />
      </div>
      {error?.label ? <ErrorCommunique error={error} /> : null}

      <button
        type="submit"
        className="px-4 py-3 mt-5 w-full text-lg font-bold text-white bg-gray-800 rounded-md disabled:opacity-60 lg:w-60 hover:bg-gray-700">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
