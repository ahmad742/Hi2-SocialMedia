import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../../../UI/VectorIcons';
import LinearGradient from 'react-native-linear-gradient';

const SuggestedPagesItem = () => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 12,
        backgroundColor: Colors().White,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        marginTop: 5,
      }}>
      <Image
        source={require('../../../Assets/a.jpg')}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
      />

      <View
        style={{
          // backgroundColor: 'orange',
          flex: 1,
          marginLeft: 10,
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 40,
              // backgroundColor: 'green',
              justifyContent: 'space-evenly',
              flex: 1,
            }}>
            <Text style={{fontSize: RFValue(12), color: Colors().Dark}}>
              Steve Harvey
            </Text>
            <Text style={{fontSize: RFValue(12), color: Colors().Dark}}>
              public Figure
            </Text>
          </View>

          <VectorIcons
            icon={'Entypo'}
            name={'dots-three-vertical'}
            size={20}
            color={Colors().Dark}
          />
        </View>
        <View
          style={{
            marginTop: 10,

            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.7, y: 1.0}}
            locations={[0, 0.5, 1]}
            colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}
            style={{
              backgroundColor: Colors().BorderColor,
              width: '48%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              borderRadius: 12,
            }}>
            <Text
              style={{
                fontSize: RFValue(12),
                color: Colors().Purple,
              }}>
              Like
            </Text>
          </LinearGradient>
          <View
            style={{
              backgroundColor: Colors().BorderColor,
              width: '48%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              borderRadius: 12,
            }}>
            <Text
              style={{
                fontSize: RFValue(12),
                color: Colors().Purple,
              }}>
              Remove
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SuggestedPagesItem;

const styles = StyleSheet.create({});
