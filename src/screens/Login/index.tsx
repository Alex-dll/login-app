import { SafeAreaView, Text, View } from "react-native";
import {styles} from "./styles"
import { Input } from "@/components/Input";
import { useState } from "react";

function Login() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem vindo de volta</Text>
      <Text style={styles.subtitle}>Faça login na sua conta</Text>
      <View style={styles.form}>
        <Input label="E-mail" value={email} onChangeText={onChangeEmail} placeholder="nome@gmail.com"  />
        <Input label="Senha" value={password} onChangeText={onChangePassword} placeholder="*********" secureTextEntry />
      </View>
    </SafeAreaView>
  )
}

export { Login }
