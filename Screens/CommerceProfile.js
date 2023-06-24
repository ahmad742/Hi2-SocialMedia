import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../UI/CommonHeader';
import { Colors } from '../UI/Colors';
import RNTextInputColored from '../UI/RNTextInput';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import MarketPlaceItem from '../Components/Home/RenderItems/MarketPlaceItem';
import VectorIcons from '../UI/VectorIcons';

const CommerceProfile = ({ navigation }) => {
    const Data = [1, 2, 3, 4, 5, 6];
    const _renderMarketPLaceItem = ({ item, index }) => {
        return <MarketPlaceItem item={item} />;
    };
    return (
        <SafeAreaView style={styles.container}>
            <CommonHeader title='Commerce Profile' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    width: '100%',
                    height: 280
                }}>
                    <View style={styles.coverImgStyle}>
                        <View style={{
                            position: 'absolute'
                        }}>
                            <Text style={{ fontSize: RFValue(18) }}>{'No image available'}</Text>
                        </View>
                        <View style={{
                            width: '90%',
                            alignItems: "center",
                            alignSelf: "center",
                            flexDirection: 'row'
                        }}>

                            <View style={{
                                width: 110,
                                marginTop: "65%",
                                backgroundColor: 'white',
                                borderRadius: 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 110,
                                alignSelf: 'flex-start',
                            }}>
                                <Image source={require('../Assets/a.jpg')}
                                    style={{ width: 100, height: 100, borderRadius: 100 }} />

                            </View>
                            <View style={{ marginTop: "70%", marginLeft: 10 }}>
                                <Text style={{ fontWeight: '700' }}>{'Sofia'}</Text>
                                <Text style={{ marginTop: 5 }}>{'223 followers'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90%',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>
                    <TouchableOpacity style={styles.FollowButton}>
                        <Image source={require('../Assets/user.png')} style={{ width: 20, height: 20 }} />
                        <Text style={{ marginLeft: 10 }}>{'Follow'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <VectorIcons
                            icon={'Entypo'}
                            name={'dots-three-horizontal'}
                            size={20}
                            color={Colors().Dark}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.innerMessageContainer}>
                    <Text style={{ fontWeight: '600', }}>{'Details'}  </Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <Image source={require('../Assets/hut.png')}
                            style={{ width: 15, height: 15, tintColor: Colors().Blue }} />
                        <Text style={{ fontWeight: '600', marginLeft: 15, }}>{'Lives in Paris, France'}  </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                        <Image source={require('../Assets/logo.png')}
                            style={{ width: 20, height: 20, }} />
                        <Text style={{ fontWeight: '600', marginLeft: 10, }}>{'Joined Hi2 in 2023'}  </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    width: '90%',
                    alignSelf: 'center',
                    justifyContent: "space-between",
                    marginTop: 20
                }}>
                    <Text>
                        {"Jame's Listing"}
                    </Text>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 10,
                            width: '35%',
                            height: 35,
                            backgroundColor: Colors().FadeGreen,
                            borderRadius: 10,
                            justifyContent: 'center'
                        }}>
                        <Image source={require('../Assets/hut.png')}
                            style={{ width: 15, height: 15, tintColor: Colors().Blue }} />
                        <Text style={{ fontWeight: '600', marginLeft: 15, color: Colors().Darkblue }}>{'Categories'}  </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={Data}
                    renderItem={(item) => _renderMarketPLaceItem(item)}
                    contentContainerStyle={{ marginTop: 10 }}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default CommerceProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    coverImgStyle: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: Colors().FadeGreen,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        opacity: 0.7
    },
    FollowButton: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: Colors().Darkblue,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center'
    },
    innerMessageContainer: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors().White,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 100,
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
    },
});
