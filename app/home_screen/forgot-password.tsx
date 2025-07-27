import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import { useRouter } from "expo-router";  
import Input from "../../components/input";  



export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Logic to handle password reset
    console.log("Password reset link sent to:", email);
    router.replace("/home_screen/login");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>Mot de passe oublié</Text>
      <Input
        placeholder="Entrez votre email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, styles.inputBorder]}
      />
      <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
        <Text style={styles.buttonText}>Réinitialiser</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("/home_screen/login")}> 
        <Text style={styles.link}>Retour à la connexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 32,
  },
  input: {
    width: 280,
    height: 50,
    marginBottom: 18,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 999,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 999,
    marginTop: 10,
    marginBottom: 10,
    width: 280,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#007AFF",
    fontSize: 15,
    position: "relative",
    bottom: 20,
    top: 190,
    // marginTop: 106,
    // fontWeight: "bold",
    textAlign: "center",
  },
});


