import { v4 as uuid } from 'uuid';
import { FaQuestion } from 'react-icons/fa';

const Question = ({ question, answer, additionalList = [] }) => {
  console.log('additionalList', additionalList);
  const paragraphList = additionalList.length ? (
    <ul className="mt-4">
      {additionalList.map((listItem) => (
        <li key={uuid()} className="flex items-center py-2">
          <FaQuestion className="mr-4 text-green-600" />
          <p>{listItem}</p>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <li className="my-16" data-aos="fade-right">
      <h4 className="my-6  text-2xl font-semibold pb-6 border-b-2">{question}</h4>
      <p className="text-justify">{answer}</p>
      {paragraphList}
    </li>
  );
};

export default Question;
