import React from "react";
import { View, StyleSheet, Text } from "react-native";

function PageTwo(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS IS PAGE TWO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default PageTwo;
