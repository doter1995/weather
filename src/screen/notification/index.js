import React, { Component } from "react";
import { Button, View } from "react-native";

export default class index extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="home"
          onPress={() => navigate("Home", { name: "Jane" })}
        />
      </View>
    );
  }
}
