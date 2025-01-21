import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GETAPI from "./src/GETAPI";
import POSTAPI from "./src/POSTAPI";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <POSTAPI /> */}
      <Text>Hello</Text>
      {/* <GETAPI /> */}
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
