import validate from 'services/contactForm/validate';

export default async (req, res) => {
  switch (req.method) {
    case 'POST': {
      try {
        const payload = req.body;

        await validate(payload);

        res.status(200).json({ status: 'payload_sent' });
      } catch (error) {
        console.log('POST error.message', error.message);
        res.status(422).json({ status: 'not_created', error });
      }

      break;
    }
    default:
      res.status(400);
  }
};
