import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../contexts/Auth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

import { Loading } from '../Components/Loading/Loading';

export const Router = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
