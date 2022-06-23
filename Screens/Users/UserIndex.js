import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';

const UserIndex = () => {
  const [users, setUsers] = useState([{}]);

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/users');
      const json = await response.json();
      console.log(json);
      setUsers(json);
      return json;
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
    </SafeAreaView>
  );
};

export default UserIndex;