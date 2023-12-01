import paths from 'data/paths';

const { home, about, offer, contact } = paths;

export const navButtonsData = {
  home: {
    label: 'HOME',
    path: home,
  },
  about: {
    label: 'O\xa0NAS',
    path: about,
  },
  offer: {
    label: 'OFERTA',
    path: offer,
  },
  contact: {
    label: 'KONTAKT',
    path: contact,
  },
};

export const formButtonsData = {
  submit: 'Wyślij',
  submitting: 'Wysyłanie...',
};
