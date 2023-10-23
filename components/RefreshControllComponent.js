import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

// Here is created a refresh control component that uses a ScrollView to refresh the page when the user pulls down
// setRefresh state is updated with a timeout function of 1000 milliseconds.

function MyRefreshComponent() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Simulate an asynchronous data refresh operation
    setTimeout(() => {
      // Your data refresh logic here
      setRefreshing(false);
    }, 1000); // Simulated loading time
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#dodgerblue"
            colors={["#dodgerblue"]}
            progressBackgroundColor="white"
          />
        }
      >
        {refreshing ? (
          <Text style={styles.refreshingText}>Refreshing...</Text>
        ) : null}
        <View style={styles.item}>
          <Text style={styles.text}>Pull Down To Refresh Page</Text>
        </View>
        <MaterialCommunityIcons name="arrow-down" size={50} color="#262827" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3ECDA",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  item: {
    borderBottomWidth: 2,
    borderBottomColor: "#F90A0E",
    padding: 20,
    paddingTop: "50%",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    color: "grey",
  },
  refreshingText: {
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "#161A11",
  },
});

export default MyRefreshComponent;
