import React from "react";
import MessagesScreenPresenter from "./MessagesScreenPresenter";
import {
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from "react-native";
import styled from "styled-components";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../../constants0/";
import { Button, Select, Input, Header, Switch } from "../../Components/";

import Message from "../components/Message";
const Container = styled.View`
  background-color: white;
  flex: 1;
`;
export default class extends React.Component {
  constructor(props) {
    super(props);

    this.offset = 0;

    this.state = {
      scrollOffset: new Animated.Value(0),
      titleWidth: 0,
    };
  }
  static navigationOptions = {
header: null,
};
componentDidMount() {
  this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
}

onScroll = e => {
  const scrollSensitivity = 4 / 3;
  const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
  this.state.scrollOffset.setValue(offset);
};
  render() {
    const { scrollOffset } = this.state;
const screenWidth = Dimensions.get('window').width;

    return (
      <Container
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 15
        }}
      >
      <Block style={{ marginBottom: theme.SIZES.BASE }}>
        <Header  title="Connect" navigation={this.props.navigation} />
      </Block>
           <ScrollView style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ width: '100%' }}
          onScroll={this.onScroll}
          scrollEventThrottle={20}>
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in ..."
          unread
          pendingRead={2}
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in in this app modares appp"
          unread
          pendingRead={2}
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in this app modares appp..."
          unread
          pendingRead={2}
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in in this app modares appp"
          delivered
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in in this app modares appp"
          readReceipt
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in in this app modares apppin this app modares appp"
          readReceipt
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in in this app modares apppin this app modares appp"
          readReceipt
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in in this app modares apppin this app modares appp"
          readReceipt
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in in this app modares apppin this app modares appp"
          readReceipt
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in in this app modares apppin this app modares appp"
          readReceipt
        />
        <Message
          userAvatar={require("../../assets/images/smAvatar.png")}
          name="Keith Mills"
          timeAgo="24m ago"
          preview="Hey, would you be interested in in this app modares apppin this app modares appp"
          readReceipt
        />
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  listItem: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
