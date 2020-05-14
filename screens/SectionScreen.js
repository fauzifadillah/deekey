import React from "react";
import styled from "styled-components";
import { StatusBar, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

function getCardOtherWidth(screenWidth) {
  var cardWidth = screenWidth - 40;

  if (screenWidth >= 768) {
    cardWidth = (screenWidth - 60) / 2;
  }

  if (screenWidth >= 1024) {
    cardWidth = (screenWidth - 80) / 3;
  }
  return cardWidth;
}
class SectionSceen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }
  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <ScrollView>
        <Container>
          <StatusBar hidden />
          <Cover>
            <Image source={section.image} />
            <Wrapper>
              <Logo source={section.logo} />
              <Subtitle>{section.subtitle}</Subtitle>
            </Wrapper>
            <Title>{section.title}</Title>
            <Caption>{section.caption}</Caption>
          </Cover>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{ position: "relative", alignItems: "flex-end" }}
          >
            <CloseView>
              <Ionicons
                name="ios-close"
                size={36}
                color="black"
                style={{ marginTop: -2 }}
                zIndex="200"
              />
            </CloseView>
          </TouchableOpacity>
          <Container>
            <TitleContent>{section.title} TREATMENT</TitleContent>
            <DescContent>{section.detailTreatment}</DescContent>
            <DescContent>TIME: {section.timeTreatment}</DescContent>
            <DescContent>PRICE: {section.price}</DescContent>
            <GambarSepatu
              source={section.gambarInfo}
              resizemode="contain"
              style={{ width: screenWidth, height: screenWidth / 3.5 }}
            />

            <TouchableOpacity
              style={{ marginTop: 0 }}
              onPress={() => {
                this.props.navigation.navigate("Checkout");
              }}
            >
              <Purchase>
                <Order>ORDER</Order>
              </Purchase>
            </TouchableOpacity>
          </Container>
        </Container>
      </ScrollView>
    );
  }
}

export default SectionSceen;

const TitleContent = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: 700;
  margin: 10px 14px 10px 14px;
`;

const DescContent = styled.Text`
  font-size: 17px;
  color: grey;
  font-weight: 500;
  margin: 2px 14px;
`;

const GambarSepatu = styled.Image`
  margin: 6px;
  padding: 6px;
  position: relative;
`;
const Purchase = styled.View`
  width: 100%;
  height: 34px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.01);
  margin-bottom: 1px;
`;
const Order = styled.Text`
  color: green;
  font-size: 17px;
  font-weight: 800;
`;

const Content = styled.View`
  height: 1000px;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Cover = styled.View`
  height: 325px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 36px;
  color: white;
  font-weight: bold;
  width: 210px;
  position: absolute;
  top: 78px;
  left: 20px;
  text-transform: uppercase;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 34px;
  height: 34px;
  background: white;
  border-radius: 16px;
  ${"" /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); */}
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-top: 2px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
width: 24px
height: 24px
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
