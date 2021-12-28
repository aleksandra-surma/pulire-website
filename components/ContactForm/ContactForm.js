import contactData from 'data/contact';
import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const {
    contactFormPlaceholders: { name, email, message },
  } = contactData;

  const [formValues, setFormValues] = useState(initialState);

  const handleOnChange = (event, formField) => {
    const text = event.target.value;

    setFormValues({ ...formValues, [formField]: text });
  };

  return (
    <form className="pt-10">
      <div className="pb-8">
        <input
          placeholder={name}
          id="name"
          type="text"
          autoComplete="on"
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
          type="email"
          autoComplete="on"
          className="pl-10 w-full h-8 text-gray-800 border-b-2 border-l-2 border-gray-300 outline-none autofill:text-bold invalid:hover:border-red-500 valid:hover:border-green-500"
          aria-describedby="email"
          required
          value={formValues.email}
          onChange={(e) => handleOnChange(e, 'email')}
        />
      </div>
      <div className="pb-8">
        <textarea
          placeholder={message}
          id="message"
          className="pl-10 w-full h-32 text-gray-800 border-b-2 border-l-2 border-gray-300 outline-none resize-y invalid:hover:border-red-500 valid:hover:border-green-500"
          required
          value={formValues.message}
          onChange={(e) => handleOnChange(e, 'message')}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-3 mt-4 w-full text-lg font-bold text-white bg-gray-800 rounded-md lg:w-60 hover:bg-gray-700">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
