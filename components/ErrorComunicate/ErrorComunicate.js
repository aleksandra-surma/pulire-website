import { formData } from 'data/contact';
import { useState } from 'react';
import Joi from 'joi';

const ErrorCommunique = ({ error }) => {
  console.log('error', error);
  // const { message, type } = error;
  // const [currentFieldIndex, setCurrentFieldIndex] = useState(null);

  // formData.formFields.some((formField, index) => {
  //   // console.log(message.includes(formField));
  //   if (message.includes(formField)) {
  //     setCurrentFieldIndex(index);
  //   }
  //   return message.includes(formField);
  // });

  // console.log('ErrorCommunique', formData.errors[formData.formFields[currentFieldIndex]]);

  const errorMessage = formData.errors[error.label][error.type];

  return (
    <div className="p-4 text-white bg-red-500 rounded-md">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorCommunique;
// const schema = Joi.object({
//   name: Joi.string().min(3).max(40).required(),
//   email: Joi.string().email().min(5).max(50).required(),
//   message: Joi.string().min(3).max(2000).required(),
// });

// errors: {
//   name: {
//     min: 'W pierwszym polu użyto zbyt krótkiej nazwy (min. 3 znaki).',
//     max: 'W pierwszym polu użyto zbyt długiej nazwy (max. 40 znaków)',
//   },
//   email: 'e-mail',
//     message: 'treść wiadomości',
// },
