import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import defaultButtonStyles from './DefaultButtonStyles';

const DefaultButton = props => {
  const styles = { ...defaultButtonStyles, ...props.style };

  const [buttonStyles, setButtonStyles] = useState(
    styles.button.buttonNotPressed,
  );

  const [buttonTextStyles, setButtontTextStyles] = useState(styles.button.text);

  const handleOnPressIn = () => {
    setButtontTextStyles(styles.button.textPressed);
    setButtonStyles(styles.button.buttonPressed);
  };

  const handleOnPress = () => {
    if (!props.callback) {
      Alert.alert('Needs to be implemented', '', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      props.callback();
    }
  };

  const handleOnPressOut = () => {
    setButtontTextStyles(styles.button.text);
    setButtonStyles(styles.button.buttonNotPressed);
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={buttonStyles}
        onPressIn={handleOnPressIn}
        onPress={handleOnPress}
        onPressOut={handleOnPressOut}>
        <Text style={buttonTextStyles}>{props.buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default DefaultButton;
