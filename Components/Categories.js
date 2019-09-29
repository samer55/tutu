import React, {Fragment} from 'react';

import { TouchableWithoutFeedback,View ,Text} from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../Constants/Layout";
import Colors from "../Constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons'

const Container = styled.View`
  margin-bottom: 20px;
`;

const ImageContainer = styled.View`
  box-shadow: 0px 10px 15px rgba(60, 60, 60, 0.4);
  width: ${70};
  border-radius: 15px;
  elevation: 4;
  margin-bottom: 1px;
  min-height:100px;
`;


const Price = styled.Text`
  font-weight: 600;
  margin-left: 10px;
  color: ${Colors.blackColor};
`;

const Categories = ({ imgSrc, name, price, navigation,icon }) => (
  <TouchableWithoutFeedback onPress={() => navigation.navigate("Categories")}>
    <Container style={{justifyContent:'space-around',alignItems:'center'}}>
    <View style={{backgroundColor:'#118DF0',width:100,height:100,borderRadius:12,justifyContent:'center',alignItems:'center'}}>
    <Icon name={icon} size={35} color='white' />

    </View>
      <Text  style={{fontWeight:'500',fontSize:15,marginVertical:10}}>{name}</Text>
    </Container>
  </TouchableWithoutFeedback>
);

Categories.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
export default withNavigation(Categories);
