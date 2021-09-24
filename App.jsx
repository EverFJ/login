import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Home from "./components/Home";
import Login from "./components/Login";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </NativeRouter>
  );
}
