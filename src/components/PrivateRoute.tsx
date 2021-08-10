/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import UserContext from '../context/UserContext';
import RegistrationPage from '../pages/auth/RegistrationPage';

const PrivateRoute: React.FC<any> = ({ component, ...options }: any) => {
  const { user } = useContext(UserContext);
  console.log(user);
  const finalComponent =
    Object.keys(user).length !== 0 ? component : RegistrationPage;

  return <Route {...options} component={finalComponent} />;
};

export default PrivateRoute;
