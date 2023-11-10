import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/auth/LoginScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import ForgotPassword from './screens/auth/ForgotPassword';
import MyFavourites from './screens/tabBars/MyFavourite';
import ProfilePage from './screens/tabBars/ProfilePage';
import TabBar from './screens/tabBars/TabBar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="TabBar" component={TabBar}/>
        <Stack.Screen name="My Favourites" component={MyFavourites}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage}/>
      </Stack.Navigator> */}
      <TabBar/>
    </NavigationContainer>
  );
}

export default App;
