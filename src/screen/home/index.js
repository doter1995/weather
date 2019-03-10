import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import { AsyncStorage } from "react-native";
import { Header, Button } from "react-native-elements";
import { getWeather } from "../../api";
import WeatherToday from "./weatherToday";
export default class App extends React.Component {
  state = {
    cityName: "正在定位中",
    cityCode: "1001",
    weatherData: []
  };
  componentDidMount = async () => {
    const cityCode = await AsyncStorage.getItem("cityCode");
    const cityName = await AsyncStorage.getItem("cityName");
    this.setState({ cityCode, cityName });
    const weatherData = await getWeather(cityCode);
    this.setState({ weatherData: weatherData });
  };
  render() {
    const { navigate } = this.props.navigation;
    const { cityName, weatherData } = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{
            icon: "add",
            color: "#fff",
            onPress: () => navigate("Search", { name: "doter" })
          }}
          centerComponent={{
            text: cityName,
            style: { color: "#fff", fontSize: 20 }
          }}
          rightComponent={{
            icon: "settings",
            color: "#fff",
            onPress: () => this.props.navigation.openDrawer()
          }}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.middle}>
            <WeatherToday data={weatherData[0] || []} />
          </View>
          <View style={styles.bottom} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E3DA"
  },
  header: {
    height: 24,
    alignItems: "center"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#383A3F"
  },
  middle: {
    flex: 1
  }
});
