import stainPaintImg from 'public/images/stain-paint.jpg';
import napkinsImg from 'public/images/napkins-pulire.jpeg';

export const contactData = {
  companyName: 'Pulire',
  title: 'Kontakt',
  shortDescription: 'Kompleksowe sprzątanie obiektów',
  contactText:
    'Masz pytanie, chcesz otrzymać wycenę albo nawiązać współpracę? Skontaktuj się z nami za pomocą telefonu, maila albo formularza kontaktowego.',
  phoneNumber: '535 412 571',
  nip: '9182067290',
  regon: '521727546',
  email: 'info@pulire.co',
  offerUrl: stainPaintImg,
  socialMedia: {
    facebook: { label: 'facebook', address: 'https://www.facebook.com/Pulire-101147819163495/' },
    instagram: { label: 'instagram', address: 'https://www.instagram.com/pulire.cleaning/' },
  },
  ogData: {
    title: 'Pulire - kontakt',
    description:
      'Zajrzyj i napisz do nas. Oferujemy usługi w zakresie sprzątania przemysłowych, handlowo-usługowych, hoteli, biur i mieszkaniowych. W naszej ofercie znajduje się również sprzątanie poremontowe i pobudowlane. Wykonujemy indywidualne wyceny zgodnie z zapotrzebowaniem klienta.',
    url: 'www.pulire.co/kontakt',
    image: napkinsImg,
  },
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
