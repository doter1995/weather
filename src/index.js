import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screen/home";
import ProfileScreen from "./screen/profile";
import NotificationsScreen from "./screen/notification";
import SearchScreen from "./screen/search";
import CityListScreen from "./screen/cityList";
const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Search: { screen: SearchScreen },
    CityList: { screen: CityListScreen }
  },
  {
    contentComponent: NotificationsScreen,
    drawerPosition: "right"
  }
);
const App = createAppContainer(MainNavigator);

export default App;
