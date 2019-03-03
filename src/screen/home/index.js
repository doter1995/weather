import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { getCity, getCityCode, getCityName, getWeather } from "../../api";
export default class App extends React.Component {
  state = {
    city: {
      name: "正在定位中",
      code: "1001"
    },
    weatherData: []
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        getCity(position)
          .then(data => data.regeocode)
          .then(regeocode => {
            const city = this.state.city;
            const cityCode = getCityCode(regeocode);
            this.setState({
              city: {
                name: getCityName(regeocode),
                code: cityCode
              }
            });
            this.getWeatherData(cityCode);
          })
          .catch(e => console.log(e));
      },
      error => {
        this.setState({ city: { ...this.state.city, name: "定位失败" } });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  getWeatherData(cityCode) {
    getWeather(cityCode).then(data => {
      this.setState({ weatherData: data });
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    const { city, weatherData } = this.state;
    return (
      <View style={styles.container}>
        <Text>{city.name}</Text>
        <Text>{city.code}</Text>
        {weatherData.map(data => {
          return (
            <Text key={data.date}>
              {data.wea}-{data.date}
            </Text>
          );
        })}
        <Button
          title="Go to My profile"
          onPress={() => navigate("Profile", { name: "Jane" })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
