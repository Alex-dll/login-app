import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import type { InputProps } from './types';

function Input({label, value, onChangeText, placeholder, secureTextEntry}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#1A202C"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export { Input }
