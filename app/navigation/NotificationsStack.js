import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from '../screens/Notifications/Notifications';

const Stack = createStackNavigator();

const NotificationsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Notifications'}
        component={Notifications}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NotificationsStack;
