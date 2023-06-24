import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';
import React, { useCallback } from 'react';
import { Colors } from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import EventsItem from '../Components/Home/RenderItems/EventsItem';
import FutureEventsItem from '../Components/Home/RenderItems/FutureEventsItem';
import VectorIcons from '../UI/VectorIcons';
const Data = [1, 2, 3];

const EventDetails = ({ navigation }) => {
    const keyExtractor = useCallback((item, index) => index.toString(), []);
    const _renderFutureItem = ({ item, index }) => {
        return <FutureEventsItem />;
    };

    const Header = () => {
        return (
            <View style={styles.rowContainer}>
                <Text style={styles.textStyle}>Suggested</Text>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{
                    width: '100%',
                    height: 250,
                }}>
                    <Image source={require('../Assets/Music.png')} style={{
                        width: '100%',
                        flex: 1,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }} />
                    <View style={{
                        position: 'absolute',
                        left: 10,
                        top: 10
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
                    </View>
                </View>
                <View style={{
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10
                }}>
                    <Text style={{
                        color: Colors().Blue,
                        fontSize: RFValue(12),
                        fontWeight: '600'
                    }}>
                        {'Sat, Mar 19 at 3:00 PM - 9:00 PM'}
                    </Text>
                    <Text style={{
                        marginTop: 10,
                        color: Colors().Dark,
                        fontSize: RFValue(13),
                        fontWeight: '600'
                    }}>
                        {'Kids workshop'}
                    </Text>
                    <Text style={{
                        marginTop: 10
                    }}>
                        {'Created by: James D'}
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.titleStyle}>{'Interested'}</Text>
                </TouchableOpacity>
                <View style={styles.details}>
                    <Image source={require('../Assets/clock.png')} style={{ width: 20, height: 20 }} />
                    <Text style={styles.detailsText}>{'3 hrs'}</Text>
                </View>
                <View style={styles.details}>
                    <Image source={require('../Assets/location.png')} style={{ width: 20, height: 20 }} />
                    <Text style={styles.detailsText}>{'Paris'}</Text>
                </View>
                <View style={styles.details}>
                    <Image source={require('../Assets/checkmark.png')} style={{ width: 20, height: 20 }} />
                    <Text style={styles.detailsText}>{'2 going , 44 interested'}</Text>
                </View>
                <View style={styles.details}>
                    <Image source={require('../Assets/earth.png')} style={{ width: 20, height: 20 }} />
                    <Text style={styles.detailsText}>{'Public (Anyone on or off Hi2)'}</Text>
                </View>
                <Text style={{ marginLeft: 20, fontWeight: '700', color: Colors().Dark, fontSize: RFValue(12), marginTop: 20 }}>{'Meet your host'}</Text>
                <View style={styles.hostProfileView}>
                    <View style={styles.hostImageStyle}>
                        <Image source={require('../Assets/r.jpg')} style={{ width: 150, height: 140, borderRadius: 100 }} />
                    </View>
                    <Text style={{ fontWeight: '700', color: Colors().Dark, fontSize: RFValue(14), textAlign: 'center' }}>{'Kids Zone'}</Text>
                    <Text style={{ color: Colors().Dark, fontSize: RFValue(10), textAlign: 'center' }}>{'1.6k past events, 18k followers'}</Text>
                    <View style={styles.inHostBorderline}></View>
                    <Text style={{ color: Colors().Dark, fontSize: RFValue(10), marginHorizontal: 20, fontWeight: '500', marginTop: 10 }}>
                        {'Ideas to have workshop for children during events, parties or at home with families. Simple activities for childres'}
                    </Text>
                    <TouchableOpacity style={styles.FollowbuttonStyle}>
                        <Text style={styles.titleStyle}>{'Follow'}</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    ListHeaderComponent={Header}
                    showsVerticalScrollIndicator={false}
                    data={Data}
                    renderItem={_renderFutureItem}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default EventDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    rowContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginTop: 10,
    },
    optionButtonStyle: {
        backgroundColor: Colors().FadeGreen,
        paddingHorizontal: 10,
        borderRadius: 7,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 5,
    },
    optionTextStyle: {
        fontSize: RFValue(12),
        color: Colors().Dark,
    },
    textStyle: {
        fontSize: RFValue(14),
        color: Colors().Dark,
        fontWeight: '700',
    },
    contentContainerStyle: {
        paddingVertical: 15,
        paddingHorizontal: 5,
    },
    buttonStyle: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: Colors().Darkblue,
        borderRadius: 12,
        marginTop: 20,
        alignSelf: 'center'
    },
    FollowbuttonStyle: {
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        backgroundColor: Colors().Darkblue,
        borderRadius: 12,
        marginTop: 20,
        alignSelf: 'center'
    },
    titleStyle: {
        fontSize: RFValue(12),
        fontWeight: '900',
        color: Colors().White,
    },
    details: {
        width: "90%",
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 20
    },
    detailsText: {
        marginLeft: 10,
    },
    hostProfileView: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors().BorderColor,
        height: 360,
        marginVertical: 20,
        borderRadius: 8
    },
    hostImageStyle: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        height: "50%",
    },
    inHostBorderline: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: Colors().Grey,
        marginTop: 10,
        opacity: 0.3
    }
});
