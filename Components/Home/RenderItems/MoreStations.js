import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../../../UI/VectorIcons';

const MoreStations = () => {
    return (
        <View
            style={{
                marginHorizontal: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 12,
                backgroundColor: Colors().BorderColor,
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
                    width: 100,
                    height: 100,
                    borderRadius: 20,
                }}
            />

            <View
                style={{
                    flex: 1,
                    marginLeft: 10,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            height: 100,
                            justifyContent: 'space-evenly',
                            flex: 1,
                        }}>
                        <Text style={{ fontSize: RFValue(12), color: Colors().Dark, fontWeight:'500' }}>
                           {'BigR - Star Country!'}
                        </Text>
                        <Text style={{ fontSize: RFValue(12), color: Colors().Dark }}>
                            {'100.9'}
                        </Text>
                        <Text style={{ fontSize: RFValue(10), color: Colors().Dark }}>
                            {'70s and 80s pop mix channels'}
                        </Text>
                    </View>
                    <View style={{
                        width:30,
                        height: 100,
                    }}>
                        <Image style={{width:20, height:20, tintColor:'red', marginTop:10}} source={require('../../../Assets/heart.png')}/>
                        </View>
                </View>
                {/* <VectorIcons
                        icon={'Entypo'}
                        name={'heart-outlined'}
                        size={20}
                        color={Colors().Dark}
                    /> */}
            </View>
        </View>
    );
};

export default MoreStations;

const styles = StyleSheet.create({});
