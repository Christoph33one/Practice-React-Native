import React from "react";
import { View, StyleSheet, Text } from "react-native";

function PageOne(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS IS PAGE ONE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default PageOne;
