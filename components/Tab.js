import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

function Tab(props) {
  const carouselRef = useRef(null);

  const { width } = Dimensions.get("window");

  const carouselData = [{ key: "pageOne" }, { key: "pageTwo" }];

  const renderItem = ({ item }) => {
    switch (item.key) {
      case "pageOne":
        return (
          <View style={styles.container}>
            <PageOne />
          </View>
        );
      case "pageTwo":
        return (
          <View style={styles.container}>
            <PageTwo />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Carousel
      ref={carouselRef}
      data={carouselData}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width}
      onSnapToItem={(index) => {
        // Handle the snap event if needed
        console.log("Snapped to item:", index);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tab;
