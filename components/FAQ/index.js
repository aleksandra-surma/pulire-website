import { faq } from 'data/offers';
import { v4 as uuid } from 'uuid';
import Question from './Question';

const FAQ = () => {
  return (
    <div className="text-lg sm:p-8 lg:w-3/5 lg:pl-20 font-redHat leading-8">
      <h2 className="my-4 text-2xl font-bold tracking-wider lg:text-4xl">{faq.title}</h2>
      <p className="text-justify">{faq.description}</p>
      <ul>
        {faq.questions.map(({ question, answer, additionalList }) => (
          <Question key={uuid()} question={question} answer={answer} additionalList={additionalList} />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
