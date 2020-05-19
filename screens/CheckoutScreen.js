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
class CheckoutScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
    tabBarVisible: false,
  };
  render() {
    return (
      <Container>
        <TouchableWithoutFeedback onPress={tapBackground}>
          <Modal>
            <Logo source={require("../assets/deekey.png")} />
            <Text>Order Placement. Invest for cleanliness</Text>
            <TextInput placeholder="Your Name" maxLength={40} />
            <TextInput placeholder="Your E-Mail" maxLength={40} />
            <TextInput placeholder="Your Phone Number" maxLength={40} />
            <TextInput placeholder="Your Address" maxLength={40} />
            <TextInput placeholder="Your Name" maxLength={40} />
            <TextInput placeholder="Your Name" maxLength={40} />
            <Button>
              <ButtonText>SUBMIT</ButtonText>
            </Button>
          </Modal>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}
export default CheckoutScreen;

const Container = styled.View`
position: absolute;
top: 0;
left: 0;
width: 100%
height: 100%
background: rgba(0,0,0,0.75)
justify-content: center;
align-items: center;
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
  height: 66px;
`;
const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 200px;
  text-align: center;
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
