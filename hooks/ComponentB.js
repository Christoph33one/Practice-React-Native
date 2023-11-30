import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ComponentB(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Recieve Username: {props.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  Text: {
    paddingLeft: 30,
    margin: 20,
  },
});

export default ComponentB;
