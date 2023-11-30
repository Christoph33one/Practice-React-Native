import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/ButtonComponent";
import FlatListComponent from "./components/FlatListComponent";
import RefreshControlComponent from "./components/RefreshControllComponent";
import ScrollViewcomponent from "./components/ScrollViewcomponent";
import TextInput from "./components/TextInput";
import UseState from "./hooks/UseState";
import ComponentA from "./hooks/ComponentA";
import ComponentB from "./hooks/ComponentB";
import Tab from "./components/Tab";
import ParentComponent from "./props/wrapper/ParentComonent";
import ButtonCustomText from "./props/button/ButtonCustomText";

export default function App() {
  const handlePress = () => {
    alert("Button Pressed!");
  };
  return (
    <View style={styles.container}>
      <ButtonCustomText onPress={handlePress} styles={styles.button}>
        Press me!
      </ButtonCustomText>
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
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// <ParentComponent />
// <Tab />
// <ComponentA />
// <TextInput />
// <Button />
// <FlatListComponent />
// <RefreshControlComponent />
// <ScrollViewcomponent />
