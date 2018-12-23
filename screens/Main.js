import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/Home";
import Settings from "./screens/Settings";

const AppNavigator = createStackNavigator({
   Home: HomeScreen,
   Details: Settings
  }, 
  {
      initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);