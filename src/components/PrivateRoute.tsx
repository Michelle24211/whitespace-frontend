/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserContext from '../context/UserContext';

const PrivateRoute: React.FC<any> = ({ component, ...rest }: any) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        Object.keys(user).length !== 0 ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

// const PrivateRoute: React.FC<any> = ({ component, ...options }: any) => {
//   const { user } = useContext(UserContext);
//   console.log(user);
//   const finalComponent =
//     Object.keys(user).length !== 0 ? component : RegistrationPage;

//   return <Route {...options} component={finalComponent} />;
// };

export default PrivateRoute;
