import {StyleSheet, FlatList, View, SafeAreaView, Text} from 'react-native';
import React, {useCallback} from 'react';
import {Colors} from '../../../UI/Colors';
import VectorIcons from '../../../UI/VectorIcons';
import CommonHeader from '../../../UI/CommonHeader';
import NotificationItem from '../RenderItems/NotificationItem';

const Notifications = () => {
  const Data = [{id: 1}, {id: 2, request: true}, {id: 4}];
  const earlierData = [{id: 1}, {id: 2,}, {id: 4},{id: 5},{id: 6}];
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderNotificationsItem = ({item, index}) => {
    return <NotificationItem item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Notifications" common />
      <Text style={styles.textStyle}>{'New'}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={_renderNotificationsItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <Text style={styles.textStyle}>{'Earlier'}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={earlierData}
        renderItem={_renderNotificationsItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  contentContainerStyle: {
    paddingVertical: 15,
  },
  textStyle:{
    marginLeft:20,
    color:Colors().Darkblue,
    fontSize:14,
    fontWeight:'500',
    marginTop:20
  }
});
