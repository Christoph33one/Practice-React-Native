import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ComponentB from "./ComponentB";

// passing username prop to new component.
// using useState to update the username state

function ComponentA(props) {
  const [username, setUsername] = useState("Chris");
  const [colorChange, setColorChange] = useState("red");

  const changeUsername = () => {
    setUsername("Brown");
    setColorChange("green");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{username}</Text>
      <Button
        style={styles.Button}
        title="Change Username"
        onPress={changeUsername}
        color={colorChange}
      />
      <ComponentB username={username} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  Text: {
    paddingLeft: 30,
    margin: 20,
  },
});

export default ComponentA;
