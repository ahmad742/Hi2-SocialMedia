import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../UI/Colors';
import VectorIcons from '../../../UI/VectorIcons';
import LinearGradient from 'react-native-linear-gradient';

const NotificationItem = props => {
  const {item} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
      }}>
      <View style={styles.imageContainer}>
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
          flex: 1,
          justifyContent: 'space-evenly',
          marginLeft: 10,
        }}>
        <Text>
          <Text
            ellipsizeMode="tail"
            style={{
              fontSize: RFValue(14),
              fontWeight: '900',
              color: Colors().Dark,
              width: '20%',
            }}>
            Sofia
          </Text>{' '}
          added a new photo
        </Text>
        <Text>10 hours ago</Text>
        {item?.request && (
          <>
            <Text
              style={{
                marginTop: 5,
                color: Colors().Blue,
              }}>
              3 mutual Friends
            </Text>
            <View
              style={{
                marginTop: 5,
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
          </>
        )}
      </View>
      <VectorIcons
        onPress={() => {
          console.log('first');
        }}
        icon={'MaterialCommunityIcons'}
        name={'dots-horizontal'}
        size={20}
        color={Colors().Dark}
      />
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: Colors().BorderColor,
    overflow: 'hidden',
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
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
});
