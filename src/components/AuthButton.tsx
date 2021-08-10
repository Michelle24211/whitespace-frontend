import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import auth from '../models/AuthModel';
import RegistrationButton from './AuthModal';
import UserContext from '../context/UserContext';

// type PathParamsType = {
//   param1: string;
// };

// // Your component own properties
// type PropsType = RouteComponentProps<PathParamsType> & {
//   history: string;
// };

const AuthButton = withRouter(({ history, location }) => {
  const { user, setUser } = useContext(UserContext);

  console.log(Object.keys(user).length);
  if (Object.keys(user).length === 0) {
    // eslint-disable-next-line no-restricted-globals
    return <RegistrationButton renderAsPage={false} location={location} />;
  }

  const logout = async () => {
    auth.logout();
    setUser({});
    history.push('/');
  };

  return (
    <div>
      {/* <NavLink exact to="/profile" style={{ border: 'none' }}>
        <Button variant="link">
          <span
            className="iconify"
            data-icon="gg:profile"
            data-inline="false"
            data-width="30"
            data-height="30"
            style={{ color: '#6c757d' }}
          />
        </Button>
      </NavLink> */}
      <Button variant="outline-secondary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
});

export default AuthButton;
