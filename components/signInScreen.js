import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { stylesSignIn } from "./style";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        navigation.reset({
          index: 0,
          routes: [{ name: "MainScreen" }],
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <ImageBackground
    source={require("../assets/aaa.jpeg")}
        style={stylesSignIn.background}>
      <View style={stylesSignIn.container}>
        <Text style={stylesSignIn.title}>Sign In</Text>
        {error ? <Text style={stylesSignIn.error}>{error}</Text> : null}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={stylesSignIn.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={stylesSignIn.input}
          secureTextEntry={true}
        />
        <Pressable onPress={handleSignIn} style={stylesSignIn.button}>
          <Text style={stylesSignIn.buttonText}>Sign In</Text>
        </Pressable>
        <View style={stylesSignIn.footer}>
          <Text>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignUp") } style={stylesSignIn.button}>
            <Text style={stylesSignIn.buttonText}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignInScreen;