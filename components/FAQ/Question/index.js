const Question = ({ question, answer }) => {
  return (
    <li className="my-16" data-aos="fade-right">
      <h4 className="my-6  text-2xl font-semibold pb-6 border-b-2">{question}</h4>
      <p className="text-justify">{answer}</p>
    </li>
  );
};

export default Question;
