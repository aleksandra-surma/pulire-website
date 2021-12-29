import { formData } from 'data/contact';
import { useState } from 'react';

const ErrorCommunique = ({ error }) => {
  const { message, type } = error;
  const [currentFieldIndex, setCurrentFieldIndex] = useState(null);

  formData.formFields.some((formField, index) => {
    console.log(message.includes(formField));
    if (message.includes(formField)) {
      setCurrentFieldIndex(index);
    }
    return message.includes(formField);
  });

  // console.log('ErrorCommunique', formData.errors[formData.formFields[currentFieldIndex]]);

  return (
    <div className="p-4 text-white bg-red-500 rounded-md">
      {/* {formData.errors[formData.formFields[currentFieldIndex]][type]} */}
      {formData.errors.name['string.min']}
    </div>
  );
};

export default ErrorCommunique;

// errors: {
//   name: {
//     min: 'W pierwszym polu użyto zbyt krótkiej nazwy (min. 3 znaki).',
//       max: 'W pierwszym polu użyto zbyt długiej nazwy (max. 40 znaków)',
//   },
//   email: 'e-mail',
//     message: 'treść wiadomości',
// },
