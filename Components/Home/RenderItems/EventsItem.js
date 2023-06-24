import { StyleSheet, ImageBackground, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../../UI/Colors';
import { Text } from 'react-native-paper';

const EventsItem = () => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Image
        imageStyle={{ borderRadius: 40 }}
        source={require('../../../Assets/asset.png')}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.titleStyle}>
        Rang Barse Festival
      </Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[styles.titleStyle, { color: Colors().Blue }]}>
        Sat,Mar 19
      </Text>
    </TouchableOpacity>
  );
};

export default EventsItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: 70,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  titleStyle: {
    fontSize: RFValue(12),
    marginTop: 5,
    width: '100%',
    color: Colors().Dark,
    textAlign: 'center',
  },
  smallImageStyle: {
    top: -2,
    left: -2,
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors().BorderColor,
  },
  imageStyle: {
    width: '100%',
    height: 70,
    marginHorizontal: 5,
    borderRadius: 35,
  },
});
