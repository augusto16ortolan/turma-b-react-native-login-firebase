import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { auth } from "../services/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [login, setLogin] = useState(true);

  async function cadastrarUsuario() {
    const response = await createUserWithEmailAndPassword(auth, email, senha);
    console.log(response);
  }

  function logarUsuario() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log(userCredential);
        console.log("Conta logada", `Bem-vindo ${userCredential.user.email}`);
      })
      .catch((error) => {
        console.log("Erro", error.message);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        value={senha}
        secureTextEntry={true}
        onChangeText={setSenha}
        placeholder="Senha"
      />
      {login ? (
        <Button title="Entrar" onPress={() => logarUsuario()} />
      ) : (
        <Button title="Cadastrar" onPress={() => cadastrarUsuario()} />
      )}

      {login ? (
        <Button title="Cadastrar usuario" onPress={() => setLogin(!login)} />
      ) : (
        <Button title="Acessar conta" onPress={() => setLogin(!login)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    borderWidth: 1,
    width: "100%",
    height: 50,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 20,
    paddingLeft: 5,
  },
});
