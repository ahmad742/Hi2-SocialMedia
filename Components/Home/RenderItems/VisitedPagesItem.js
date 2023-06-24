import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../../../UI/VectorIcons';

const VisitedPagesItem = () => {
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
            height: 35,
            backgroundColor: Colors().BorderColor,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: RFValue(12),
              color: Colors().Purple,
            }}>
            Following
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VisitedPagesItem;

const styles = StyleSheet.create({});
