export const signUpService = data => {
  URL = "https://yo7dm2sa2i.execute-api.eu-west-2.amazonaws.com/prod/signup";
  const userData = {
    name: data.fullName,
    email: data.email
  };
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
};
