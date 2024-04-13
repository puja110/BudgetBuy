import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../views/screens/TabScreens/HomePage';
import MyFavourites from '../../views/screens/TabScreens/MyFavourites';
import PostItem from '../../views/screens/TabScreens/PostItem';
import MyProfile from '../../views/screens/TabScreens/MyProfile';
import HistoryPage from '../../views/screens/TabScreens/HistoryPage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { color: 'black' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: () => (
              <Icon
                name='home'
                type='ionicon'
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={MyFavourites}
          options={{
            tabBarIcon: () => (
              <Icon
                name='heart'
                type='ionicon'
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={PostItem}
          options={{
            tabBarIcon: () => (
              <Icon
                name='add'
                type='ionicon'
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryPage}
          options={{
            tabBarIcon: () => (
              <Icon
                name='star'
                type='ionicon'
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            tabBarIcon: () => (
              <Icon
                name='person'
                type='ionicon'
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TabBar;
