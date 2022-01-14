import validate from 'services/contactForm/validate';
import sendMessageToPulire from 'services/contactForm/sendMessageToPulire';
import axios from 'axios';

export default async (req, res) => {
  switch (req.method) {
    case 'POST': {
      try {
        const { payload, captchaToken } = req.body;

        const recaptchaResponse = await axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${captchaToken}`,
        );

        const isRecaptchaValid = recaptchaResponse.data.success;

        const { name, email, message } = await validate({ ...payload, isRecaptchaValid });

        await sendMessageToPulire(name, email, message);

        res.status(200).json({ status: 'payload_sent' });
      } catch (error) {
        if (error.details) {
          const payloadError = {
            label: error.details[0].context.label,
            message: error.details[0].message,
            type: error.details[0].type,
          };

          res.status(422).json({ status: 'not_created', payloadError });
        }
        res.status(422).json({ status: 'not_created', error });
      }

      break;
    }
    default:
      res.status(400);
  }
};
