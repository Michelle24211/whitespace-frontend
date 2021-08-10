import { loginApi, isLoggedInApi } from './ApiModel';

const auth = {
  async authenticate(email: string, password: string) {
    return fetch(loginApi, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login Failed');
        }
        return response.json();
      })
      .then((body) => body);
  },
  logout() {
    localStorage.removeItem('jwtToken');
  },
  isUserLoggedIn() {
    const jwtToken = localStorage.getItem('jwtToken');
    return fetch(isLoggedInApi, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jwtToken }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'success') {
          return res.data.user;
        }
        return null;
      })
      .catch((err) => console.log(err));
  },
};

export default auth;
