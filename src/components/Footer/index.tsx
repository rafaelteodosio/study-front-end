import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, UserButton, CardIcon, GraphIcon } from "./styles";

export function Footer({ navigation }: any) {
  return (
    <Container>
      <UserButton onPress={() => navigation.navigate("Home")}>
        <CardIcon name="home-outline" size={RFValue(28)} />
      </UserButton>
      <UserButton>
        <CardIcon name="md-school-outline" size={RFValue(28)} />
      </UserButton>
      <UserButton onPress={() => navigation.navigate("InvestmentPage")}>
        <GraphIcon name="bar-graph" size={RFValue(28)} />
      </UserButton>
      <UserButton>
        <CardIcon name="ios-wallet-outline" size={RFValue(28)} />
      </UserButton>
      <UserButton>
        <CardIcon name="notifications-outline" size={RFValue(28)} />
      </UserButton>
    </Container>
  );
}
