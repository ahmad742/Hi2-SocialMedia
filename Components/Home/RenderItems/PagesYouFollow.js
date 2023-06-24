import {StyleSheet, ImageBackground, Image, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../UI/Colors';
import {Text} from 'react-native-paper';

const PagesYouFollow = () => {
  return (
    <View style={styles.itemContainer}>
      <ImageBackground
        imageStyle={{borderRadius: 40}}
        source={require('../../../Assets/asset.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 55,
          marginHorizontal: 5,
        }}>
      </ImageBackground>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleStyle}>
        {'Great Indian'}
      </Text>
    </View>
  );
};

export default PagesYouFollow;

const styles = StyleSheet.create({
  itemContainer: {
    width: 55,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  titleStyle: {
    fontSize: RFValue(12),
    marginTop: 5,
    width: '70%',
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
});
