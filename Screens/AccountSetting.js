import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import RNTextInputColored from '../UI/RNTextInput';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AccountSetting = () => {

  const [isPersonalDetails, setIsPersonalDetails] = useState(true)
  const [isPassword, setIsPassword] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Account Settings" hideSearch />

      <View style={styles.textContainer}>
        <View style={{
          flexDirection: 'row',
          width: '100%',
          alignSelf: "center",
          alignItems: "center",
          justifyContent: 'space-evenly'
        }}>
          <TouchableOpacity onPress={() => {
            setIsPassword(false)
            setIsPersonalDetails(true)
          }}>
            <Text style={{
              color: isPersonalDetails ? Colors().Blue : Colors().Grey,
              textDecorationLine: isPersonalDetails ? 'underline' : 'none',
              fontSize: RFValue(14),
              fontWeight: isPersonalDetails ? '700' : '500'
            }}>{'Personal Details'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setIsPassword(true)
            setIsPersonalDetails(false)
          }}>
            <Text style={{
              color: isPassword ? Colors().Blue : Colors().Grey,
              textDecorationLine: isPassword ? 'underline' : 'none',
              fontSize: RFValue(14),
              fontWeight: isPassword ? '700' : '500'
            }}>{'Password & Security'}</Text>
          </TouchableOpacity>
        </View>

      </View>

      {
        isPersonalDetails == true ?
          <>

            <Text
              style={{
                marginTop: 20,
                textAlign: 'justify',
                color: Colors().Grey,
                marginHorizontal: 20
              }}>
              {'Hi2 uses this information to verify your identity. You decide what personal details you make visible to others.'}
            </Text>
            <Image source={require('../Assets/a.jpg')} style={styles.imageStyle} />
            <Text style={styles.nameStyle}>Rosy</Text>
            <View
              style={{
                flex: 1,
                //   backgroundColor: 'red',
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <Text style={styles.hintStyle}>Name</Text>
              <RNTextInputColored
                margin
                placeHolder="Rosy"
                icon="edit-2"
                name="Feather"
              />
              <Text style={styles.hintStyle}>Contact</Text>
              <RNTextInputColored
                margin
                placeHolder="7868686868"
                icon="edit-2"
                name="Feather"
              />
              <RNTextInputColored
                margin
                placeHolder="10 November, 1997"
                icon="calendar"
                name="Feather"
              />
            </View>
          </>
          :
          <View style={styles.passwordContainer}>
            <KeyboardAwareScrollView>
              <Text style={{ color: Colors().Dark, fontSize: 16, fontWeight: '600' }}>{'Password & Security'}</Text>
              <Text style={{ color: Colors().Grey, fontSize: 12, fontWeight: '400', marginTop: 10 }}>
                {'Your password must be atleast 6 characters and should include a combination of numbers, letters and special characters {!%@$}'}</Text>
              <TextInput
                placeholder='Current Password'
                placeholderTextColor={Colors().Grey}
                style={styles.passwordTextInput}
              />
              <TextInput
                placeholder='New Password'
                placeholderTextColor={Colors().Grey}
                style={styles.passwordTextInput}
              />
              <TextInput
                placeholder='Confirm Password'
                placeholderTextColor={Colors().Grey}
                style={styles.passwordTextInput}
              />
              <TouchableOpacity style={{ width: '100%', alignSelf: 'center', marginTop: 30 }}>
                <LinearGradient
                  style={{
                    height: 40,
                    width: '100%',
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  start={{ x: 0.0, y: 0.0 }}
                  end={{ x: 0.7, y: 1.0 }}
                  locations={[0, 0.5, 1]}
                  colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                  <Text style={styles.buttonTextStyle}>{'Change Password'}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          </View>}
    </SafeAreaView>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  textStyle: {
    color: Colors().Grey,
    fontSize: RFValue(14),
    fontWeight: '500',
    marginStart: 20,
  },
  imageStyle: {
    marginTop: 30,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  nameStyle: {
    marginTop: 10,
    fontSize: RFValue(14),
    fontWeight: '900',
    color: Colors().Dark,
    textAlign: 'center',
  },
  hintStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
    fontWeight: '500',
  },
  passwordContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 350,
    marginTop: 50,
    backgroundColor: Colors().White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    padding: 15
  },
  passwordTextInput: {
    width: "100%",
    backgroundColor: Colors().FadeGreen,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 15
  },
  buttonTextStyle: {
    fontSize: RFValue(12),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
});
