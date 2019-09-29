import React from "react";
import ProfileScreenPresenter from "./ProfileScreenPresenter";
import SwipeablePanel from 'rn-swipeable-panel';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { Platform ,ScrollView,Dimensions} from "react-native";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import Colors from "../../Constants/Colors";
import ProfileLink from "../components/ProfileLink";
import Tutors from "../components/Tutors";
import Message from "../components/Message";
import Icon from 'react-native-vector-icons/Ionicons'
import { Button,Header } from 'react-native-elements';

import {  List, ListItem,  Left, Body, Right,Thumbnail,Text } from 'native-base';
const {width, height} = Dimensions.get('window')
import Date from '../date'
const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const ProfileHeader = styled.View`
  box-shadow: 0px 5px 5px rgba(60, 60, 60, 0.1);
  elevation: 4;
  background-color: white;
  padding: 30px 20px;
  padding-top: 65px;
  align-items: center;
  width: 100%;
`;
const Des = styled.View`
  box-shadow: 0px 5px 5px rgba(60, 60, 60, 0.1);
  elevation: 4;
  background-color: white;
  padding: 30px 20px;
  padding-top: 20px;
  align-items: center;
  width: 100%;
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
const AvatarContainer = styled.View`
  margin-bottom: 20px;
`;

const Name = styled.Text`
  font-weight: 600;
  color: ${Colors.blackColor};
  font-size: 24px;
  margin-bottom: 5px;
`;

const Bio = styled.Text`
  margin-bottom: 20px;
  color: ${Colors.greyColor};
`;
const Description = styled.Text`
  margin-bottom: 25px;
  color: ${Colors.greyColor};
`;
const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(151, 151, 151, 0.2);
  margin-bottom: 30px;
`;

const DataContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const DataPointContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-horizontal:20;
`;

const DataPointNumber = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 3.5px;
  align-items: center;
`;

const DataPointName = styled.Text`
  color: ${Colors.greyColor};
  font-size: 12px;
`;

const LinksList = styled.ScrollView``;

export default class extends React.Component {
  constructor(props) {
         super(props);
         this.state = {
             swipeablePanelActive: false
         };
     }
     static navigationOptions = {
   header: null,
   };
     componentDidMount = () => {
     };

     openPanel = () => {
         this.setState({ swipeablePanelActive: true });
     };

     closePanel = () => {
         this.setState({ swipeablePanelActive: false });
     };


  render() {
    return(
      <Container>
      <Header backgroundColor="#ffffff"
      leftComponent=<TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{justifyContent:'center',alignItems:'center'}}>
      <Icon name="ios-arrow-back" size={30} color='#118DF0' />

      </TouchableOpacity>
  />
      <ScrollView>
      <ProfileHeader>
        <AvatarContainer>
          <Avatar
            size="lg"
            source={{uri:'https://www.best4geeks.com/wp-content/uploads/2018/07/30-cute-girl-facebook-profile-picture-1.jpg'}}
          />
        </AvatarContainer>
        <Name>Alice Daniela</Name>
        <Bio>English Language. 7 Year Experience</Bio>
        <Divider />
        <DataContainer>
          <DataPointContainer>
            <DataPointNumber>53</DataPointNumber>
            <DataPointName>Rating</DataPointName>
          </DataPointContainer>
          <DataPointContainer>
            <DataPointNumber>92</DataPointNumber>
            <DataPointName>Reviews</DataPointName>
          </DataPointContainer>
          <DataPointContainer>
            <DataPointNumber>24</DataPointNumber>
            <DataPointName>Yrs old</DataPointName>
          </DataPointContainer>
        </DataContainer>


      </ProfileHeader>
        <Divider />
      <Des>
      <View style={{flexDirection:'row',width:'100%',height:50}}>
      <View style={{flex:1,backgroundColor:'white',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{fontSize:15,fontWeight:'500',color:'#118DF0'}}>Rate</Text>
<Text style={{fontSize:17}}>$30 <Text note style={{color:'#A9A9B0',fontSize:12}}>Per Hour</Text></Text>
      </View>

      <View style={{flex:1,backgroundColor:'white',justifyContent:'space-between',alignItems:'center'}}>
    <Text style={{fontSize:15,fontWeight:'500',color:'#118DF0'}}>Completed</Text>
    <Text style={{fontSize:17}}>52 <Text note style={{color:'#A9A9B0',fontSize:12}}>Lessons</Text></Text>
      </View>
            </View>

  </Des>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Biography</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle1}>School/University:</Text>
        <Text style={styles.school}>Yarmouk University</Text>
        <Text style={styles.sectionTitle1}>Major:</Text>
        <Text style={styles.school}>English</Text>
        <Text style={styles.sectionTitle1}>Certification:</Text>
        <Text style={styles.school}>Best Teacher in Irbid</Text>

      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Schedule</Text>
      </View>
      <View style={styles.sectionContainer}>
      <ScrollView horizontal={true} style={{paddingHorizontal:24}}>
      <Button
title="Saturday"
style={{marginHorizontal:10}}
/>
<Button
title="Sunday"
disabled
style={{marginHorizontal:10}}
/>
<Button
title="Tuesday"
style={{marginHorizontal:10}}
/>
<Button
title="Wednesday"
style={{marginHorizontal:10}}
/>
<Button
title="Thursday"
style={{marginHorizontal:10}}
/>
<Button
title="Friday"
style={{marginHorizontal:10}}
/>
</ScrollView>

      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.sectionTitle1}>Irbid,30 streets</Text>

      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Reviews</Text>

      </View>
      <View style={styles.sectionContainer}>
      <List>
                 <ListItem avatar>
                   <Left>
                     <Thumbnail source={{ uri: 'https://www.best4geeks.com/wp-content/uploads/2018/07/30-cute-girl-facebook-profile-picture-1.jpg' }} />
                   </Left>
                   <Body>
                     <Text>Kumar Pratik</Text>
                     <Text note>15 min ago .</Text>
                   </Body>
                   <Right>
                     <Text note>3:43 pm</Text>
                   </Right>
                 </ListItem>
                 <ListItem >

                   <Body>
                     <Text>Alice is realy good teacher to rasef sdfsfsf sdfsdfsdfsdf dsf sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdffsd</Text>
                   </Body>

                 </ListItem>

               </List>
               <Button
               title="Read All Reviews"
               buttonStyle={{width:'100%'}}
               style={{marginHorizontal:10}}
               />
</View>
    </ScrollView>
    <Des>
    <Tutors
      name="30$/hr"
      onPress={this.openPanel}
    />
    </Des>

 <SwipeablePanel
                     fullWidth
                     isActive={this.state.swipeablePanelActive}
                     onClose={this.closePanel}
                     onPressCloseButton={this.closePanel}
                 >
                <Date navigation={this.props.navigation}/>
                  				</SwipeablePanel>


    </Container>);
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionContainer1: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  school: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
    marginBottom:5,
  },
  sectionTitle1: {
    fontSize: 17,
    fontWeight: '500',
    color: '#A9A9B0',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
