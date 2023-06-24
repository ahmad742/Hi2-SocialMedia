import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Colors } from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';
import { useNavigation } from '@react-navigation/native';

const SettingAndPrivacy = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Settings and Privacy" />
      <View style={styles.cardContainer}>
        <View style={styles.rowContainer}>
          <VectorIcons
            style={styles.iconStyle}
            icon="MaterialCommunityIcons"
            name={'account-cog-outline'}
            color={Colors().Purple}
            size={24}
          />
          <Text style={styles.cardTitleStyle}>Account Settings</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AccountSetting')}>
          <Text style={styles.textStyle}>Personal Details</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>Password & Security</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PrivacyCheckup');
        }}
        style={styles.cardContainer}>
        <View style={styles.rowContainer}>
          <VectorIcons
            style={{
              marginRight: 10,
            }}
            icon="MaterialCommunityIcons"
            name={'account-cog-outline'}
            color={Colors().Purple}
            size={24}
          />
          <Text style={styles.cardTitleStyle}>Privacy Checkup</Text>
        </View>
        <Text style={styles.simpleTextStyle}>
          A guided review of your important privacy and security settings.
        </Text>
      </TouchableOpacity>
      <View style={styles.containerStyle}>
        <Text style={styles.cardTitleStyle}>Preferences</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ActivityLog');
          }}
          style={styles.rowContainer}>
          <VectorIcons
            style={styles.iconStyle}
            icon="MaterialCommunityIcons"
            name={'menu-open'}
            color={Colors().Purple}
            size={24}
          />
          <Text style={styles.containerTextStyle}>Activity Log</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notifications');
          }}
          style={styles.rowContainer}>
          <VectorIcons
            style={styles.iconStyle}
            icon="MaterialCommunityIcons"
            name={'bell-ring-outline'}
            color={Colors().Purple}
            size={24}
          />
          <Text style={styles.containerTextStyle}>Notifications</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerStyle}>
        <Text style={styles.cardTitleStyle}>Audience & Visibility</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PublicPosts');
          }}
          style={styles.rowContainer}>
          <VectorIcons
            style={styles.iconStyle}
            icon="MaterialCommunityIcons"
            name={'menu-open'}
            color={Colors().Purple}
            size={24}
          />
          <Text style={styles.containerTextStyle}>Public Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Blocking');
          }}
          style={styles.rowContainer}>
          <VectorIcons
            style={styles.iconStyle}
            icon="MaterialCommunityIcons"
            name={'bell-ring-outline'}
            color={Colors().Purple}
            size={24}
          />
          <Text style={styles.containerTextStyle}>Blocking</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerStyle}>
        <Text style={styles.cardTitleStyle}>Terms & Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingAndPrivacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  cardTitleStyle: {
    fontSize: RFValue(14),
    color: Colors().Purple,
    fontWeight: '500',
    // textAlign: 'center',
  },
  cardContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
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
  textStyle: { marginTop: 5, color: Colors().Grey, fontWeight: '500' },
  simpleTextStyle: { marginTop: 5, color: Colors().Grey },
  containerStyle: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  containerTextStyle: { color: Colors().Grey, fontWeight: '500' },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
});
