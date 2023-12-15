import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/auth/LoginScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import ForgotPassword from './screens/auth/ForgotPassword';
import MyFavourites from './screens/tabBars/MyFavourite';
import EditProfile from './screens/tabBars/EditProfile';
import MyProfile from './screens/tabBars/MyProfile'
import TabBar from './screens/tabBars/TabBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainOnboardingScreen from './onboardingScreen/MainOnboardingScreen';
import SecondOnboardingScreen from './onboardingScreen/SecondOnboardingScreen';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainOnboardingScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainOnboardingScreen" component={MainOnboardingScreen}/>
        <Stack.Screen name="SecondOnboardingScreen" component={SecondOnboardingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="TabBar" component={TabBar}/>
        <Stack.Screen name="My Favourites" component={MyFavourites}/>
        <Stack.Screen name="ProfilePage" component={EditProfile}/>
        <Stack.Screen name="MyProfile" component={MyProfile}/>
      </Stack.Navigator>
     
    </NavigationContainer>
    //<SecondOnboardingScreen/>
  );
}

export default App;
