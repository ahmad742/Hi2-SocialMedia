import {StyleSheet, ImageBackground, Image, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../UI/Colors';
import {Text} from 'react-native-paper';

const ChatActiveItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={require('../../../Assets/a.jpg')}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleStyle}>
        Maria
      </Text>

      <View style={styles.greenDot} />
    </View>
  );
};

export default ChatActiveItem;

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
    color: Colors().Grey,
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
    borderWidth: 2,
    borderColor: Colors().BorderColor,
  },
  greenDot: {
    width: 10,
    height: 10,
    backgroundColor: Colors().DarkGreen,
    borderRadius: 5,
    position: 'absolute',
    right: -1,
  },
});
