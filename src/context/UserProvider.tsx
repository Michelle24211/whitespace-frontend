/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider: React.FC<any> = ({ children }: any) => {
  const [user, setUser] = useState({});
  const context = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
