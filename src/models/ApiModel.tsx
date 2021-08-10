/* eslint-disable import/prefer-default-export */
const baseApiUrl =
  'http://whitespaceexpress-env.eba-gms4wzqe.us-east-2.elasticbeanstalk.com/';

export const getItemAPI = `${baseApiUrl}api/v1/item/`;

export const signUpApi = `${baseApiUrl}api/v1/user/signup`;

export const loginApi = `${baseApiUrl}api/v1/user/login`;

export const isLoggedInApi = `${baseApiUrl}api/v1/user/isLoggedIn`;

export const logoutApi = `${baseApiUrl}api/v1/user/logout`;

export const cartApi = `${baseApiUrl}api/v1/cart`;

export default baseApiUrl;
