import React from "react";
import { View, FlatList } from "react-native";
import { SearchBar, Header } from "react-native-elements";
import { searchPlace } from "../../api";
import { ListItem } from "react-native-elements";
import { addCity } from "../../api/asyncStorage";
export default class App extends React.Component {
  state = {
    search: "",
    results: []
  };

  updateSearch = search => {
    this.setState({ search });
    searchPlace(search).then(results => {
      this.setState({ results });
    });
  };
  selectPlace = item => {
    this.props.navigation.navigate("CityList", item);
  };
  renderItem = ({ item }) => {
    return (
      <ListItem
        style={{ boder: "5px solid red" }}
        title={item.provinceZh + "-" + item.leaderZh + "-" + item.cityZh}
        onPress={() => this.selectPlace(item)}
      />
    );
  };

  render() {
    const { search, results } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header
          leftComponent={{
            icon: "arrowleft",
            color: "#fff",
            type: "antdesign",
            onPress: () => {
              navigate("CityList");
            }
          }}
          centerComponent={{
            text: "选择区县",
            style: { color: "#fff", fontSize: 20 }
          }}
        />
        <SearchBar
          placeholder="请输入县区名"
          onChangeText={this.updateSearch}
          value={search}
          lightTheme
        />
        <FlatList data={results} renderItem={this.renderItem} />
      </View>
    );
  }
}
