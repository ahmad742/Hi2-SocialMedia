import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import CommonHeader from '../UI/CommonHeader';
import {Colors} from '../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import FriendSuggestionsItem from '../Components/Home/RenderItems/FriendSuggestionsItem';
const Data = [
  {image: require('../Assets/asset.png'), name: 'Bob'},
  {image: require('../Assets/a.jpg'), name: 'Sofia'},
  {image: require('../Assets/asset.png'), name: 'Bob'},
  {image: require('../Assets/a.jpg'), name: 'Sofia'},
  {image: require('../Assets/asset.png'), name: 'Bob'},
  {image: require('../Assets/a.jpg'), name: 'Sofia'},
  {image: require('../Assets/asset.png'), name: 'Bob'},
  {image: require('../Assets/a.jpg'), name: 'Sofia'},
];
const Suggestions = () => {
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderFriendsItem = ({item, index}) => {
    return <FriendSuggestionsItem item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title={'Suggestions'} />
      <View style={styles.ContainerStyle}>
        <Text style={styles.textStyle}>People You May Know</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={_renderFriendsItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default Suggestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  contentContainerStyle: {
    paddingVertical: 20,
  },
  ContainerStyle: {
    flex: 1,
    backgroundColor: Colors().White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,

    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 12,
  },
  textStyle: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: RFValue(14),
    color: Colors().Purple,
    fontWeight: '900',
  },
});
