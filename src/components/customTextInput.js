import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
  value = '',
  placeholder = '',
  borderColor = '#DDD',
}) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    label: {
      marginBottom: 5,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 2,
      borderColor,
      padding: 10,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        value={text}
      />
    </View>
  );
}

export default CustomTextInput;
