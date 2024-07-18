import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { windowHeight } from '../../utils/Dimentions';

const FormInput = ({ label, keyboardType, value, onChangeText, error, ...rest }: any) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode="outlined"
        label={label}
        style={[styles.text_input, error ? styles.errorBorder : null]}
        value={value}
        onChangeText={onChangeText}
        theme={{
          colors: { onSurfaceVariant: '#A7A9AC' },
          roundness: 14
        }}
        {...rest}
        activeOutlineColor="#4A3780"
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: 'red',
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderRadius: 16,
  },
  text_input: {
    backgroundColor: "#F0F4F8",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    height: 50,
  },
});
