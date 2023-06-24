import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useCallback} from 'react';
import {Colors} from '../../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import FriendsItem from '../RenderItems/FriendsItem';
import {useNavigation} from '@react-navigation/native';
import CommonHeader from '../../../UI/CommonHeader';
const Friends = () => {
  const navigation = useNavigation();
  const Data = [
    {image: require('../../../Assets/asset.png'), name: 'Bob'},
    {image: require('../../../Assets/a.jpg'), name: 'Sofia'},
  ];
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderFriendsItem = ({item, index}) => {
    return <FriendsItem item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Friends" common />
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Suggestions');
          }}
          style={styles.optionContainer}>
          <Text style={styles.textStyle(Colors().Dark)}>Suggestions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AllFriends');
          }}
          style={[styles.optionContainer, {marginLeft: 10}]}>
          <Text style={styles.textStyle(Colors().Dark)}>All Friends</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ContainerStyle}>
        <View style={styles.FiendRequestRowContainer}>
          <Text style={styles.FriendsRequestStyle}>
            Friends Request{' '}
            <Text style={[styles.FriendsRequestStyle, {color: Colors().Green}]}>
              (15)
            </Text>
          </Text>
          <TouchableOpacity  
           onPress={() => {
            navigation.navigate('AllFriends');
          }}>
          <Text style={styles.textStyle(Colors().DarkGreen)}>See All</Text>
          </TouchableOpacity>
        </View>
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

export default Friends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  FiendRequestRowContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  optionContainer: {
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 7,
    backgroundColor: Colors().FadeGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: color => ({
    fontSize: RFValue(12),
    color: color,
    fontWeight: '500',
  }),
  FriendsRequestStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: 'bold',
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
    marginTop: 10,
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
