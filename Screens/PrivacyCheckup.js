import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import CommonHeader from '../UI/CommonHeader';
import {Colors} from '../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

const PrivacyCheckup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Privacy Checkup" hideSearch />
      <Text style={styles.textStyle}>
        We'll guide you through some settings so you can make the right choices
        for your account. Lets Start!
      </Text>
      <View style={styles.rowContainer}>
        <View style={styles.blockStyle}>
          <Image
            resizeMode="cover"
            source={require('../Assets/search_illustration.png')}
            style={styles.imgStyle}
          />
          <View style={styles.textContainer}>
            <Text style={styles.blockTextStyle}>
              How people can see your profile?
            </Text>
          </View>
        </View>
        <View style={styles.blockStyle}>
          <Image
            resizeMode="cover"
            source={require('../Assets/share_illustration.png')}
            style={styles.imgStyle}
          />
          <View style={styles.textContainer}>
            <Text style={styles.blockTextStyle}>
              Who can see what you share?
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.blockStyle}>
          <Image
            resizeMode="cover"
            source={require('../Assets/secure_illustration.png')}
            style={styles.imgStyle}
          />
          <View style={styles.textContainer}>
            <Text style={styles.blockTextStyle}>
              How people can see your profile?
            </Text>
          </View>
        </View>
        <View style={styles.blockStyle}>
          <Image
            resizeMode="cover"
            source={require('../Assets/data2.png')}
            style={styles.imgStyle}
          />
          <View style={styles.textContainer}>
            <Text style={styles.blockTextStyle}>
              Who can see what you share?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.blockStyle}>
          <Image
            resizeMode="cover"
            source={require('../Assets/data2.png')}
            style={styles.imgStyle}
          />
          <View style={styles.textContainer}>
            <Text style={styles.blockTextStyle}>
              How people can see your profile?
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyCheckup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  textStyle: {
    marginHorizontal: 20,
    fontSize: RFValue(12),
    color: Colors().Grey,
    marginVertical: 10,
  },
  rowContainer: {
    marginTop: 10,
    marginHorizontal: RFValue(20),
    // backgroundColor: Colors().Red,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blockStyle: {
    width: '49%',
    height: 180,
    backgroundColor: Colors().FadeGreen,
    borderRadius: 12,
  },
  imgStyle: {
    width: 130,
    height: 130,
    alignSelf: 'center',
  },
  blockTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
