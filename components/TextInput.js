import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TextInput, Button } from "react-native";

function TextInputExample(props) {
  // useState hook to update the state with an empty string
  const [text, setText] = useState("");

  // handle the text change with the updated state
  const handleTextChange = (newText) => {
    setText(newText);
  };

  // handle sumbmitted text & clears the the input field once the button is clicked
  const handleSubmit = () => {
    console.log("Text Submitted");
    setText("");
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={text}
      />
      <Button title="Click To sumbit" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "dodgerblue",
    padding: 10,
  },
});

export default TextInputExample;
