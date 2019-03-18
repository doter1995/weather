import React, { Component } from "react";
import { Text, View, SectionList, StyleSheet } from "react-native";

export default class TempDays extends Component {
  render() {
    let data = this.props.data;
    if (!data) {
      data = [];
    }
    data.shift();
    const dataSet = data.map(item => ({ data: [item] }));
    return (
      <SectionList
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: 400,
                alignItems: "left"
              }}
            >
              <Text style={styles.text} key={index}>
                {item.day}
              </Text>
              <Text style={styles.text} key={index}>
                {item.tem2 == item.tem1
                  ? `当前：${item.tem1}`
                  : `${item.tem2}-${item.tem1}`}
              </Text>
              <Text style={styles.text} key={index}>
                {item.win[0]}:{item.win_speed}
              </Text>
              {item.index.map((obj, key) => {
                if (key == 1 || key == 2) return <View />;
                return (
                  <View>
                    <Text style={styles.text} key={key}>
                      {obj.title}:{obj.level}
                    </Text>
                  </View>
                );
              })}
            </View>
          );
        }}
        sections={dataSet}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18
  }
});
