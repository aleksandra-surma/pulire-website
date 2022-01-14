import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';
import EmailTemplate from 'components/EmailTemplate';

const plainVersionText = (name, email, description) => {
  return `Autor wiadomości: ${name}
Email podany w formularzu: ${email}
Treść wiadomości:${description}`;
};

const sendMessageToPulire = async (name, email, description) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'oliver.hamill67@ethereal.email', // todo: hide -> .env.local
      pass: 'HYquw6xNbxGCbEqc49', // todo: hide -> .env.local
    },
  });

  const response = await transporter.sendMail({
    from: 'Pulire <form@pulire.co>',
    to: 'Pulire <info@pulire.co>',
    replyTo: `${email}`,
    subject: `✔ pulire.co - wiadomość z formularza kontaktowego od "${name}"`,
    text: plainVersionText(name, email, description),
    html: renderToString(<EmailTemplate name={name} email={email} description={description} />),
  });

  if (process.env.NODE_ENV !== 'production') {
    console.log(`E-mail sent, Preview URL: ${nodemailer.getTestMessageUrl(response)}`);
  }
};

export default sendMessageToPulire;

// const transporter = nodemailer.createTransport({
//   host: 'ssl0.ovh.net',
//   port: 465,
//   auth: {
//     user: process.env.REACT_APP_MAIL_USER,
//     pass: process.env.REACT_APP_MAIL_PASSWORD,
//   },
// });
//
// const response = await transporter.sendMail({
//   from: 'Pulire <form@pulire.co>',
//   to: 'Pulire <ouritsu.taynama@gmail.com>',
//   replyTo: `${email}`,
//   subject: `✔ pulire.co - wiadomość z formularza kontaktowego od "${name}"`,
//   html: renderToString(<EmailTemplate name={name} email={email} description={description} />),
// });
