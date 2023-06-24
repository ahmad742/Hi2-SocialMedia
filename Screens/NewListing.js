import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CommonHeader from '../UI/CommonHeader';
import {Colors} from '../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import RNTextInputColored from '../UI/RNTextInput';
import LinearGradient from 'react-native-linear-gradient';
import VectorIcons from '../UI/VectorIcons';

const NewListing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Item for Sale" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.coverPhotoContainer}>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              backgroundColor: 'red',
              paddingHorizontal: 10,
              borderRadius: 10,
              backgroundColor: Colors().BorderColor,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <VectorIcons
              style={{marginRight: 5}}
              icon="Feather"
              name={'camera'}
              color={Colors().Grey}
              size={24}
              onPress={() => {
                console.log('log');
              }}
            />
            <Text style={[styles.buttonTextStyle, {color: Colors().Grey}]}>
              Add Cover Photo
            </Text>
          </TouchableOpacity>
        </View>
        <RNTextInputColored placeHolder="Title" />
        <RNTextInputColored placeHolder="Pricing" />
        <RNTextInputColored placeHolder="Availability" />
        <RNTextInputColored placeHolder="Category" />
        <RNTextInputColored placeHolder="Description" />
        <RNTextInputColored placeHolder="Contact Email Id" />
        <RNTextInputColored placeHolder="Contact Number" />
        <RNTextInputColored placeHolder="Contact Person" />
        <RNTextInputColored placeHolder="Origin Country" />
        <RNTextInputColored placeHolder="Origin State" />
        <RNTextInputColored placeHolder="Origin City" />
        <LinearGradient
          style={{
            height: 40,
            width: '90%',
            marginHorizontal: '5%',
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.7, y: 1.0}}
          locations={[0, 0.5, 1]}
          colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
          <Text style={styles.buttonTextStyle}>Post</Text>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  coverPhotoContainer: {
    marginHorizontal: '5%',
    height: 100,
    borderWidth: 1,
    borderColor: Colors().BorderColor,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
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
});
