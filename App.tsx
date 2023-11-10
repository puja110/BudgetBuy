import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ForgotPassword from './Screens/ForgotPassword';
// import MyFavourites from './Screens/MyFavourite';
import TabBar from './TabBars/TabBar';
import MyFavourites from './Screens/MyFavourite';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="My Favourites" component={MyFavourites}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
