import React from "react";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { View } from "react-native";
const isLoggedIn = true;

export default function RootNavigator() {
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </View>
  );
}
