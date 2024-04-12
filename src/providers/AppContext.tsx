import React, { createContext, useState } from 'react';

// Create context
const AuthContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    uid: '',
    email: '',
    fullName: '',
    phoneNumber: ''
  });

  const userLogout = () => {
    // Clear user data on logout
    setUserData({
      uid: '',
      email: '',
      fullName: '',
      phoneNumber: ''
    });
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
