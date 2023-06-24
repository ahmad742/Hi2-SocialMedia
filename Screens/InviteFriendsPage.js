import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../UI/CommonHeader';
import { Colors } from '../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import FollowPagesItem from '../Components/Home/RenderItems/FollowPagesItem';
import VectorIcons from '../UI/VectorIcons';
import LinearGradient from 'react-native-linear-gradient';

const InviteFriendsPage = ({ navigation }) => {

    const friendsData = [
        {
            id: 1,
            image: require('../Assets/a.jpg'),
            name: 'jasmine',
        },
        {
            id: 2,
            image: require('../Assets/r.jpg'),
            name: 'Rosy',
        },
        {
            id: 3,
            image: require('../Assets/a.jpg'),
            name: 'Sofia',
        },
        {
            id: 4,
            image: require('../Assets/r.jpg'),
            name: 'Maria',
        },
        {
            id: 5,
            image: require('../Assets/a.jpg'),
            name: 'Leana',
        },
        {
            id: 6,
            image: require('../Assets/r.jpg'),
            name: 'Sam',
        },
        {
            id: 7,
            image: require('../Assets/a.jpg'),
            name: 'Aleena',
        },
        {
            id: 8,
            image: require('../Assets/r.jpg'),
            name: 'Leana',
        },
        {
            id: 9,
            image: require('../Assets/a.jpg'),
            name: 'Leana',
        },
    ]
    const _FriendListRender = ({ item }) => {
        return (
            <View style={{
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
                margin: 15,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    width: '80%',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image source={item.image}
                        style={{ width: 40, height: 40, borderRadius: 100 }} />
                    <Text style={{ marginLeft: 15 }}>{item.name}</Text>
                </View>
                <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 100, borderColor: Colors().Darkblue, borderWidth: 1 }}></TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerMainContainer}>
                <View style={{
                    width: '80%',
                    flexDirection: 'row'
                }}>
                    <VectorIcons
                        style={styles.iconStyle}
                        icon="Feather"
                        name="arrow-left-circle"
                        size={24}
                        color={Colors().Green}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                    <Text style={{ marginLeft: 10, fontWeight: '700', fontSize: RFValue(14) }}>{'Invite Friends'}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.searchBarContainer}>
                <Image style={{ width: 20, height: 20 }} source={require('../Assets/search.png')} />
                <TextInput
                    placeholder='Search for friends'
                    placeholderTextColor={Colors().Grey}
                    style={{ paddingHorizontal: 15 }}
                />
            </TouchableOpacity>
            <Text style={{ color: Colors().Darkblue, margin: 23 }}>
                {'Select all (30)'}
            </Text>
            <FlatList
                style={{ marginBottom: 30 }}
                data={friendsData}
                renderItem={(item) => _FriendListRender(item)}
            />
            <TouchableOpacity style={{ width: '70%', alignSelf: 'center', position: 'absolute', bottom: 20 }}
            // onPress={() => navigation.navigate("CustomisePage_3")}
            >
                <LinearGradient
                    style={{
                        height: 40,
                        width: '90%',
                        marginHorizontal: '5%',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.7, y: 1.0 }}
                    locations={[0, 0.5, 1]}
                    colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                    <Text style={styles.buttonTextStyle}>{'Send Invites'}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default InviteFriendsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    headerMainContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBarContainer: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: Colors().LightGreen,
        borderRadius: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.4,
        marginTop: 20
    },
    buttonTextStyle: {
        fontSize: RFValue(12),
        fontWeight: 'bold',
        color: Colors().Purple,
    },
});
