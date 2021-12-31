import { useState } from 'react';
import { errorInitialState, formValueInitialState } from 'data/initialStates';

const useFormState = () => {
  const [formValues, setFormValues] = useState(formValueInitialState);
  const [isMessageSend, setIsMessageSend] = useState(false);
  const [error, setError] = useState(errorInitialState);

  return { isMessageSend, setIsMessageSend, error, setError, formValues, setFormValues };
};

export default useFormState;
