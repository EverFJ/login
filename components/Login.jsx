import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login(props) {
  const [username, setUsername] = useState(
    props.location.state ? props.location.state.username : ""
  );
  const [password, setPassword] = useState("");

  console.log(`Login props.location`, props.location);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Login</Text>
      <View style={styles.containerLogin}>
        <Text>Username : </Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          autoFocus
        />
        <Text>Password : </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
        />
        {username.length > 5 && password.length > 5}
        <Button
          title="Submit"
          disabled={username.length < 5 || password.length < 5}
          onPress={() => {
            props.history.push("/home", { username: username });
          }}
        />
      </View>

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
  containerLogin: {
    backgroundColor: "#eee",
    padding: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 36,
    marginVertical: 10,
  },
  input: {
    padding: 8,
    borderColor: "#000",
    borderWidth: 1,
    margin: 8,
  },
});
