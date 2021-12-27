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
    <div>
      <form>
        <div className="col-md-6">
          <input
            placeholder={name}
            id="name"
            type="text"
            className="form-control"
            required
            value={formValues.name}
            onChange={(e) => handleOnChange(e, 'name')}
          />
        </div>
        <div className="col-md-6">
          <input
            placeholder={email}
            id="email"
            type="email"
            className="form-control"
            aria-describedby="email"
            required
            value={formValues.email}
            onChange={(e) => handleOnChange(e, 'email')}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder={message}
            id="message"
            className="form-control"
            required
            value={formValues.message}
            onChange={(e) => handleOnChange(e, 'message')}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 w-full font-bold text-white bg-gray-800 rounded-md lg:w-60 hover:bg-gray-700">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
