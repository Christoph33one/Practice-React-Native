import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text, Alert } from "react-native";

// Using the useState hook to update the input when a user adds text and submits the text.
// I condtional rendered errors for form validation. This way the user has to add text before submitting oir deleting text.
function UseState(props) {
  const [input, setInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [error, setError] = useState("");

  // Functions
  const handleTextChange = (text) => {
    setInput(text);
    setError("");
  };

  // conditional statement to check if not an empty string
  // .trim nethod to remove whte spaces when adding text.\
  // else give alert message
  const handleSubmitText = () => {
    if (input.trim() !== "") {
      setSubmittedText(input);
      setInput("");
    } else {
      setError(Alert.alert("Please add some text before submitting!"));
    }
  };

  // checks submittedText is true
  // if true, return an empty string
  // setError state called to clear an previous errors
  // if false show alert message
  const handleClearText = () => {
    if (submittedText) {
      setSubmittedText("");
      setError();
    } else {
      setError(Alert.alert("Add text before deleting!"));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="type here!"
        value={input}
        onChangeText={handleTextChange}
      />
      <Button title="click here!" onPress={handleSubmitText} />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

      {submittedText ? <Text>You submtiied: {submittedText}</Text> : null}
      <Button title="Delete here!" onPress={handleClearText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default UseState;
