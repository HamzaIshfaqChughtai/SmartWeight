import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './TabsRoute';
import { Colors } from '../styles/colors';
import SelectLanguages from '../screens/SelectLanguages/SelectLanguages'

const Stack = createStackNavigator();

const StackRoute = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'SelectLanguages'}
          component={SelectLanguages}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'Tabs'}
          component={TabRoutes}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default StackRoute;
