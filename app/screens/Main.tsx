import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Search from "../components/Main/Search";
import Slider from "../components/Main/Slider";
import { Ionicons } from "@expo/vector-icons";
import Auth from "./Auth";
export default function Main() {
  const dunnyData = [
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' },
    { id: 3, title: 'Title 3' },
    { id: 4, title: 'Title 4' },
    { id: 5, title: 'Title 5' },
  ];

  return (
    
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Search />
          <Ionicons name="heart-outline" size={24} />
        </View>
        <View style={styles.carouselContainer}>
          <Slider  />
        </View>
        <View>
          <Auth/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  carouselContainer: {
    marginHorizontal: 20,
  },
});
