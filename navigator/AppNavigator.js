import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";
import CheckoutScreen from "../screens/CheckoutScreen";
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
    Checkout: CheckoutScreen,
  },
  {
    mode: "modal",
  }
);

export default createAppContainer(TabNavigator);
