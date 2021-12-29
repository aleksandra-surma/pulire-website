import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().min(5).max(50).required(),
  message: Joi.string().min(3).required(),
});

const validate = async (payload) => {
  const validateFormContent = await schema.validateAsync(payload);

  console.log('validateFormContent:', validateFormContent);

  return validateFormContent;
};

export default validate;
