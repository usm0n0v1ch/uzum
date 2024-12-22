import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";



export default function Profile() {
  return (
    <SafeAreaProvider>
      <View>Профиль</View>
    </SafeAreaProvider>
  );
}