import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {Colors} from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';
import {useNavigation} from '@react-navigation/native';

const ActivityLog = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <CommonHeader title="Activity Log" hideSearch />
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Welcome to Activity log!</Text>

          <TouchableOpacity onPress={() => {}} style={styles.optionContainer}>
            <VectorIcons
              icon="MaterialCommunityIcons"
              name={'trash-can-outline'}
              color={Colors().Orange}
              size={24}
            />
            <Text style={styles.buttonTextStyle}>Trash</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockRowContainer}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'image-multiple-outline'}
              color={Colors().Purple}
              size={24}
            />
            <Text style={styles.blockTitleStyle}>Your Post</Text>
          </View>
          <Text style={styles.descriptionStyle}>
            Photos, videos, text and status updates you've shared on Hi2
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('YourPost');
            }}
            style={styles.buttonContainer}>
            <Text style={styles.buttonTitleStyle}>Manage Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockRowContainer}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'tag-outline'}
              color={Colors().Purple}
              size={24}
            />
            <Text style={styles.blockTitleStyle}>Interactions</Text>
          </View>
          <Text style={styles.descriptionStyle}>
            Photos, videos, text and status updates you've shared on Hi2
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonTitleStyle}>Manage Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockRowContainer}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'account-multiple-outline'}
              color={Colors().Purple}
              size={24}
            />
            <Text style={styles.blockTitleStyle}>Group Events</Text>
          </View>
          <Text style={styles.descriptionStyle}>
            Photos, videos, text and status updates you've shared on Hi2
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonTitleStyle}>Manage Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockRowContainer}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'account-outline'}
              color={Colors().Purple}
              size={24}
            />
            <Text style={styles.blockTitleStyle}>Profile Information</Text>
          </View>
          <Text style={styles.descriptionStyle}>
            Photos, videos, text and status updates you've shared on Hi2
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonTitleStyle}>Manage Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockRowContainer}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'share-variant-outline'}
              color={Colors().Purple}
              size={24}
            />
            <Text style={styles.blockTitleStyle}>Connection</Text>
          </View>
          <Text style={styles.descriptionStyle}>
            Photos, videos, text and status updates you've shared on Hi2
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonTitleStyle}>Manage Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockRowContainer}>
            <Image
              source={require('../Assets/logo.png')}
              style={{width: 50, height: 50}}
            />
            <Text style={styles.blockTitleStyle}>
              Logged actions and other activity
            </Text>
          </View>
          <Text style={styles.descriptionStyle}>
            Photos, videos, text and status updates you've shared on Hi2
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonTitleStyle}>Manage Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockRowContainer}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'menu-open'}
              color={Colors().Purple}
              size={24}
            />
            <Text style={styles.blockTitleStyle}>Activity</Text>
          </View>
          <Text style={styles.descriptionStyle}>
            Photos, videos, text and status updates you've shared on Hi2
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonTitleStyle}>Manage Post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivityLog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  titleStyle: {
    marginTop: 10,
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '900',
  },
  titleContainer: {
    marginHorizontal: 20,
    alignItems: 'flex-start',
  },
  buttonTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
    fontWeight: '500',
    marginStart: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 7,
    backgroundColor: Colors().FadeGreen,
    alignItems: 'center',
  },
  blockContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    // backgroundColor: 'red',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors().BorderColor,
  },
  blockRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockTitleStyle: {
    marginLeft: 10,
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '900',
  },
  descriptionStyle: {
    fontSize: RFValue(12),
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: Colors().BorderColor,
    borderRadius: 12,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
    fontWeight: '700',
  },
});
