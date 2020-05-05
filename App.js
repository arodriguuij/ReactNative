import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImagesScreen from "./src/screens/ImagesScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImagesScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Alejandro's App",
    },
  }
);

export default createAppContainer(navigator);
