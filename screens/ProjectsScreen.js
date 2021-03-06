import React from "react";
import styled from "styled-components";
import {
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
} from "react-native";

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

tapBackground = () => {
  Keyboard.dismiss();
};
class ProjectsScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
    tabBarVisible: false,
  };
  render() {
    return (
      <Container>
        <Modal>
          <Logo source={require("../assets/deekey.png")} />
          <Text>Well cleaned & proven quality</Text>
          <TextCapt>HEADQUARTERS:</TextCapt>
          <TextChild>Jl. Gudang Selatan No. 22</TextChild>
          <TextChild>Bandung, Jawa Barat 40113</TextChild>
          <TextCapt>OUTLET #1: </TextCapt>
          <TextChild>Jl. Sederhana No.63</TextChild>
          <TextChild>Bandung, Jawa Barat 40161</TextChild>
          <TextCapt>OUTLET #2:</TextCapt>
          <TextChild>Jl.Sukanegara No.7 Antapani</TextChild>
          <TextChild>Bandung, Jawa Barat 40291</TextChild>
          <TextCapt>OUTLET #3:</TextCapt>
          <TextChild>Jl. Citarum No. 12</TextChild>
          <TextChild>Bandung, Jawa Barat 40115</TextChild>
          <TextCapt>HOTLINE:</TextCapt>
          <TextChild>082321562160</TextChild>
          <TextCapt>LINE:</TextCapt>
          <TextChild>deekeyshoesgarage</TextChild>
          <TextCapt>INSTAGRAM</TextCapt>
          <TextChild>deekeyshoesgarage</TextChild>
          <TextCapt>WEBSITE</TextCapt>
          <TextChild>deekeyshoesgarage</TextChild>
        </Modal>
      </Container>
    );
  }
}
export default ProjectsScreen;

const Container = styled.View`
position: absolute;
top: 0;
left: 0;
width: 100%
height: 100%
background: rgba(0,0,0,0.75)
justify-content: center;
align-items: center;
flex: 1
`;
const Modal = styled.View`
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: white;
  align-items: center;
`;
const Logo = styled.Image`
  width: 200px;
  height: 60px;
  align-items: center;
`;
const TextCapt = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  width: 200px;
  text-align: left;
  color: black;
`;
const Text = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  width: 200px;
  text-align: center;
  color: #b8bece;
`;

const TextChild = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  width: 200px;
  text-align: left;
  color: #b8bece;
`;
const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px
  color: #3c4560
  margin-top: 20px
  padding-left: 14px;
`;
const Button = styled.View`
background: green
width: 295px;
height: 50px;
justify-content: center
align-items: center;
border-radius: 10px;
box-shadow: 0 10px 20px #c2cbff
margin-top: 20px;
`;

const ButtonText = styled.Text`
color: white
font-weight: 600
font-size: 20px
text-transform: uppercase
`;
