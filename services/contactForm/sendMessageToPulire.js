// import Joi from 'joi';
import nodemailer from 'nodemailer';

// const schema = Joi.object({
//   author: Joi.string().required(),
//   email: Joi.string().required(),
//   description: Joi.string().required(),
// });

// eslint-disable-next-line import/prefer-default-export
export const sendMessageToPulire = async (name, email, description) => {
  // const { author, email, description } = await schema.validateAsync(payload);

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'oliver.hamill67@ethereal.email',
      pass: 'HYquw6xNbxGCbEqc49',
    },
  });

  const response = await transporter.sendMail({
    from: 'Sender Name <sender@example.com>',
    to: 'Recipient <recipient@example.com>',
    subject: 'Nodemailer is unicode friendly ✔',
    text: 'Hello to myself!',
    html: `<p><b>Hello</b>${email} to myself!${description}, ${name}</p>`,
  });

  if (process.env.NODE_ENV !== 'production') {
    console.log(`E-mail sent, Preview URL: ${nodemailer.getTestMessageUrl(response)}`);
  }
};
