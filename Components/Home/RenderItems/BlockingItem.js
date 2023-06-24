import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

const BlockingItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={require('../../../Assets/a.jpg')}
        style={styles.imgStyle}
      />

      <Text numberOfLines={1} style={styles.itemTextStyle}>
        sia
      </Text>
      <LinearGradient
        style={styles.buttonStyle}
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.5, 1]}
        colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
        <Text style={styles.buttonTextStyle}> Unblock</Text>
      </LinearGradient>
    </View>
  );
};

export default BlockingItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgStyle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  itemTextStyle: {
    marginHorizontal: 10,
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '500',
    flex: 1,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  buttonStyle: {
    height: 30,
    width: '40%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
