import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import DefaultButton from '../Components/Buttons/DefaultButton';

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
  inputContainer: {
    marginTop: 10,
  },
});

const Landing = ({ navigation }) => {
  const goToSignUp = () => {
    navigation.navigate('signUp');
  };

  const goToSignIn = () => {
    navigation.navigate('signIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>AllowWants</Text>
      </View>
      <View style={styles.inputContainer}>
        <DefaultButton callback={goToSignIn} buttonText="Sign In" />
      </View>
      <View style={styles.inputContainer}>
        <DefaultButton callback={goToSignUp} buttonText="Sign Up" />
      </View>
    </SafeAreaView>
  );
};

export default Landing;
