import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ChildComponent from "./ChildComponent";

function ParentComponent(props) {
  return (
    <View style={styles.container}>
      <ChildComponent>
        <Text style={styles.child}>This is a child component</Text>
      </ChildComponent>
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
  child: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "black",
    padding: 10,
    marginTop: 10,
  },
});

export default ParentComponent;
