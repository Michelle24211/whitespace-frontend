import { loginApi, isLoggedInApi, logoutApi } from './ApiModel';

const auth = {
  async authenticate(email: string, password: string) {
    return fetch(loginApi, {
      method: 'POST',
      credentials: 'include',
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
    return fetch(logoutApi, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'success') {
          return res;
        }
        throw new Error('Logout Failed');
      });
  },
  isUserLoggedIn() {
    return fetch(isLoggedInApi, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(`${res.data}gjlsjglsjgsgsg`);
        if (res.status === 'success') {
          return res.data.user;
        }
        return null;
      })
      .catch((err) => console.log(err));
  },
};

export default auth;
