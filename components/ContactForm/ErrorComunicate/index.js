import { formData } from 'data/contact';

const ErrorCommunique = ({ error }) => {
  const errorMessage = formData.errors[error.label][error.type];

  return (
    <div className="p-4 mb-4 text-white bg-red-500 rounded-md">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorCommunique;
