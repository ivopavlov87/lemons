import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../services/authService';
import { Alert } from 'react-native';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
    loadStorageData();
  }, []);

  const loadStorageData = async () => {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData = JSON.parse(authDataSerialized);
        console.log(_authData);
        setAuthData(_authData);
      }
    } catch (error) {
      console.log('was an error', error);
    } finally {
      //loading finished
      console.log('authData', authData);
      setLoading(false);
    }
  };

  const signIn = async (username, password) => {
    const _authData = await authService.signIn(username, password);
    console.log('sign in auth data', _authData);
    setAuthData(_authData);
    AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('@AuthData');
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
