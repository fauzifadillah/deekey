import React from "react";
import styled from "styled-components";

class CheckoutScreen extends React.Component {
  render() {
    return (
      <Container>
        <Modal>
          <Logo />
          <Text />
          <TextInput />
          <Button />
        </Modal>
      </Container>
    );
  }
}
export default CheckoutScreen;

const Container = styled.View`
position: absolute;
top: 0;
left: 0
width: 100%
height: 100%
background: rgba(0,0,0,0.75)
`;
const Modal = styled.View`
  width: 335px;
  height: 370px;
  background: white;
`;
const Logo = styled.Image``;
const Text = styled.Text``;
const TextInput = styled.TextInput``;
const Button = styled.View``;
