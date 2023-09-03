import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';

import type { ButtonProps } from './types';

export function Button({children, backgroundColor}: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      {children}
    </TouchableOpacity>
  );
}
