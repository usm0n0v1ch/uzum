import { SafeAreaProvider } from "react-native-safe-area-context";

import { View } from "react-native";




export default function Basket() {
  return (
    <SafeAreaProvider>
      <View>Корзина</View>
    </SafeAreaProvider>
  );
}