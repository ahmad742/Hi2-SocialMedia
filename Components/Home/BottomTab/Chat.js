import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, { useCallback } from 'react';
import { Colors } from '../../../UI/Colors';
import CommonHeader from '../../../UI/CommonHeader';
import DashBoardStroyItem from '../RenderItems/DashBoardStroyItem';
import GroupPostItem from '../RenderItems/GroupPostItem';
import GroupsItem from '../RenderItems/GroupsItem';
import { RFValue } from 'react-native-responsive-fontsize';
import RecentChatItem from '../RenderItems/RecentChatItem';
import ChatActiveItem from '../RenderItems/ChatActiveItem';
const Data = [1, 2, 3, 4, 5, 6];

const Chat = ({ navigation }) => {
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderStoryItem = ({ item, index }) => {
    return <ChatActiveItem />;
  };
  const _renderRecentChatItem = ({ item, index }) => {
    return <RecentChatItem onPress={() => navigation.navigate("LiveChat")} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Chat"  />
      <View style={styles.containerStyle}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={_renderStoryItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
      <Text style={styles.titleStyle}>Recent Chats</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={_renderRecentChatItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  contentContainerStyle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: Colors().BorderColor,
  },
  titleStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '900',
    marginHorizontal: 10,
    marginTop: 10,
  },
});
