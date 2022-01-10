import { v4 as uuid } from 'uuid';
import aboutData from 'data/about';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';

const AboutText = () => {
  const rawAboutText = aboutData.description;
  const aboutText = rawAboutText.map((rawAboutLine) => addNonBreakableSpaces(rawAboutLine));
  return (
    <div>
      {aboutText.map((textParagraph) => {
        return (
          <p className="py-3" key={uuid()}>
            {textParagraph}
          </p>
        );
      })}
    </div>
  );
};

export default AboutText;
