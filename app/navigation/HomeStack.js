import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from '../screens/Home/Home';

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeTab'}
        component={HomeTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
