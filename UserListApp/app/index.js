import { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, Pressable } from "react-native";
import UserList from '../src/Screens/UserList'
import AppNavigator from '../src/navigation/AppNavigator'

export default function Index() {

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  );
}
