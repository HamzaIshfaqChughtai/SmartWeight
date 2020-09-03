import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Resturent from '../screens/Resturent/Resturent';

const Stack = createStackNavigator();

const ResturentStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Resturent'}
                component={Resturent}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default ResturentStack;
