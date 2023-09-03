import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

function ForgetPassword() {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>Esqueceu sua senha?</Text>
    </TouchableOpacity>
  );
}

export { ForgetPassword }
