import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
export default class index extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Avatar
          rounded
          size={100}
          title="M"
          containerStyle={{ marginTop: 60 }}
        />
        <Text style={{ marginTop: 10 }}>当前版本：0.0.1</Text>
        <View style={styles.operations}>
          <Button title="主题设置" type="outline" style={styles.operationsBt} />
          <Button title="给个好评" type="outline" style={styles.operationsBt} />
          <Button title="关于作者" type="outline" style={styles.operationsBt} />
          <Button title="在线留言" type="outline" style={styles.operationsBt} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  operations: {
    marginTop: 25,
    flex: 1,
    width: "90%"
  },
  operationsBt: {
    marginBottom: 10
  }
});
