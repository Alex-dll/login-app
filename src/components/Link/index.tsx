import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { LinkProps } from './types';

function Link({ text }: LinkProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export { Link }
