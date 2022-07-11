import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    text: {
      fontSize: 25,
      fontWeight: '500',
      color: 'black',
    },
    textPressed: {
      fontSize: 25,
      fontWeight: '500',
      color: 'white',
    },
    buttonNotPressed: {
      backgroundColor: 'grey',
      padding: 10,
      borderRadius: 4,
    },
    buttonPressed: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 4,
    },
  },
});
