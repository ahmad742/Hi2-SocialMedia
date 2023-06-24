import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Colors} from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';

const Notifications = () => {
  const Item = props => {
    const {icon, title, text} = props;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemRowContainer}>
          <Image source={icon} style={styles.imgStyle} />
          <View style={styles.containerStyle}>
            <Text style={styles.itemTitleStyle}>{title}</Text>
            <Text style={styles.itemTextStyle}>{text}</Text>
          </View>
          <Image
            source={require('../Assets/downarrow.png')}
            style={{width: 24, height: 24, alignSelf: 'flex-start'}}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Notifications" hideSearch />
      <View style={styles.detailContainer}>
        <Text style={styles.titleStyle}>Notifications Setting</Text>
        <Text style={styles.textStyle}>
          Hi2 will send you all the important notifications related to your
          account.
        </Text>
        <Text style={styles.notificationTextStyle}>
          What Notifications you Receive
        </Text>
      </View>

      <Item
        icon={require('../Assets/chat_icon.png')}
        title={'Comments'}
        text="Push, EMail, SMS"
      />
      <Item
        icon={require('../Assets/chat_icon.png')}
        title={'Updates from Friends'}
        text="Push, EMail, SMS"
      />
      <Item
        icon={require('../Assets/people.png')}
        title={'Friend requests'}
        text="Push, EMail, SMS"
      />
      <Item
        icon={require('../Assets/people.png')}
        title={'People you may know'}
        text="Push, EMail, SMS"
      />
      <Item
        icon={require('../Assets/groups.png')}
        title={'Groups'}
        text="Push, EMail, SMS"
      />
      <Item
        icon={require('../Assets/groups.png')}
        title={'Events'}
        text="Push, EMail, SMS"
      />
      <Item
        icon={require('../Assets/groups.png')}
        title={'Marketplace'}
        text="Push, EMail, SMS"
      />
      <Item
        icon={require('../Assets/groups.png')}
        title={'Other Notifications'}
        text="Push, EMail, SMS"
      />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  detailContainer: {
    marginHorizontal: 20,
  },
  titleStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '700',
  },
  textStyle: {
    marginTop: 10,
    fontSize: RFValue(12),
    color: Colors().Grey,
  },
  notificationTextStyle: {
    marginTop: 10,
    fontSize: RFValue(14),
    color: Colors().Purple,
    fontWeight: '700',
  },
  itemContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: Colors().FadeGreen,
    padding: 10,
    borderRadius: 12,
  },
  itemRowContainer: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  imgStyle: {
    width: 40,
    height: 40,
  },
  containerStyle: {
    height: 50,
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
  },
  itemTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Grey,
  },
  itemTitleStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
  },
});
