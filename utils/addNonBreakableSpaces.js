// Add non-breakable spaces after one-letter words

const addNonBreakableSpaces = (rawDescription) => {
  const splittedRawDescription = rawDescription.split(' ');

  const description = splittedRawDescription.reduceRight((acc, next) => {
    if (next.length !== 1) {
      return `${next} ${acc}`;
    }
    return `${next}\xa0${acc}`;
  }, '');
  return description;
};

export default addNonBreakableSpaces;
