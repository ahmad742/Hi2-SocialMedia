import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextComponent,
} from 'react-native';
import React from 'react';
import {Colors} from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import RNTextInputColored from '../UI/RNTextInput';
import VectorIcons from '../UI/VectorIcons';
import LinearGradient from 'react-native-linear-gradient';
import MarketPlaceItem from '../Components/Home/RenderItems/MarketPlaceItem';

const Invite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Invite" hideSearch />
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.inviteContainer}>
          <Text style={styles.inviteTextStyle}>Invite</Text>
        </TouchableOpacity>
        <View style={styles.paddingStyle}>
          <Text style={styles.instructionTextStyle}>
            Enter the email address of a friend to join Hi2
          </Text>
          <RNTextInputColored placeHolder="Email Address" margin />
          <View style={styles.rowContainer}>
            <VectorIcons
              style={styles.iconStyle}
              icon={'Feather'}
              name={'share-2'}
              size={20}
              color={Colors().White}
            />
            <Text style={styles.shareTextStyle}>Share link to Whatsapp </Text>
          </View>

          <View style={styles.buttonRowContainer}>
            <LinearGradient
              style={styles.buttonStyle}
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.7, y: 1.0}}
              locations={[0, 0.5, 1]}
              colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
              <Text style={styles.inviteTextStyle}>Save</Text>
            </LinearGradient>
            <Text style={styles.cancelTextStyle}>Cancel</Text>
          </View>
        </View>
      </View>

      <View style={styles.marketplaceContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.inviteTextStyle}>MarketPlace</Text>
          <Text
            style={[
              styles.inviteTextStyle,
              {color: Colors().DarkGreen, fontSize: RFValue(12)},
            ]}>
            See All
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <MarketPlaceItem />
          <MarketPlaceItem />
        </View>
      </View>
      <Text style={styles.advertisementTextStyle}>Advertisement</Text>
      <View style={styles.advertisementContainer}></View>
    </SafeAreaView>
  );
};

export default Invite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: Colors().White,
    borderRadius: 10,
    paddingBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inviteContainer: {
    height: 40,
    backgroundColor: Colors().FadeGreen,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inviteTextStyle: {
    fontSize: RFValue(14),
    fontWeight: '900',
    color: Colors().Dark,
  },
  instructionTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
    marginTop: 20,
  },
  rowContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors().Purple,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  shareTextStyle: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: Colors().Dark,
  },
  buttonRowContainer: {
    marginTop: 20,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 25,
    width: '40%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelTextStyle: {
    fontSize: RFValue(14),
    fontWeight: '900',
    color: Colors().Dark,
    marginRight: 20,
  },
  advertisementTextStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    marginHorizontal: 10,
    marginTop: 10,
    fontWeight: '900',
  },
  advertisementContainer: {
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: Colors().BorderColor,
    borderRadius: 10,
  },
  marketplaceContainer: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: Colors().White,
    paddingVertical: 20,
    paddingHorizontal: 15,

    marginHorizontal: 10,
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paddingStyle: {
    paddingHorizontal: 20,
  },
});
