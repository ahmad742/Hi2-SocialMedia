import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../../UI/Colors';
import { } from 'react-native-responsive-fontsize';

const MarketPlaceItem = (props) => {
  const { onPress } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors().White,
        width: '49%',
        height: 200,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: '2%',
      }}>
      <View
        style={{
          height: '88%',
          backgroundColor: Colors().BorderColor,
          borderBottomEndRadius: 12,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('../../../Assets/lap.jpg')}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 5,
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text
          numberOfLines={1}
          style={{
            color: Colors().Dark,

            marginLeft: 5,
            maxWidth: '30%',
          }}>
          1000
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: Colors().Dark,
            fontWeight: '900',
            marginLeft: 5,
            maxWidth: '60%',
          }}>
          Laptop
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MarketPlaceItem;

const styles = StyleSheet.create({});
