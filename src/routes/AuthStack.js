import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './Landing';
import SignIn from '../Components/Sessions/SignIn/SignIn';
import SignUp from '../Components/Sessions/SignUp/SignUp';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="landing">
      <Stack.Screen
        name="landing"
        options={{ headerShown: false }}
        component={Landing}
      />
      <Stack.Screen
        name="signIn"
        options={{ headerShown: false }}
        component={SignIn}
      />
      <Stack.Screen
        name="signUp"
        options={{ headerShown: false }}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
