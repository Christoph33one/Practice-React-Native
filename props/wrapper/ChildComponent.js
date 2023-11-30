import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ChildComponent({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.orginalChild}>Child Component</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  orginalChild: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "dodgerblue",
    padding: 10,
    marginTop: 10,
  },
});

export default ChildComponent;
