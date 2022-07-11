import axios from 'axios';

const signIn = async (username, password) => {
  return await axios({
    method: 'post',
    url: 'http://localhost:3000/api/v1/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: username,
      password: password,
    },
  });
};

export const authService = {
  signIn,
};
