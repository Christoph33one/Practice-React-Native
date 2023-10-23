import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";

// I replaced the Button component with a TouchableOPacity which allows you to define custom styling.
// TouchableOPacity has a more modern way to use a button on a mobuile plateform.

function ButtonComponent(props) {
  const handlePress = () => {
    console.log("button pressed");
    Alert.alert("Are you sure?");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Let's build a button component</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Press Me To Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "normal",
    color: "grey",
  },
  button: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ButtonComponent;
