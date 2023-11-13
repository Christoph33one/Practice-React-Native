import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/ButtonComponent";
import FlatListComponent from "./components/FlatListComponent";
import RefreshControlComponent from "./components/RefreshControllComponent";
import ScrollViewcomponent from "./components/ScrollViewcomponent";
import TextInput from "./components/TextInput";
import UseState from "./hooks/UseState";

export default function App() {
  return <UseState someProp="Hello I am a prop!" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// <TextInput />
// <Button />
// <FlatListComponent />
// <RefreshControlComponent />
// <ScrollViewcomponent />
