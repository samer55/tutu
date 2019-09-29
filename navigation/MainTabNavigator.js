import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import StartScreen from '../Screens/StartScreen';
import FindTutor from '../Screens/Find';
import ProductScreen from "../Screens/ProductScreen";
import HomeScreenContainer from "../Screens/Categories";
import ProfileScreen from "../Screens/ProfileScreen";
import Offers from "../Screens/Offers";
import Filter from "../Screens/Filter";
import Date from "../Screens/date";
import Bookings from "../Screens/Bookings";

import Book from "../Screens/Book";
import Success from "../Screens/Success";
import MessagesScreen from "../Screens/MessagesScreen";
import Notification from "../Screens/Notification";
import Saved from "../Screens/Saved";

import Profile from "../Screens/Profile";
import Elements from "../Screens/Elements";


const SearchStack = createStackNavigator({


    Home: HomeScreen,
    Categories:HomeScreenContainer,
    Book:Book,
Success:Success,
Offerscreen:ProductScreen,
tutor:ProfileScreen,
Date:Date,
  Find:FindTutor,
  Filter:Filter,
  Offers:Offers,
  Start:StartScreen,
  Notification:Notification,

});



SearchStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Icon name="md-search" size={25} color={tintColor} />
)
};
const OrderStack = createStackNavigator({
  Booking:Bookings,
  Home: HomeScreen,

});



OrderStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Icon name="ios-bookmarks" size={25} color={tintColor} />
)
};
const ChatStack = createStackNavigator({
  MessagesScreen:MessagesScreen,
  Home: HomeScreen,

});



ChatStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Icon name="ios-chatbubbles" size={25} color={tintColor} />
)
};
const SavedStack = createStackNavigator({
  Saved:Saved,
  Home: HomeScreen,

});



SavedStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Icon name="ios-heart" size={25} color={tintColor} />
)
};
const ProfileStack = createStackNavigator({
  UserScreen:Profile,
  Home: HomeScreen,

});



ProfileStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Icon name="md-contact" size={25} color={tintColor} />
)
};
export default createBottomTabNavigator({
  Search:SearchStack,
  Order:OrderStack,
  Chat:ChatStack,
  Saved:SavedStack,
  Profile:ProfileStack
},
);
