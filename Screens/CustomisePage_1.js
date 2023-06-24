import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import CommonHeader from '../UI/CommonHeader';
import { Colors } from '../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import RNTextInputColored from '../UI/RNTextInput';
import LinearGradient from 'react-native-linear-gradient';
import VectorIcons from '../UI/VectorIcons';

const CustomisePage_1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainContainer}>
        <View style={{
          width: '80%',
          flexDirection: 'row'
        }}>
          <VectorIcons
            style={styles.iconStyle}
            icon="Feather"
            name="arrow-left-circle"
            size={24}
            color={Colors().Green}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={{ marginLeft: 10, fontWeight: '700', fontSize: RFValue(14) }}>{'Customise your page'}</Text>
        </View>
        <View style={{
          width: '20%',
          alignItems: 'flex-end'
        }}>
          <TouchableOpacity>
            <Image style={{ width: 30, height: 30, borderRadius: 100 }}
              source={require('../Assets/r.jpg')} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <View
          style={styles.coverPhotoContainer}
        >
          <TouchableOpacity style={{
            width: 35,
            height: 35,
            backgroundColor: Colors().Green,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 10,
            bottom: 10
          }}>
            <VectorIcons
              // style={{ marginRight: 5 }}
              icon="Feather"
              name={'camera'}
              color={Colors().White}
              size={20}
              onPress={() => {
                console.log('log');
              }}
            />
          </TouchableOpacity>
          <View style={{
            width: '30%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 100,
            height: 100,
            marginTop: 100
          }}>

            <View style={{
              width: 85,
              alignSelf: 'center',
              backgroundColor: Colors().BorderColor,
              borderRadius: 100,
              height: 85,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10
            }}>
              <TouchableOpacity style={{
                width: 25,
                height: 25,
                backgroundColor: Colors().Green,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: 0,
                bottom: 0
              }}>
                <VectorIcons
                  icon="Feather"
                  name={'camera'}
                  color={Colors().White}
                  size={15}
                  onPress={() => {
                    console.log('log');
                  }}
                />
              </TouchableOpacity>
              <Image source={require('../Assets/user.png')}
                style={{ width: 40, height: 40, tintColor: Colors().White }} />
            </View>
          </View>
        </View>
        <Text style={{
          fontSize: RFValue(12), fontWeight: '600', color: Colors().Dark, marginLeft: 20, marginTop: 30
        }}>{'General Info'}</Text>
        <RNTextInputColored placeHolder="Bio" />
        <RNTextInputColored placeHolder="Website" />
        <RNTextInputColored placeHolder="Email" />
        <RNTextInputColored placeHolder="Phone Number" />
        <RNTextInputColored placeHolder="Address" />
        <RNTextInputColored placeHolder="City/Town" />
        <RNTextInputColored placeHolder="Zip Code" />
        <View style={styles.HoursSectionContainer}>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
          }}>
            <Text style={styles.hoursSectionText}>{'Hours'}</Text>
            <View style={{ width: 20, height: 20, borderRadius: 100, borderWidth: 1, borderColor: Colors().Darkblue }}></View>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
          }}>
            <Text style={styles.hoursSectionText}>{"No hours available(Don't show any hours)"}</Text>
            <View style={{ width: 20, height: 20, borderRadius: 100, borderWidth: 1, borderColor: Colors().Darkblue }}></View>
          </View>
          <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
          }}>
            <Text style={styles.hoursSectionText}>{'Always open (24 Hours)'}</Text>
            <View style={{ width: 20, height: 20, borderRadius: 100, borderWidth: 1, borderColor: Colors().Darkblue }}></View>
          </View>
          <Text style={[styles.hoursSectionText, {marginTop: 10}]}>{'Standard Hours'}</Text>
          <View style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <View>
              <Text style={[styles.hoursSectionText, { marginTop: 5 }]}> {"From"} </Text>
              <Text style={styles.hoursSectionText}> {"9:00 AM"}   </Text>
            </View>
            <View>
              <Text style={[styles.hoursSectionText, { marginTop: 5 }]}>  {"To"}  </Text>
              <Text style={styles.hoursSectionText}>{"5:00 PM"}  </Text>
            </View>
            <Text style={[styles.hoursSectionText, { marginTop: 5 }]}>{'M T W T F S S'}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ width: '50%', alignSelf: 'center' }}
          onPress={() => navigation.navigate("CustomisePage_2")}
        >
          <LinearGradient
            style={{
              height: 40,
              width: '100%',
              marginHorizontal: '5%',
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.7, y: 1.0 }}
            locations={[0, 0.5, 1]}
            colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
            <Text style={styles.buttonTextStyle}>{'Next'}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView >
  );
};

export default CustomisePage_1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  coverPhotoContainer: {
    margin: '5%',
    height: 150,
    borderWidth: 1,
    borderColor: Colors().BorderColor,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors().BorderColor,
    marginTop: 10

  },
  contentContainerStyle: {
    paddingVertical: 20,
    backgroundColor: Colors().White,
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  headerMainContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  HoursSectionContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors().BorderColor,
    backgroundColor: Colors().White,
    height: 190,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    alignSelf: 'center'
  },
  hoursSectionText: {
    color: Colors().Grey,
    fontSize: 14,
    fontWeight: '500',
  }
});
