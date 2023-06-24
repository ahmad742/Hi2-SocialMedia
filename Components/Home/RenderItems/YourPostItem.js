import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../../UI/Colors';
import VectorIcons from '../../../UI/VectorIcons';
import {RFValue} from 'react-native-responsive-fontsize';

const YourPostItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemRowContainer}>
        <Text style={styles.textStyle}>22 Feb, 2023</Text>
        <VectorIcons
          icon="MaterialCommunityIcons"
          name={'trash-can-outline'}
          color={Colors().Orange}
          size={24}
        />
      </View>
      {/* second container */}
      <View style={[styles.itemRowContainer, {marginTop: 10}]}>
        <Image
          source={require('../../../Assets/a.jpg')}
          style={styles.imgStyle}
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text>
            <Text
              style={{
                fontSize: RFValue(14),
                fontWeight: '700',
              }}>
              Rosy
            </Text>{' '}
            shared a video.
          </Text>
          <View style={styles.itemRowContainer}>
            <VectorIcons
              icon="MaterialCommunityIcons"
              name={'account-supervisor-outline'}
              color={Colors().DarkGreen}
              size={24}
            />
            <Text style={styles.textStyle}>10:21 pm</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default YourPostItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: Colors().FadeGreen,
    borderRadius: 12,
  },
  itemRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
