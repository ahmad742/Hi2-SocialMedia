import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import React from 'react';

const RecentChatItem = (props) => {
  const {onPress} = props
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        marginHorizontal: 10,
        flexDirection: 'row',
        paddingVertical: 10,
      }}>
      <Image
        source={require('../../../Assets/a.jpg')}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          borderWidth: 1,
          borderColor: 'yellow',
        }}
      />
      <View
        style={{
          flex: 1,
          // backgroundColor: 'green',
          marginStart: 10,
          justifyContent: 'space-evenly',
        }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: RFValue(14),
            color: Colors().Dark,
            fontWeight: '500',
          }}>
          Maria Joseph
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{fontSize: RFValue(12), color: Colors().Grey}}>
          you sent an attachment
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentChatItem;

const styles = StyleSheet.create({});
