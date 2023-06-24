import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {Colors} from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import VectorIcons from '../UI/VectorIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import YourPostItem from '../Components/Home/RenderItems/YourPostItem';
const Data = [1, 3, 2, 4, 6, 554, 66, 42234, 22, 5445];
const YourPost = () => {
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderYourPOstItem = ({item, index}) => {
    return <YourPostItem />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Your Post" hideSearch />
      <View style={styles.rowContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'calendar-month-outline'}
            color={Colors().Purple}
            size={24}
          />
          <Text style={styles.titleStyle}>Date</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.rightTitleStyle}>All</Text>

          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'menu-down'}
            color={Colors().Purple}
            size={24}
          />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={_renderYourPOstItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
};

export default YourPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: RFValue(14),
    fontWeight: '900',
    color: Colors().Purple,
    marginStart: 10,
  },
  rightTitleStyle: {
    fontSize: RFValue(14),
    fontWeight: '900',
    color: Colors().Purple,
    marginEnd: 10,
  },
  contentContainerStyle: {
    paddingBottom: 20,
  },
});
