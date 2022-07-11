import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
} from 'react-native';
import { useAuth } from '../../../contexts/Auth';

import DefaultButton from '../../../Components/Buttons/DefaultButton';

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
  const auth = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  const handleSignInButton = async () => {
    await auth.signIn(username, password);
  };

  const handleUsernameInput = e => {
    setUsername(e);
  };

  return (
    <SafeAreaView style={styles.signInContainer}>
      <Text style={styles.titleText}>AllowWants</Text>
      <Text style={styles.titleText}>Welcome back!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="username"
          onChangeText={handleUsernameInput}
          value={username}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={{ ...styles.input, ...passwordInputStyles }}
          placeholder="password"
          secureTextEntry={showPassword}
          onChangeText={e => setPassword(e)}
          value={password}
          autoCapitalize="none"
        />
        <DefaultButton
          callback={toggleShowPassword}
          buttonText={showHide}
          style={passwordShowButtonStyles}
        />
      </View>
      <View style={styles.inputContainer}>
        <DefaultButton callback={handleSignInButton} buttonText="Sign In" />
      </View>
      <View style={styles.inputContainer}>
        <DefaultButton callback={goToSignUp} buttonText="Sign Up Instead" />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
