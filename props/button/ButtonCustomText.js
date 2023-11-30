import React from "react";
import { Text, TouchableOpacity } from "react-native";

function ButtonCustomText({ onPress, children, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

export default ButtonCustomText;
