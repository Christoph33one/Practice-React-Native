import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/ButtonComponent";
import FlatListComponent from "./components/FlatListComponent";
import RefreshControlComponent from "./components/RefreshControllComponent";
import ScrollViewcomponent from "./components/ScrollViewcomponent";
import TextInput from "./components/TextInput";

export default function App() {
  return <TextInput />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// <Button />
// <FlatListComponent />
// <RefreshControlComponent />
// <ScrollViewcomponent />
