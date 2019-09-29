import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import { Platform, TouchableWithoutFeedback,Text } from "react-native";
import Avatar from "./Avatar";
import Colors from "../../Constants/Colors";

const Container = styled.View`
  padding: 15px 10px;
  border-radius: 15px;
  border: ${props => (props.unread ? "1px solid #EBEBEB" : "0")};
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width:100%;
`;

const AvatarColumn = styled.View`
  margin-right: 20px;
`;

const Column = styled.View``;

const UnreadNumber = styled.View`
  background-color: ${Colors.tintColor};
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  padding: 2px;
  margin-left: 10px;
`;

const UnreadNumberText = styled.Text`
  color: white;
  font-size: 12px;
`;

const NameTime = styled.Text`
  color: ${Colors.greyColor};
`;

const PreviewContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  height: 26px;
  width:100%;
`;

const PreviewText = styled.Text`
  font-weight: ${props => (props.unread ? "600" : "400")};
  margin-right: ${props => (props.unread ? "0px" : "10px")};
`;

const IconContainer = styled.View`
  height: 26px;
`;

const Message = ({
  userAvatar,
  delivered = false,
  readReceipt = false,
  unread = false,
  pendingRead = 0,
  name,
  timeAgo,
  preview,
  navigation
}) => (
  <TouchableWithoutFeedback onPress={() => navigation.navigate("Thread")}>
    <Container unread={unread}>
      <AvatarColumn>
        <Avatar source={userAvatar} />
      </AvatarColumn>
      <Column>
        <NameTime>{`${name} • ${timeAgo}`}</NameTime>
        <PreviewContainer>
          <Text unread={unread} numberOfLines={2}>{preview}</Text>
          {(delivered || readReceipt) && (
            <IconContainer>

            </IconContainer>
          )}
        </PreviewContainer>
      </Column>
      {unread && pendingRead > 0 && (
        <UnreadNumber>
          <UnreadNumberText>{pendingRead}</UnreadNumberText>
        </UnreadNumber>
      )}
    </Container>
  </TouchableWithoutFeedback>
);

Message.propTypes = {
  userAvatar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  delivered: PropTypes.bool,
  readReceipt: PropTypes.bool,
  unread: PropTypes.bool,
  pendingRead: PropTypes.number,
  name: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired
};

export default withNavigation(Message);
