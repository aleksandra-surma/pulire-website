import validate from 'services/contactForm/validate';
import { sendMessageToPulire } from '../../../services/contactForm/sendMessageToPulire';

export default async (req, res) => {
  switch (req.method) {
    case 'POST': {
      try {
        const payload = req.body;

        const { name, email, message } = await validate(payload);

        await sendMessageToPulire(name, email, message);

        res.status(200).json({ status: 'payload_sent' });
      } catch (error) {
        const payloadError = {
          label: error.details[0].context.label,
          message: error.details[0].message,
          type: error.details[0].type,
        };

        res.status(422).json({ status: 'not_created', payloadError });
      }

      break;
    }
    default:
      res.status(400);
  }
};
