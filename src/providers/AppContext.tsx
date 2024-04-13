import React, { createContext, useState } from 'react';

// Create a new context 
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // Initialize the user data state with empty values
  const [userData, setUserData] = useState({
    uid: '',
    email: '',
    fullName: '',
    phoneNumber: ''
  });

  const userLogout = () => {
    // resetting the user data state
    setUserData({
      uid: '',
      email: '',
      fullName: '',
      phoneNumber: ''
    });
  };

  return (
    <AppContext.Provider value={{ userData, setUserData, userLogout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
