import React, { createContext, useState } from 'react';

// Create context
const AuthContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');

  const userLogout = () => {
    setUserEmail(''); // Clear email on user logout
  };

  return (
    <AuthContext.Provider value={{ userEmail, setUserEmail, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;