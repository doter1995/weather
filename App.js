import App from "./src/index";
import React from "react";
import { getCity, getCityCode, getPosition, getCityName } from "./src/api";
import { AppLoading } from "expo";
import { AsyncStorage } from "react-native";

export default class AppStrart extends React.Component {
  state = {
    isReady: false,
    cityData: null,
    name: ""
  };
  startAsync = async () => {
    const position = await getPosition(navigator.geolocation);
    const cityData = await getCity(position);
    this.setState({ cityData });
    const cityCode = getCityCode(cityData.regeocode);
    await AsyncStorage.setItem("cityCode", cityCode);
    await AsyncStorage.setItem("cityName", getCityName(cityData.regeocode));
  };
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.startAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return <App cityData={this.state.cityData} />;
  }
}
