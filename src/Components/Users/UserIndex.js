import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, Button } from 'react-native';
import axios from 'axios';

import { useAuth } from '../../contexts/Auth';

const UserIndex = () => {
  const [users, setUsers] = useState([{}]);

  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  const getUsers = async () => {
    try {
      await axios({
        method: 'get',
        url: 'http://localhost:3000/api/v1/users',
      }).then(response => {
        setUsers(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <SafeAreaView>
      <Text>The backend says hello!</Text>
      <Text>Welcome, {auth.authData.data.username}</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View>
            <Text>User # {item.id}</Text>
            <Text>Username: {item.username}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Password: {item.password}</Text>
            <Text> </Text>
          </View>
        )}
      />
      <Button title="Sign Out" onPress={signOut} />
    </SafeAreaView>
  );
};

export default UserIndex;
