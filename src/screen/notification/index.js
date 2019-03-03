import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class index extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={require("./img/duotone.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.top} />
        <View style={styles.middle}>
          <View>
            <Text
              style={styles.button}
              onPress={() => navigate("Home", { name: "Jane" })}
            >
              关于我
            </Text>
            <Text
              style={styles.button}
              onPress={() => navigate("Home", { name: "Jane" })}
            >
              反馈
            </Text>
            <Text
              style={styles.button}
              onPress={() => navigate("Home", { name: "Jane" })}
            >
              给个好评
            </Text>
            <Text
              style={styles.button}
              onPress={() => navigate("Home", { name: "Jane" })}
            >
              设置
            </Text>
          </View>
        </View>
        <View style={styles.bottom} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#6b52ae"
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1
  },
  top: {
    flex: 0.3
  },
  bottom: {
    flex: 0.5
  },
  button: {
    width: "100%",
    fontSize: 24,
    margin: 5,
    backgroundColor: "rgba(9,9,9,0.4)"
  },
  middle: {
    flex: 0.2
  }
});
