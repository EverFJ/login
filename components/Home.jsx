import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home(props) {
  //   console.log(`Home props.location`, props.location);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Welcome {props.location.state.username}</Text>
      <Button
        title="Logout"
        onPress={() => {
          props.history.push("/", {
            username: props.location.state.username,
          });
        }}
      />
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
