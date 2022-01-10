import { handleOnChange } from 'helpers/form';
import { formData } from 'data/contact';
import useFormState from 'hooks/useFormState';

export const InputTextField = ({ name, type, required }) => {
  const formState = useFormState();
  const fieldValue = formState.formValues[name];

  const { contactFormPlaceholders } = formData;

  return (
    <input
      placeholder={contactFormPlaceholders[name]}
      id={name}
      name={name}
      type={type}
      required={required}
      className="pl-10 mb-8 w-full h-8 border-b-2 border-l-2 outline-none text-neutral-800 border-neutral-300 invalid:hover:border-red-500 valid:hover:border-green-500"
      value={fieldValue}
      onChange={(e) => handleOnChange(e, name, formState)}
    />
  );
};

export const InputTextArea = ({ name, required }) => {
  const formState = useFormState();
  const fieldValue = formState.formValues[name];

  const {
    contactFormPlaceholders: { message },
  } = formData;

  return (
    <textarea
      placeholder={message}
      id={name}
      name={name}
      required={required}
      className="pl-10 mb-5 w-full h-32 border-b-2 border-l-2 outline-none resize-y text-neutral-800 border-neutral-300 invalid:hover:border-red-500 valid:hover:border-green-500"
      value={fieldValue}
      onChange={(e) => handleOnChange(e, 'message', formState)}
    />
  );
};
