import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().min(6).max(60).required(),
  message: Joi.string().min(3).max(2000).required(),
  isRecaptchaValid: true,
});

const validate = async (payload) => {
  const validateFormContent = await schema.validateAsync(payload);

  return validateFormContent;
};

export default validate;
