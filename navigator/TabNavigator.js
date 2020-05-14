import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SectionSceen from "../screens/SectionScreen";
import { Ionicons } from "@expo/vector-icons";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionSceen,
    Checkout: CheckoutScreen,
  },
  {
    mode: "modal",
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  console.log(routeName);
  if (routeName == "Section") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible: tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen,
});

CoursesStack.navigationOptions = {
  tabBarLabel: "Treatment",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const ProjectsStack = createStackNavigator({
  Projects: ProjectsScreen,
});

ProjectsStack.navigationOptions = {
  tabBarLabel: "About",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-information-circle-outline"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProjectsStack,
});

export default TabNavigator;
