import React, { Component } from "react";
import { ThemeProvider, ListItem } from "react-native-elements";
import { PullView } from "react-native-pull";
import { View, Text, StyleSheet } from "react-native";
export default class weatherToday extends Component {
  onPullRelease(resolve) {
    //do something
    setTimeout(() => {
      resolve();
    }, 3000);
  }
  render() {
    const { data } = this.props;
    console.log(data);
    data.win = data.win || [];
    return (
      <ThemeProvider>
        <View style={styles.overview}>
          <Text style={styles.textTem}>
            {`${data.tem}`}
            <Text style={{ fontSize: 20 }}>{data.wea}</Text>
          </Text>
          <Text style={styles.text}>
            {`空气质量：`}
            <Text style={{ fontSize: 40 }}>{data.air_level}</Text>
          </Text>
          <Text style={styles.text}>{`温度:${data.tem2}-${data.tem1}`}</Text>
          <Text style={styles.text}>{`湿度：${data.humidity}`}</Text>
          <Text style={styles.text}>
            {data.win[0] ? `${data.win[0]}：${data.win_speed}` : ""}
          </Text>
        </View>
      </ThemeProvider>
    );
  }
}
const styles = StyleSheet.create({
  overview: {
    width: "100%",
    backgroundColor: "rgb(79,153,253)",
    height: 300,
    alignItems: "center",
    fontSize: 20
  },
  text: {
    fontSize: 20,
    color: "#eee",
    paddingTop: 10
  },
  textTem: {
    fontSize: 80,
    paddingTop: "10%",
    color: "#eee"
  }
});
