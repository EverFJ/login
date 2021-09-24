import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Please Login</Text>
      <TextInput
        value={username}
        onChangeText={handleUsername}
        placeholder="Enter your username"
      />
      <TextInput value={password} onChangeText={handlePassword} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
