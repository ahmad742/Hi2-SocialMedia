import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

const FriendsItem = props => {
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
        <View
          style={{
            flexDirection: 'row',
          }}>
          <LinearGradient
            style={styles.buttonStyle}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.7, y: 1.0}}
            locations={[0, 0.5, 1]}
            colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
            <Text style={styles.buttonTextStyle}>Confirm</Text>
          </LinearGradient>
          <TouchableOpacity style={styles.transparentButtonStyle}>
            <Text style={styles.buttonTextStyle}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FriendsItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    height: 80,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  buttonStyle: {
    height: 25,
    width: '40%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentButtonStyle: {
    height: 25,
    width: '40%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors().Purple,
    marginLeft: 10,
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: Colors().BorderColor,
    overflow: 'hidden',
  },
});
