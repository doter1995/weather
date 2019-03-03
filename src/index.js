import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screen/home";
import ProfileScreen from "./screen/profile";
import NotificationsScreen from "./screen/notification";

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    contentComponent: NotificationsScreen,
    drawerPosition: "right"
  }
);
const App = createAppContainer(MainNavigator);

export default App;
