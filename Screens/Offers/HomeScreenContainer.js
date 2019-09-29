import React from "react";
import HomeScreenPresenter from "./HomeScreenPresenter";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from "styled-components";
import { products } from "../../dummy";
import Service from "../../Components/servicelist";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export default class extends React.Component {
  static navigationOptions = {
    title: "Offers",
    headerRight: (
      <Button
   icon={
     <Icon
       name="ios-funnel"
       size={30}
       color="black"
     />
   }
  onPress={() => this.props.navigation.navigate("Filter")}
   type="clear"
 />

   ),
  };

  render() {
    return (
      <Container>
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='I will Teach you calculus one in one lesson' location="Irbid,30 Streets" subject="Mathematics" price="30" tutor="Ahmed Sami" />
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='I will Teach you calculus one in one lesson' location="Irbid,30 Streets" subject="Mathematics" price="30" tutor="Ahmed Sami" />
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='I will Teach you calculus one in one lesson' location="Irbid,30 Streets" subject="Mathematics" price="30" tutor="Ahmed Sami" />
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='I will Teach you calculus one in one lesson' location="Irbid,30 Streets" subject="Mathematics" price="30" tutor="Ahmed Sami" />
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='I will Teach you calculus one in one lesson' location="Irbid,30 Streets" subject="Mathematics" price="30" tutor="Ahmed Sami" />
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='I will Teach you calculus one in one lesson' location="Irbid,30 Streets" subject="Mathematics" price="30" tutor="Ahmed Sami" />

      </Container>

    );
  }
}
