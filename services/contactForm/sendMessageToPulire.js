import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';
import EmailTemplate from 'components/EmailTemplate';

const plainVersionText = (name, email, description) => {
  return `Autor wiadomości: ${name}
Email podany w formularzu: ${email}
Treść wiadomości:${description}`;
};

const transporterDev = {
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'oliver.hamill67@ethereal.email',
    pass: 'HYquw6xNbxGCbEqc49',
  },
};

const transporterProd = {
  host: 'ssl0.ovh.net',
  port: 465,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
};

const transporterSelected = process.env.IS_PROD ? transporterProd : transporterDev;

const sendMessageToPulire = async (name, email, description) => {
  const transporter = nodemailer.createTransport(transporterSelected);

  await transporter.sendMail({
    from: 'Pulire <form@pulire.co>',
    to: 'Pulire <info@pulire.co>',
    replyTo: `${email}`,
    subject: `✔ pulire.co - wiadomość z formularza kontaktowego od "${name}"`,
    text: plainVersionText(name, email, description),
    html: renderToString(<EmailTemplate name={name} email={email} description={description} />),
  });
};
export default sendMessageToPulire;
