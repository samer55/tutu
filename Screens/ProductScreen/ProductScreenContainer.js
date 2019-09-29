import React from "react";
import { TouchableOpacity, View, Platform } from "react-native";
import ProductScreenPresenter from "./ProductScreenPresenter";
import Icon from 'react-native-vector-icons/Ionicons'
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../../Constants/Layout";
import Colors from "../../Constants/Colors";
import UserPartials from "../components/UserPartials";
import { StatusBar } from "react-native";
import { Header } from 'react-native-elements'

const getHeight = () =>
  Layout.window.height <= 667
    ? Layout.window.height / 2.8
    : Layout.window.height / 2.3;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ScrollView = styled.ScrollView``;

const Image = styled.Image`
  width: ${Layout.window.width};
  height: ${getHeight()};
  position: relative;
`;

const DataContainer = styled.View`
  padding-horizontal: 20px;
`;

const TimeLocation = styled.Text`
  color: ${Colors.greyColor};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const NamePrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NamePriceText = styled.Text`
  font-size: 24px;
  color: ${Colors.blackColor};
  font-weight: 600;
`;

const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: rgba(151, 151, 151, 0.1);
  margin-bottom: 25px;
`;

const Description = styled.Text`
  margin-bottom: 25px;
  color: ${Colors.greyColor};
`;

const ReadMore = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 40px;
`;

export default class extends React.Component {
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      header: null,
  };
  state = {
    counter: 1,
       isLoading: true,puid:'',
       isEmpty: false,
       editdate:'',
       isFinished: false,
    edit:"",

     modalVisible: false,
      modalVisible1: false,  isDateTimePickerVisible: false,goals:'',
      product:this.props.navigation.state.params.product,
       selected2: undefined
  }
  constructor (props) {
      super(props);
      this.state = {
      };
      this.product =this.props.navigation.state.params.product
  }
  static navigationOptions = {
  header:null
  };

  render() {
    return <Container>

      <StatusBar barStyle="light-content" />
      <Header backgroundColor="white"
        leftComponent=<TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{justifyContent:'center',alignItems:'center'}}>
        <Icon name="ios-arrow-back" size={30} color='#118DF0' />

        </TouchableOpacity>
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
        <Swiper
          style={{ height: getHeight(), marginBottom: 20 }}
          activeDotColor="white"
          dotColor="rgba(255, 255, 255, 0.3)"
        >
          <Image
            source={{
              uri:
                "https://www.blackboard.com/images/223/Analytics-Illustrations_rv1_Analytics-for-Learn_tcm223-70032.jpg"
            }}
          />

        </Swiper>
        <DataContainer>
          <TimeLocation>irbid, Jordan • 2h ago</TimeLocation>
              <NamePrice>
          <NamePriceText>$49/lesson</NamePriceText>
  </NamePrice>
          <NamePrice>
            <NamePriceText>Teach how to be wow ,and let the wow come to you ;)</NamePriceText>
          </NamePrice>
          <Divider />
          <Description>
            Selling my 2017 DJI Spark. Barely used, pretty new in condition and
            its the “Fly More Combo". No Negotiations please.
          </Description>
          <Description>
            Seize the Moment. Meet Spark, a mini drone that features all of DJI's
            signature technologies, allowing you to seize the moment whenever you
            feel inspired.
          </Description>
          <ReadMore>Read More</ReadMore>
          <UserPartials
            name="Samer Alsukhni"
            rating={5.0}
            onPress={()=>{this.props.navigation.navigate('tutor')}}
            avatarUrl={{uri:'https://www.blackboard.com/images/223/Analytics-Illustrations_rv1_Analytics-for-Learn_tcm223-70032.jpg'}}
          />
        </DataContainer>
      </ScrollView>
    </Container>;
  }
}
