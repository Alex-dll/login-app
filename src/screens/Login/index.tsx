import { SafeAreaView, Text } from "react-native";
import {styles} from "./styles"

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem vindo de volta</Text>
      <Text style={styles.subtitle}>Faça login na sua conta</Text>
    </SafeAreaView>
  )
}

export { Login }
