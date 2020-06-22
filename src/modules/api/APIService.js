import axios from 'axios'

export const signUpService = async data => {
  const URL =
    'https://yo7dm2sa2i.execute-api.eu-west-2.amazonaws.com/prod/signup'
  const userData = {
    name: data.fullName,
    email: data.email
  }

  return await axios({
    method: 'post',
    url: URL,
    data: userData
  })
}
