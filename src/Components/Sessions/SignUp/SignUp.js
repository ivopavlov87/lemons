import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, Text } from 'react-native';
import axios from 'axios';

import DefaultButton from '../../../Components/Buttons/DefaultButton';

const styles = StyleSheet.create({
  SignUpContainer: {
    width: '100%',
    padding: 25,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
  },
  passwordConfirmInputContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  inputContainer: {
    padding: 5,
    width: '100%',
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

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
  const [showHide, toggleShowHide] = useState('Show');
  const [showHideConfirm, toggleShowHideConfirm] = useState('Show');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const toggleShowPassword = () => {
    showPassword ? toggleShowHide('Hide') : toggleShowHide('Show');
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const toggleShowPasswordConfirm = () => {
    showPasswordConfirm
      ? toggleShowHideConfirm('Hide')
      : toggleShowHideConfirm('Show');
    showPasswordConfirm
      ? setShowPasswordConfirm(false)
      : setShowPasswordConfirm(true);
  };

  const goToSignIn = () => {
    navigation.navigate('signIn');
  };

  const createUserAcct = async () => {
    return await axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        user: {
          username: username,
          email: email,
          password: password,
        },
      },
    }).then(response => {
      console.log('idk a user was created i guess');
    });
  };

  return (
    <SafeAreaView style={styles.SignUpContainer}>
      <Text style={styles.titleText}>Create an account!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={e => setEmail(e)}
          value={email}
          placeholder="email address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={e => setUsername(e)}
          value={username}
          placeholder="username"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={{ ...styles.input, ...passwordInputStyles }}
          onChangeText={e => setPassword(e)}
          value={password}
          placeholder="password"
          secureTextEntry={showPassword}
          autoCapitalize="none"
        />
        <DefaultButton
          callback={toggleShowPassword}
          buttonText={showHide}
          style={passwordShowButtonStyles}
        />
      </View>
      <View style={styles.passwordConfirmInputContainer}>
        <TextInput
          style={{ ...styles.input, ...passwordInputStyles }}
          placeholder="confirm password"
          secureTextEntry={showPasswordConfirm}
          autoCapitalize="none"
        />
        <DefaultButton
          callback={toggleShowPasswordConfirm}
          buttonText={showHideConfirm}
          style={passwordShowButtonStyles}
        />
      </View>
      <View style={styles.inputContainer}>
        <DefaultButton callback={createUserAcct} buttonText="Sign Up" />
      </View>
      <View style={styles.inputContainer}>
        <DefaultButton callback={goToSignIn} buttonText="Sign In Instead" />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
