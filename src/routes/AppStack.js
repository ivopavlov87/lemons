import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserIndex from '../Components/Users/UserIndex';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="usersIndex"
        options={{ headerShown: false }}
        component={UserIndex}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
