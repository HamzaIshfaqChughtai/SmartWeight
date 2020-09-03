import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Colors } from '../styles/colors';
import AchievementStack from './AchievementStack';
import ResturentStack from './ResturentStack';

import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileStack from './ProfileStack';
import NotificationsStack from './NotificationsStack';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: Colors.gold }}>
      <Tab.Screen
        name={'HomeTab'}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name={'home'} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Achievement'}
        component={AchievementStack}
        options={{
          tabBarLabel: 'Achievement',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={'search1'} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Resturent'}
        component={ResturentStack}
        options={{
          tabBarLabel: 'Resturent',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name={'book-open'} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'ProfileTab'}
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={'user'} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'NotificationsTab'}
        component={NotificationsStack}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={'bells'} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
