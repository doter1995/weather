import React, { Component } from "react";
import { Text, View, SectionList, StyleSheet } from "react-native";

export default class TempDays extends Component {
  render() {
    let data = this.props.data;
    if (!data) {
      data = [];
    }
    const dataSet = data.map(item => ({ data: [item] }));
    return (
      <SectionList
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: 200,
                alignItems: "left"
              }}
            >
              <Text style={{ fontSize: 14 }} key={index}>
                {item.day}
              </Text>
              <Text style={{ fontSize: 14 }} key={index}>
                {item.tem2 == item.tem1
                  ? `当前：${item.tem1}`
                  : `${item.tem2}-${item.tem1}`}
              </Text>
              <Text style={{ fontSize: 14 }} key={index}>
                {item.win[0]}:{item.win_speed}
              </Text>
              {item.air != undefined ? (
                <View>
                  <Text>空气质量-{item.air}</Text>
                  <Text>{item.air_tips}</Text>
                </View>
              ) : (
                <View />
              )}
              {item.index.map((obj, key) => {
                if (key == 1) return <View />;
                return (
                  <View>
                    <Text style={{ fontSize: 14 }} key={key}>
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
  }
});
