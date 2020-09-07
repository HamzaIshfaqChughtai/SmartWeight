import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './TabsRoute';
import CreateProfile from '../screens/Registered/CreateProfile'
import { Colors } from '../styles/colors';
import HealthStatus from '../screens/Registered/HealthStatus'
import SelectLanguages from '../screens/SelectLanguages/SelectLanguages'
import Login from '../screens/Login/Login'
import MotivationJoinUs from '../screens/Registered/MotivationJoinUs'
import Letstalkfood from '../screens/Registered/Letstalkfood'
import QuestionForm from '../screens/Registered/QuestionForm'
import Letstalkfoodsecond from '../screens/Registered/Letstalkfoodsecond'
import AfterQuestionForm from '../screens/Registered/AfterQuestionForm'
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
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'CreateProfile'}
          component={CreateProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'HealthStatus'}
          component={HealthStatus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'MotivationJoinUs'}
          component={MotivationJoinUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Letstalkfood'}
          component={Letstalkfood}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'QuestionForm'}
          component={QuestionForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Letstalkfoodsecond'}
          component={Letstalkfoodsecond}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'AfterQuestionForm'}
          component={AfterQuestionForm}
          options={{ headerShown: false }}
        />








      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default StackRoute;
