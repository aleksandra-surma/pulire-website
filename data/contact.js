import stainPaintImg from 'public/images/stain-paint.jpg';

export const contactData = {
  companyName: 'Pulire',
  title: 'Kontakt',
  shortDescription: 'Kompleksowe sprzątanie obiektów',
  contactText:
    'Masz pytanie, chcesz otrzymać wycenę albo nawiązać współpracę? Skontaktuj się z nami za pomocą telefonu, maila albo formularza kontaktowego.',
  phoneNumber: '535 412 571',
  email: 'info@pulire.co',
  offerUrl: stainPaintImg,
};

export const formData = {
  formFields: [{ name: 'name' }, { email: 'email' }, { phoneNumber: 'phoneNumber' }],
  errors: {
    name: {
      'string.min': 'W pierwszym polu użyto zbyt krótkiej nazwy.',
      'string.max': 'W pierwszym polu użyto zbyt długiej nazwy (max. 40 znaków)',
    },
    email: {
      'string.min': 'Podano niepoprawny adres email, proszę spróbować ponownie.',
      'string.max': 'Podano niepoprawny adres email, proszę spróbować ponownie.',
      'string.email': 'Podano niepoprawny adres email, proszę spróbować ponownie.',
    },
    message: {
      'string.min': 'W treści wiadomości użyto zbyt małej ilości znaków.',
      'string.max': 'W treści wiadomości użyto zbyt dużej ilości znaków (max. 2000 znaków)',
    },
    isRecaptchaValid: {
      'any.only': `Zaznacz pole "I'm not a robot"`,
    },
  },
  contactFormPlaceholders: {
    name: 'imię, nazwisko lub nazwa firmy',
    email: 'e-mail',
    message: 'treść wiadomości',
  },
  policyMessage:
    '* Zgodnie z naszą polityką prywatności Twoje dane nie zostaną przekazane do żadnych podmiotów. Będą przetwarzane tylko w ramach naszej oferty.',
};
