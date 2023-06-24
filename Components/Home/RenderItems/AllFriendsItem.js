import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../../../UI/VectorIcons';
import {Colors} from '../../../UI/Colors';
const AllFriendsItem = props => {
  const {item} = props;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={item?.image ? item?.image : require('../../../Assets/a.jpg')}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>
      <View
        style={{
          marginLeft: 10,
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Text
          style={{
            color: Colors().Dark,
            fontSize: RFValue(13),
            fontWeight: '500',
          }}>
          {item?.name}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 15,
              overflow: 'hidden',
              borderWidth: 2,
              borderColor: Colors().BorderColor,
              position: 'absolute',
              left: 10,
            }}>
            <Image
              source={require('../../../Assets/book.png')}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 15,
              overflow: 'hidden',
              borderWidth: 2,
              borderColor: Colors().BorderColor,
            }}>
            <Image
              source={require('../../../Assets/asset.png')}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <Text
            style={{
              color: Colors().Grey,
              fontSize: RFValue(12),
              marginLeft: 20,
            }}>
            4 mutual friend
          </Text>
        </View>
      </View>
      <VectorIcons
        onPress={() => {
          console.log('first');
        }}
        icon={'MaterialCommunityIcons'}
        name={'dots-vertical'}
        size={20}
        color={Colors().Dark}
      />
    </View>
  );
};

export default AllFriendsItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    height: 50,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  buttonStyle: {
    height: 35,
    width: '40%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentButtonStyle: {
    height: 35,
    width: '40%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors().Purple,
    marginLeft: 10,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: Colors().BorderColor,
    overflow: 'hidden',
  },
});
