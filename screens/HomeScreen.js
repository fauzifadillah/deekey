import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Platform,
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import Avatar from "../components/Avatar";
import CardOther from "../components/CardOther";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispathToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
    if (Platform.OS == "android") StatusBar.setBarStyle("light-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }
  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };
  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
          }}
        >
          <SafeAreaView>
            <ScrollView>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>{this.props.name}</Name>
                <Ionicons
                  name="ios-notifications"
                  size={32}
                  color="#4775f2"
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30,
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {/* {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))} */}
              </ScrollView>
              <Subtitle>DEEKEY TREATMENT</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("Section", {
                        section: card,
                      });
                    }}
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      caption={card.caption}
                      logo={card.logo}
                      subtitle={card.subtitle}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Subtitle>SPECIAL TREATMENT</Subtitle>

              {/* {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))} */}
              <ScrollView
                horizontal={false}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                <SpecialContainer>
                  {specialTreats.map((specialTreat, index) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      key={index}
                      onPress={() => {
                        this.props.navigation.push("Section", {
                          section: specialTreat,
                        });
                      }}
                    >
                      <CardOther
                        title={specialTreat.title}
                        image={specialTreat.image}
                        caption={specialTreat.caption}
                        logo={specialTreat.logo}
                        subtitle={specialTreat.subtitle}
                      />
                    </TouchableOpacity>
                  ))}
                </SpecialContainer>
              </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(HomeScreen);

const SpecialContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 10px;
`;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X",
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma",
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio",
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React",
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift",
  },
];

const cards = [
  {
    title: "AT HOME",
    image: require("../assets/cards/bg2.png"),
    subtitle: "FAST CLEANING IN YOUR HOME",
    caption: "1 HOUR",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "MIDSOLE & UPPER PART ONLY",
    timeTreatment: "1 HOUR",
    price: "IDR 35.000",
  },
  {
    title: "SUPER DETAILING",
    image: require("../assets/cards/bg2.png"),
    subtitle: "All-Sole + Extra Finishing",
    caption: "5-6 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "OUTSOLE, MIDSOLE, INSOLE, UPPER, LACES, EXTRA FINISHING",
    timeTreatment: "5-6 DAYS",
    price: "IDR 80.000",
  },
  {
    title: "PREMIUM",
    image: require("../assets/cards/bg3.png"),
    subtitle: "All-Sole",
    caption: "4-5 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "OUTSOLE, MIDSOLE, INSOLE, UPPER, LACES, DETAILING",
    timeTreatment: "4-5 DAYS",
    price: "IDR 65.000",
  },
  {
    title: "FAST CLEANING",
    image: require("../assets/cards/bg4.png"),
    subtitle: "Midsole & Upper part",
    caption: "1 HOUR",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "MIDSOLE & UPPER PART ONLY",
    timeTreatment: "1 HOUR",
    price: "IDR 35.000",
  },
];

const specialTreats = [
  {
    title: "UN-YELLOWING",
    image: require("../assets/cards/unyellowing.jpg"),
    subtitle: "REMOVE YELLOWING AREAS",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: null,
    detailTreatment: "REMOVE YELLOWING AREAS",
    timeTreatment: "7 DAYS",
    price: "IDR 70.000",
  },
  {
    title: "SWAP COLOR",
    image: require("../assets/cards/swap-color.jpg"),
    subtitle: "PRIMARY COLOR SWAP",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "PRIMARY COLOR SWAP",
    timeTreatment: "7 DAYS",
    price: "IDR 200.000",
  },
  {
    title: "REPAINT",
    image: require("../assets/cards/repaint.jpg"),
    subtitle: "ALL-COLOR REPAINT",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "ALL-COLOR REPAINT",
    timeTreatment: "7 DAYS",
    price: "IDR 180.000",
  },
  {
    title: "LEATHER REPAINT",
    image: require("../assets/cards/leather-repaint.png"),
    subtitle: "ALL-COLOR REPAINT",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "ALL-COLOR REPAINT",
    timeTreatment: "7 DAYS",
    price: "IDR 250.000",
  },
  {
    title: "CHECKER-BOARD REPAINT",
    image: require("../assets/cards/check-repaint.jpg"),
    subtitle: "ALL-COLOR REPAINT",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "ALL-COLOR REPAINT",
    timeTreatment: "7 DAYS",
    price: "IDR 200.000",
  },
  {
    title: "SOLE REPAINT",
    image: require("../assets/cards/repaint-sole.jpg"),
    subtitle: "MID-SOLE REPAINT",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "OUTSOLE REPAINT",
    timeTreatment: "7 DAYS",
    price: "IDR 120.000",
  },
  {
    title: "HAT REPAINT",
    image: require("../assets/cards/hat-repaint.jpg"),
    subtitle: "ALL-COLOR REPAINT",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: null,
    detailTreatment: "ALL-COLOR REPAINT",
    timeTreatment: "7 DAYS",
    price: "IDR 120.000",
  },
  {
    title: "BAG REPAINT",
    image: require("../assets/cards/bag-repaint.png"),
    subtitle: "ALL-COLOR REPAINT",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: null,
    detailTreatment: "ALL-COLOR REPAINT",
    timeTreatment: "7 DAYS",
    price: "START FROM IDR 250.000",
  },
  {
    title: "REPAIR",
    image: require("../assets/cards/bg4.png"),
    subtitle: "MINOR & MAJOR REPAIR",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "MINOR & MAJOR REPAIR",
    timeTreatment: "7 DAYS",
    price: "IDR 40.000 - IDR 100.000",
  },
  {
    title: "BAG CLEANING",
    image: require("../assets/cards/bag-cleaning.png"),
    subtitle: "ALL-TYPE BAGS",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: null,
    detailTreatment: "ALL-TYPE BAGS",
    timeTreatment: "7 DAYS",
    price: "IDR 100.000 - IDR 200.000",
  },
  {
    title: "HAT CLEANING",
    image: require("../assets/cards/hat-cleaning.png"),
    subtitle: "ALL-TYPE HATS",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: null,
    detailTreatment: "ALL-TYPE HATS",
    timeTreatment: "7 DAYS",
    price: "IDR 50.000",
  },
  {
    title: "CUSTOM",
    image: require("../assets/cards/custom.jpg"),
    subtitle: "CUSTOM SERVICE",
    caption: "7 DAYS",
    logo: require("../assets/deekey_white.jpg"),
    info: "Package included:",
    gambarInfo: require("../assets/treatment.png"),
    detailTreatment: "CUSTOM SERVICE",
    timeTreatment: "7 DAYS",
    price: "START FROM IDR 400.000",
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Didit Dhiyaksa",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Didit Dhiyaksa",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Didit Dhiyaksa",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
];
