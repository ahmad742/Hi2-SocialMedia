import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

const NewsItem = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <Image
        source={require('../../../Assets/a.jpg')}
        style={styles.imgStyle}
      />
      <View style={styles.detailContainer}>
        <Text numberOfLines={1} style={styles.simpleTextStyle}>
          Sports
        </Text>
        <Text numberOfLines={2} style={styles.titleStyle}>
          What Training do Volleyball player needs ?
        </Text>
        <Text numberOfLines={1} style={styles.simpleTextStyle}>
          Feb 22, 2023
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 100,
    marginHorizontal: 10,
    marginTop: 10,
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  detailContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '500',
  },
  simpleTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Grey,
  },
});
