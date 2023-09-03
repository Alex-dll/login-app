import { Image, SafeAreaView, Text, View } from "react-native";
import {styles} from "./styles"
import { Input } from "@/components/Input";
import { useState } from "react";
import { RememberMe } from "@/components/RememberMe";
import { Link } from "@/components/Link";
import { Button } from "@/components/Button";
import logoGoogle from "../../assets/logoGoogle/image.png"

function Login() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Bem vindo de volta</Text>
        <Text style={styles.subtitle}>Faça login na sua conta</Text>
        <View style={styles.form}>
          <Input label="E-mail" value={email} onChangeText={onChangeEmail} placeholder="nome@gmail.com"  />
          <Input label="Senha" value={password} onChangeText={onChangePassword} placeholder="*********" secureTextEntry />
        </View>
        <View style={styles.utils}>
          <RememberMe />
          <Link text="Esqueceu sua senha?" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button backgroundColor="#04C35C">
            <Text style={styles.buttonTitle}>
              Ola
            </Text>
          </Button>

          <Button backgroundColor="#1A202C">
            <View style={styles.buttonLogoView}>
              <Image source={logoGoogle} />
              <Text style={styles.buttonTitle}>
                Ou faça login com o Google
              </Text>
            </View>
          </Button>
        </View>
      </View>

      <View style={styles.register}>
        <Text>Não tem uma conta? </Text>
        <Link text="Cadastre-se" />
      </View>
    </SafeAreaView>
  )
}

export { Login }
