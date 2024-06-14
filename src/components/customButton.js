import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width = 120,
  borderRadius = 5,
}) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
      width,
      padding: 10,
      borderRadius,
    },
    buttonText: {
      fontSize,
      fontWeight: 'bold',
      color,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
