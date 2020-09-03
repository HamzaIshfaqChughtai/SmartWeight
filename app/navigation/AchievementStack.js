import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Achievement from '../screens/Achievement/Achievement';

const Stack = createStackNavigator();

const AchievementStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Achievement'}
                component={Achievement}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AchievementStack;
