import getPayload from 'utils/getPayload';
import { errorInitialState, formValueInitialState } from 'data/initialStates';
import axios from 'axios';

export const handleOnChange = (event, formField, formState) => {
  const { formValues, setFormValues } = formState;
  const text = event.target.value;

  setFormValues({ ...formValues, [formField]: text });
};

export const handleSubmit = async (e, { setFormValues, setError, setIsMessageSend }, offerFormRef, recaptcharef) => {
  e.preventDefault();
  const payload = await getPayload(offerFormRef.current);

  const captchaToken = await recaptcharef.current.getValue();
  recaptcharef.current.reset();

  const response = await axios.post('/api/contact', { payload, captchaToken }).catch((error) => error.response);

  if (response.status === 200) {
    setError(errorInitialState);
    setFormValues(formValueInitialState);
    setIsMessageSend(true);
    const timeoutID = setTimeout(() => {
      setIsMessageSend(false);
      clearTimeout(timeoutID);
    }, 8000);
  } else if (response.status === 422) {
    setError((prevState) => {
      return {
        ...prevState,
        label: response.data.payloadError.label,
        message: response.data.payloadError.message,
        type: response.data.payloadError.type,
      };
    });
  }
};
