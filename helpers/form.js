import getPayload from 'utils/getPayload';
import { errorInitialState, formValueInitialState } from 'data/initialStates';

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

  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ payload, captchaToken }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response?.ok) {
    setError(errorInitialState);
    setFormValues(formValueInitialState);
    setIsMessageSend(true);
    const timeoutID = setTimeout(() => {
      setIsMessageSend(false);
      clearTimeout(timeoutID);
    }, 8000);
  } else if (!response?.ok) {
    const payloadError = response?.clone().json();
    payloadError?.then((errorFulfilled) => {
      setError((prevState) => {
        return {
          ...prevState,
          label: errorFulfilled?.payloadError?.label,
          message: errorFulfilled?.payloadError?.message,
          type: errorFulfilled?.payloadError?.type,
        };
      });
    });
  }
};
