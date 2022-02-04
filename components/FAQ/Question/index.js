import { v4 as uuid } from 'uuid';
import { FaQuestion } from 'react-icons/fa';
import isEmpty from 'lodash.isempty';

const Question = ({ question, answer, additionalList }) => {
  const paragraphList = !isEmpty(additionalList) ? (
    <ul className="my-4">
      <h4 className="mb-4">{additionalList.listTitle}</h4>
      {additionalList.listConditions.map((listItem) => (
        <li key={uuid()} className="flex items-center pb-4 ">
          <div className="w-10">
            <FaQuestion width={20} height={20} className="text-green-600" />
          </div>
          <p className="w-[80%]">{listItem}</p>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <li className="my-16" data-aos="fade-right">
      <h4 className="pb-6 my-6 text-2xl font-semibold border-b-2">{question}</h4>
      <p className="text-justify">{answer}</p>
      {paragraphList}
    </li>
  );
};

export default Question;
