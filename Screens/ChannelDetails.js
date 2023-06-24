import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';

const ChannelDetails = ({ navigation }) => {


    const PopularData = [
        {
            id: 1,
            image: require('../Assets/r.jpg'),
            songName: 'Morning no. 1'
        },
        {
            id: 2,
            image: require('../Assets/a.jpg'),
            songName: '295 last Ride'
        },
        {
            id: 3,
            image: require('../Assets/r.jpg'),
            songName: 'Sidhu Mussy wala'
        },
        {
            id: 4,
            image: require('../Assets/a.jpg'),
            songName: 'Aj phr '
        },
    ]
    const Channeldata = [
        {
            id: 1,
            image: require('../Assets/Channel1.png')
        },
        {
            id: 2,
            image: require('../Assets/a.jpg')
        },
        {
            id: 3,
            image: require('../Assets/r.jpg')
        },
    ]
    _TopStationsrenderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    width: 110,
                    marginTop: 20,
                    margin: 5
                }}>
                <Image style={{ width: "100%", height: 130, borderRadius: 15 }} source={item.image} />
            </TouchableOpacity>
        );
    }
    const PopularRenderItem = ({ item }) => {
        return (
            <View style={styles.songsMainConatiner}>
                <View style={styles.innerSongsContainer}>
                    <Image style={{ width: 40, height: 40, borderRadius: 8 }} source={item?.image} />
                    <Text style={{ marginLeft: 15 }}>{item?.songName}</Text>

                </View>
                <VectorIcons
                    icon={'FontAwesome'}
                    name={'play-circle'}
                    size={25}
                    color={Colors().Darkblue}
                />
            </View>

        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
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
                <View style={styles.locationContainer}>
                    <Image style={{ width: 20, height: 20, tintColor: Colors().Darkblue }} source={require('../Assets/location.png')} />
                    <Text style={{ color: Colors().Darkblue }}>{'Netherland'}</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
                <Text style={[styles.titleStyle,{color:Colors().Dark, fontWeight:'700'}]}>{'RED FM'}</Text>
                <Text style={[styles.titleStyle,{color:Colors().Dark, fontWeight:'700'}]}>{'93.5'}</Text>
                <Text style={styles.titleStyle}>{'By Becca Benyard'}</Text>
                <View style={styles.ratingContainer}>
                    <Image style={{ width: 15, height: 15, marginTop: 10 }} source={require('../Assets/star.png')} />
                    <Text style={styles.titleStyle}>{'5.0'}</Text>
                </View>
                <View style={{
                    width: '95%',
                    position: 'absolute',
                    alignItems: 'flex-end',
                    zIndex: 1,
                    top:-10
                }}>
                    <Image style={{ width: 180, height: 180, marginTop: 10, borderRadius: 10, }} source={require('../Assets/Channel1.png')} />

                </View>
                <View style={styles.popularMainConatiner}>
                    <Text style={{ marginTop: 50, fontWeight:'700', color: Colors().Dark }}>
                        {'Popular Now'}
                    </Text>

                    <FlatList
                        data={PopularData}
                        renderItem={(item) => PopularRenderItem(item)}
                        keyExtractor={item => item.id}
                    />
                    <Text  style={{fontWeight:'700', color: Colors().Dark }}>
                        {'Release Now'}
                    </Text>
                    <FlatList
                        horizontal
                        data={Channeldata}
                        renderItem={(item) => _TopStationsrenderItem(item)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChannelDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    containerStyle: {
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        // backgroundColor: 'red',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: RFValue(12),
        color: Colors().Purple,
        fontWeight: '600',
        marginHorizontal: 10,
        marginTop: 10
    },
    textStyle: {
        marginLeft: 10,
        fontSize: RFValue(14),
        color: Colors().Dark,
        fontWeight: '500',
    },
    contentContainerStyle: {
        paddingBottom: 130,
        marginTop: 20
    },
    headerContainer: {
        width: '95%',
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '27%'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
    },
    songsMainConatiner: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    innerSongsContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularMainConatiner: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors().BorderColor,
        padding: 20,
        marginTop: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    }
});
