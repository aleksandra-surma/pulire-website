const getPayload = async (offerForm) => {
  const form = new FormData(offerForm);

  const payload = {
    name: form.get('name'),
    email: form.get('email'),
    message: form.get('message'),
  };

  // if (form.get('picture')) {
  //   const file = await uploadImage(form.get('picture'));
  //   payload.imageUrl = file.secure_url;
  // }

  return payload;
};

export default getPayload;
