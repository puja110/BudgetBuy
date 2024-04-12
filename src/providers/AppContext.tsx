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
    setUserData({
      uid: '',
      email: '',
      fullName: '',
      phoneNumber: ''
    }); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
