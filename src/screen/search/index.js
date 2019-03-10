import React from "react";
import { View, FlatList } from "react-native";
import { SearchBar, Header } from "react-native-elements";
import { searchPlace } from "../../api";
import { ListItem } from "react-native-elements";

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
    console.log(item);
  };
  renderItem = ({ item }) => {
    return (
      <ListItem
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
              navigate("Home");
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
        />
        <FlatList data={results} renderItem={this.renderItem} />
      </View>
    );
  }
}
