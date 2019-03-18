import React from "react";
import { View, FlatList } from "react-native";
import { Header, ButtonGroup, ListItem, Icon } from "react-native-elements";
import { getCity, addCity, removeCity } from "../../api/asyncStorage";

export default class App extends React.Component {
  state = {
    cityList: []
  };
  componentDidMount = async () => {
    let cityList = await getCity();
    this.setState({ cityList });
  };
  shouldComponentUpdate = async (nextProps, nextState) => {
    let cityList = await getCity();
    nextState.cityList = cityList;
  };
  componentWillReceiveProps = async newProps => {
    const cityItem = newProps.navigation.state.params;
    let cityList = this.state.cityList;
    if (cityItem.id) {
      cityList.push(cityItem);
      addCity(cityItem);
      this.setState({ cityList });
    }
  };
  renderButtons = () => {
    const buttons = ["Hello", "World", "Buttons"];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 100 }}
      />
    );
  };
  removeCityById = async id => {
    let cityList = this.state.cityList.filter(item => item.id !== id);
    await removeCity(id);
    this.setState({ cityList });
  };
  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;
    const buttons = this.renderButtons();

    return (
      <ListItem
        style={{ boder: "5px solid red", backgroundColor: "#f00" }}
        title={item.provinceZh + "-" + item.leaderZh + "-" + item.cityZh}
        onPress={() => navigate("Home", item)}
        rightIcon={
          <Icon
            type="antdesign"
            name="closecircle"
            color="#f00"
            onPress={() => {
              this.removeCityById(item.id);
            }}
          />
        }
      />
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    const { cityList } = this.state;
    return (
      <View>
        <Header
          leftComponent={{
            icon: "arrowleft",
            color: "#fff",
            type: "antdesign",
            onPress: () => {
              navigate("Home");
            }
          }}
          centerComponent={{
            text: "收藏的城市",
            style: { color: "#fff", fontSize: 20 }
          }}
          rightComponent={{
            icon: "plus",
            color: "#fff",
            type: "antdesign",
            onPress: () => {
              navigate("Search");
            }
          }}
        />
        <FlatList data={cityList} renderItem={this.renderItem} />
      </View>
    );
  }
}
