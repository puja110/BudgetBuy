import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainOnboardingScreen from './src/views/screens/MainOnboardingScreen';
import SecondOnboardingScreen from './src/views/screens/SecondOnboardingScreen';
import LoginScreen from './src/views/screens/auth/LoginScreen';
import ForgotPassword from './src/views/screens/auth/ForgotPassword';
import SignUpScreen from './src/views/screens/auth/SignUpScreen';
import TabBar from './src/views/navigation/TabBar';
import PostItem from './src/views/screens/TabScreens/PostItem';
import MyFavourites from './src/views/screens/TabScreens/MyFavourites';
import MyProfile from './src/views/screens/TabScreens/MyProfile';
import HistoryPage from './src/views/screens/TabScreens/HistoryPage';
import MetaAI from './src/views/screens/metaAI/MetaAI';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Registration">
            <Stack.Screen
              name="MetaAI"
              component={MetaAI}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MainOnboarding"
              component={MainOnboardingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SecondOnboardingScreen"
              component={SecondOnboardingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TabBar"
              component={TabBar}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PostItem"
              component={PostItem}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyFavourites"
              component={MyFavourites}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyProfile"
              component={MyProfile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HistoryPage"
              component={HistoryPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
