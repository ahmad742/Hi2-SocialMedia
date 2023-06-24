import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../UI/CommonHeader';
import { Colors } from '../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import FollowPagesItem from '../Components/Home/RenderItems/FollowPagesItem';
import VectorIcons from '../UI/VectorIcons';
const Data = [1, 2, 3, 4, 5, 6];
const PostData = [
    {
        id: 0,
        profileImage: require('../Assets/dance.jpg'),
        postImage: [require('../Assets/dance.jpg')],
        time: '3d',
    },
    {
        id: 0,
        profileImage: require('../Assets/dance.jpg'),
        postImage: [
            require('../Assets/dance.jpg'),
            require('../Assets/dance.jpg'),
        ],
        time: '5 hrs ago',
    },

    {
        id: 0,
        profileImage: require('../Assets/dance.jpg'),
        postImage: [
            require('../Assets/dance.jpg'),
            require('../Assets/dance.jpg'),
            require('../Assets/dance.jpg'),
        ],
        time: '5 hrs ago',
    },
];
const GroupsDetails = ({ navigation }) => {
    const keyExtractor = useCallback((item, index) => index.toString(), []);

    const _renderfollowItem = ({ item, index }) => {
        return (
            <>
            
            <FollowPagesItem item={item} />
            <View style={styles.inputContainerStyle}>
                <Image
                    style={styles.imageStyle}
                    resizeMode="cover"
                    source={require('../Assets/a.jpg')}
                />
                <TouchableOpacity
                    style={styles.textInputStyle}
                >
                    <Text style={styles.textStyle}>{'Add a public comment...'}</Text>
                </TouchableOpacity>
            </View>
            </>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <CommonHeader />
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../Assets/a.jpg')}
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
                        {'Rocky'}
                    </Text>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                color: Colors().Dark,
                                fontSize: RFValue(12),
                                // marginLeft: 20,
                            }}>
                            {'317k members'}
                        </Text>

                        <View
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 15,
                                overflow: 'hidden',
                                borderWidth: 2,
                                borderColor: Colors().BorderColor,
                            }}>
                            <Image source={require('../Assets/asset.png')} style={{ height: '100%', width: '100%' }} />
                        </View>
                        <View
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 15,
                                overflow: 'hidden',
                                borderWidth: 2,
                                borderColor: Colors().BorderColor,
                                position: 'absolute',
                                left: 115,
                            }}>
                            <Image source={require('../Assets/book.png')} style={{ height: '100%', width: '100%', }} />
                        </View>
                        <View
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 15,
                                overflow: 'hidden',
                                borderWidth: 2,
                                borderColor: Colors().BorderColor,
                                position: 'absolute',
                                left: 125,
                            }}>
                            <Image source={require('../Assets/asset.png')} style={{ height: '100%', width: '100%', }} />
                        </View>
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
            <View style={{
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20
            }}>
                <TouchableOpacity style={{
                    width: "48%",
                    alignItems: "center",
                    justifyContent: 'center',
                    backgroundColor: Colors().BorderColor,
                    height: 30,
                    borderRadius: 10
                }}>
                    <Text>{'Joined'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "48%",
                    alignItems: "center",
                    justifyContent: 'center',
                    backgroundColor: Colors().Darkblue,
                    height: 30,
                    borderRadius: 10
                }}>
                    <Text style={{ color: Colors().White }}>{'Invite'}</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                width: '100%',
                borderWidth: 0.5,
                borderColor: Colors().BorderColor,
                marginVertical: 20
            }}></View>
            <View style={styles.inputContainerStyle}>
                <Image
                    style={styles.imageStyle}
                    resizeMode="cover"
                    source={require('../Assets/a.jpg')}
                />
                <TouchableOpacity
                    style={styles.textInputStyle}
                >
                    <Text style={styles.textStyle}>Say something...</Text>
                </TouchableOpacity>

                <VectorIcons
                    icon={'MaterialCommunityIcons'}
                    name={'image-multiple-outline'}
                    size={24}
                    color={Colors().DarkGreen}
                />
            </View>
            <View style={{
                width: '100%',
                borderWidth: 0.5,
                borderColor: Colors().BorderColor,
                marginVertical: 20
            }}></View>
            <Text style={{ color: Colors().Dark, fontWeight: "600", fontSize: 14, marginLeft:20 }}>
                {'Most Relevent'}
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={PostData}
                renderItem={_renderfollowItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.contentContainerStyle}
            />
        </SafeAreaView>
    );
};

export default GroupsDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    inputContainerStyle: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageStyle: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    textInputStyle: {
        height: 40,
        flex: 1,
        fontSize: RFValue(12),
        color: Colors().Dark,
        backgroundColor: Colors().FadeGreen,
        borderRadius: 22.5,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: RFValue(10),
        color: Colors().DarkGreen,
        fontWeight:"600"
    },
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
