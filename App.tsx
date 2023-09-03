import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {useFonts as merriwatherFont, Merriweather_400Regular, Merriweather_700Bold } from "@expo-google-fonts/merriweather"
import {useFonts as latoFont, Lato_400Regular, Lato_700Bold} from "@expo-google-fonts/lato"
import {useFonts as robotoFont, Roboto_400Regular} from "@expo-google-fonts/roboto"
import { Login } from '@/screens/Login';

export default function App() {
  const [merriwatherLoaded, merriwatherfontError] = merriwatherFont({
    Merriweather_400Regular,
    Merriweather_700Bold
  })

  const [latoLoaded, latoFontError] = latoFont({
    Lato_400Regular,
    Lato_700Bold
  })

  const [robotoLoaded, robotoFontError] = robotoFont({
    Roboto_400Regular
  })

  const merriwatherNotLoaded = !merriwatherLoaded && !merriwatherfontError;
  const latoNotLoaded = !latoLoaded && !latoFontError;
  const robotoNotLoaded = !robotoLoaded && !robotoFontError;

  if (merriwatherNotLoaded || latoNotLoaded || robotoNotLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
