import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
} from 'react-native';

import DefaultButton from '../../Buttons/DefaultButton';

const styles = StyleSheet.create({
  signInContainer: {
    width: '100%',
    padding: 25,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    padding: 5,
    width: '100%',
    // flex: 1,
  },
  input: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
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

const passwordInputStyles = StyleSheet.create({
  width: '75%',
});

const passwordShowButtonStyles = StyleSheet.create({
  buttonContainer: {
    minWidth: '20%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    text: {
      fontSize: 18,
      fontWeight: '500',
      color: 'black',
    },
    textPressed: {
      fontSize: 18,
      fontWeight: '500',
      color: 'white',
    },
    buttonNotPressed: {
      fontWeight: 'bold',
      backgroundColor: 'grey',
      padding: 10,
      borderRadius: 4,
      flex: 1,
    },
    buttonPressed: {
      fontWeight: 'bold',
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 4,
      flex: 1,
    },
  },
});

const SignIn = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showHide, toggleShowHide] = useState('Show');

  const toggleShowPassword = () => {
    showPassword ? toggleShowHide('Hide') : toggleShowHide('Show');
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const goToSignUp = () => {
    navigation.navigate('signUp');
  };

  const goToUsersIndex = () => {
    navigation.navigate('userIndex');
  };

  return (
    <SafeAreaView style={styles.signInContainer}>
      <Text style={styles.titleText}>AllowWants</Text>
      <Text style={styles.titleText}>Welcome back!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="email address"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={{ ...styles.input, ...passwordInputStyles }}
          placeholder="password"
          secureTextEntry={showPassword}
        />
        <DefaultButton
          callback={toggleShowPassword}
          buttonText={showHide}
          style={passwordShowButtonStyles}
        />
      </View>
      <View style={styles.inputContainer}>
        <DefaultButton callback={goToUsersIndex} buttonText="Sign In" />
      </View>
      <View style={styles.inputContainer}>
        <DefaultButton callback={goToSignUp} buttonText="Sign Up Instead" />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
