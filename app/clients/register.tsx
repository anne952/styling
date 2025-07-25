
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import Input from "../../components/input";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.replace("/home_screen/choice");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>Connexion</Text>
       <Input
        placeholder="Nom"
        value={username}
        onChangeText={setUsername}
        style={[styles.input, styles.inputBorder]}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, styles.inputBorder]}
      />
      <Input
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        style={[styles.input, styles.inputBorder]}
      />
      <View style={styles.forgotRow}>
        {/* <TouchableOpacity onPress={() => router.replace("/commun/forgotPassword")}> 
          <Text style={styles.forgot}>Mot de passe oublié ?</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => router.replace("/home_screen/login")}> 
          <Text style={styles.signup}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <FontAwesome name="google" size={25} color="#EA4335" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="facebook" size={25} color="#1877F3" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="instagram" size={25} color="#C13584" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="twitter" size={25} color="#1DA1F2" style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
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
    marginTop: 120,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#222",
  },
  input: {
    width: 280,
    height: 50,
    marginBottom: 18,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 999,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  forgotRow: {
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  signup: {
    color: "#007AFF",
    fontSize: 15,
    marginBottom: 24,
    
  },
  button: {
    backgroundColor: "#222",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 999,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgot: {
    color: "#007AFF",
    fontSize: 15,
    marginBottom: 24,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },
  socialIcon: {
    width: 36,
    height: 36,
    // marginHorizontal: 8,
    resizeMode: "contain",
  },
});
