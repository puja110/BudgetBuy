import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import HistoryPage from './HistoryPage';
import Favorites from './MyFavourite';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="History" component={HistoryPage} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default TabBar;