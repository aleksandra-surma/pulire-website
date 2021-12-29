export const contactData = {
  companyName: 'Pulire',
  shortDescription: 'Kompleksowe sprzątanie obiektów',
  contactText:
    'Masz pytanie, chcesz otrzymać wycenę albo nawiązać współpracę? Skontaktuj się z nami za pomocą telefonu, maila albo formularza kontaktowego.',
  phoneNumber: '535 412 571',
  email: 'info@pulire.co',
};

export const formData = {
  formFields: ['name', 'email', 'phoneNumber'],
  errors: {
    name: {
      'string.min': 'W pierwszym polu użyto zbyt krótkiej nazwy (min. 3 znaki).',
      'string.max': 'W pierwszym polu użyto zbyt długiej nazwy (max. 40 znaków)',
    },
    email: 'e-mail',
    message: 'treść wiadomości',
  },
  contactFormPlaceholders: {
    name: 'imię, nazwisko lub nazwa firmy',
    email: 'e-mail',
    message: 'treść wiadomości',
  },
};
