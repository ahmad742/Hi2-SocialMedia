import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Colors} from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';

const HelpCenter = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Hi2 Help Center" />
      <Image
        style={{width: 150, height: 150, alignSelf: 'center'}}
        resizeMode="contain"
        source={require('../Assets/logo.png')}
      />

      <Text style={styles.titleStyle}> How Can we Help You ?</Text>
      <Text style={styles.descriptionStyle}>
        It looks like you are experiencing problems with our process . We are
        here to help so please get in touch with us.
      </Text>
      <View style={styles.cardContainer}>
        <Image
          source={require('../Assets/chat.png')}
          style={{width: 24, height: 24}}
        />
        <Text style={styles.CardTitleStyle}>Chat Using Message</Text>
        <Text style={styles.textStyle}>
          Start a connection with Hi2 support in the message app.
        </Text>
      </View>
      <Text style={[styles.titleStyle, {marginTop: 10}]}>Get More Help</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.CardTitleStyle}>Talk To Us Now</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <VectorIcons
            icon="Foundation"
            name={'telephone'}
            color={Colors().Purple}
            size={24}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: RFValue(12),
              color: Colors().Grey,
            }}>
            022-6872 7374
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          marginHorizontal: 50,
        }}>
        <VectorIcons
          style={styles.iconStyle}
          icon="Fontisto"
          name={'facebook'}
          color={Colors().Purple}
          size={20}
        />
        <VectorIcons
          style={styles.iconStyle}
          icon="Fontisto"
          name={'instagram'}
          color={Colors().Purple}
          size={20}
        />
        <VectorIcons
          style={styles.iconStyle}
          icon="Fontisto"
          name={'twitter'}
          color={Colors().Purple}
          size={20}
        />
        <VectorIcons
          style={styles.iconStyle}
          icon="Fontisto"
          name={'linkedin'}
          color={Colors().Purple}
          size={20}
        />
      </View>
      <Text style={styles.termsTextStyle}>Terms & Conditions</Text>
    </SafeAreaView>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  titleStyle: {
    fontSize: RFValue(14),
    color: Colors().Purple,
    fontWeight: '500',
    textAlign: 'center',
  },
  descriptionStyle: {
    marginTop: 5,
    marginHorizontal: 50,
    textAlign: 'center',
    color: Colors().Grey,
  },
  cardContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 50,
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
    alignItems: 'center',
  },
  CardTitleStyle: {
    marginTop: 5,
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '600',
    textAlign: 'center',
  },
  textStyle: {
    marginTop: 5,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  iconStyle: {
    width: 40,
    height: 40,
    backgroundColor: Colors().FadeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  termsTextStyle: {
    textAlign: 'center',
    fontSize: RFValue(14),
    color: Colors().Blue,
    marginBottom: 30,
    textDecorationLine: 'underline',
  },
});
