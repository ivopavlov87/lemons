
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import SignIn from './Screens/Sessions/SignIn/SignIn';
import SignUp from './Screens/Sessions/SignUp/SignUp';
import UserIndex from './Screens/Users/UserIndex';
import Landing from './Screens/landing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: 'grey',
    padding: 50,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 26,
  },
});

const App = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="userIndex ">
        <Stack.Screen
          name="landing"
          component={Landing}
          options={{ headerShown: false }}
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
        <Stack.Screen
          name="userIndex"
          options={{ headerShown: false }}
          component={UserIndex}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <SafeAreaView style={styles.container}>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="SignIn">
    //       <Stack.Screen name="SignIn" component={SignIn} />
    //       <Stack.Screen name="SignUp" component={SignUp} />
    //     </Stack.Navigator>
    //     {/* <View style={styles.titleContainer}>
    //       <Text style={styles.titleText}>AllowWants</Text>
    //     </View> */}
    //     {/* <SignUp />
    //     <SignIn /> */}
    //   </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
