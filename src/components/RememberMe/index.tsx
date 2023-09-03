import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

import { styles } from './styles';

function RememberMe() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked}/>
        <Text style={styles.text}>Lembre de mim</Text>
    </View>
  )
  ;
}

export { RememberMe }
