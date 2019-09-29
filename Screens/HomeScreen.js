/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,Dimensions,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { products } from "../dummy";
import MasonryProducts from "./components/MasonryProducts";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants0/";
import { Button, Select, Input, Header, Switch } from "../Components/";

const { width } = Dimensions.get("screen");

import {   Item } from 'native-base';
import { SearchBar } from 'react-native-elements';

import ProductCard from '../Components/scroll'
import Categories from '../Components/Categories'
import Tutor from '../Components/Tutor'
import {  Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import {   List } from 'native-base';
//argon
import { articles, Images } from "../constants0/";
import { Card } from "../Components/";


const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Music Album",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
    price: "$125"
  },
  {
    title: "Events",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
    price: "$35"
  }
];

class HomeScreen extends React.Component {
  static navigationOptions = {
header: null,
};
state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
render(){
  const { search } = this.state;
  return (
    <View style={{flex:1}}>
    <Block style={{ marginBottom: theme.SIZES.BASE }}>
      <Header tabs={tabs.categories} search title="Modares App" navigation={this.props.navigation} />
    </Block>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>

            <View style={styles.sectionContainer1} onPress={()=>{this.props.navigation.navigate('Offers')}}>
              <Text style={styles.sectionTitle}>Top Offer</Text>
  <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Offers')}}>
              <Text style={{fontSize:13,color:'#118DF0'}}>See all</Text>

            </TouchableOpacity>
            </View>
  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
  <ScrollView horizontal={true}>
              <Block flex row>
              <Card
                item={articles[1]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={articles[2]} />
            </Block>
            </ScrollView>
</Block>


<View style={styles.sectionContainer1} onPress={()=>{this.props.navigation.navigate('Offers')}}>
  <Text style={styles.sectionTitle}>Top Tutor</Text>
  <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Offers')}}>
              <Text style={{fontSize:13,color:'#118DF0'}}>See all</Text>

            </TouchableOpacity>
</View>
<List>
<Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />
<Tutor name="samer" price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />
</List>
          </View>
        </ScrollView>
    </View>
  );
}

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
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

export default HomeScreen;
