import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

// This is a FlatList rendering three items with key value pairs.
// I have added an Alert to each item for practice purposes which returns the keys value when clciking on each item

const data = [
  { key: "1", text: "This is item 1" },
  { key: "2", text: "This is item 2" },
  { key: "3", text: "This is item 3" },
  // Add more items as needed
];

function FlatListComponent() {
  const handleItemPress = (item) => {
    Alert.alert("You selected", item.text);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.item}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: "50%",
    alignItems: "stretch",
  },
  item: {
    backgroundColor: "#D3C3EF",
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default FlatListComponent;
