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

const MarketPlaceDetails = ({ navigation }) => {
    const Data = [1, 2, 3, 4, 5, 6];
    const _renderMarketPLaceItem = ({ item, index }) => {
        return <MarketPlaceItem item={item} />;
    };
    return (
        <SafeAreaView style={styles.container}>
            <CommonHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../Assets/lap.jpg')}
                    style={{ width: '100%', height: 300, borderRadius: 20, marginTop: 20 }} />
                <Text style={{ margin: 10, fontWeight: '600' }}>{'Laptop'}  </Text>
                <Text style={{ marginLeft: 10, fontWeight: '600' }}>{'$ 100'}  </Text>
                <Text style={{ marginLeft: 10, marginTop: 10 }}>{'List over a week ago in paris'}  </Text>
                <View style={styles.innerMessageContainer}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image source={require('../Assets/chat_icon.png')}
                            style={{ width: 20, height: 20, tintColor: Colors().Blue }} />
                        <Text style={{ fontWeight: '600', marginLeft: 10, }}>{'Send Seller a message'}  </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 10
                    }}>
                        <TextInput
                            placeholder='Hello, Is this available?'
                            style={styles.textInputStyle}
                        />
                        <TouchableOpacity style={{ width: '30%', alignSelf: 'center', }}
                            onPress={() => navigation.navigate("CustomisePage_3")}>
                            <LinearGradient
                                style={{
                                    height: 35,
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
                                <Text style={styles.buttonTextStyle}>{'Send '}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sellerInfo}>
                    <Text style={{ color: Colors().Dark, fontWeight: '600' }}>
                        {'Seller Informatiomn'}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CommerceProfile')}>
                        <Text style={{ color: Colors().Darkblue, fontWeight: '600' }}>
                            {'Details'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ProfileContainer}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 100 }}
                            source={require('../Assets/a.jpg')} />
                        <Text style={{ marginLeft: 10 }}>{'Sofia'}</Text>
                    </View>
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={{ color: Colors().White, fontWeight: '700' }}>{'Follow'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.productDescContainer}>
                    <Text style={{ color: Colors().Dark, fontWeight: '600' }}>{'Product Description'}</Text>
                    <Text>{'Ram 8GB / 1TB HDD'}</Text>
                    <Text>{'HP 245G7'}</Text>
                    <Text>{'New Modal'}</Text>
                    <Text>{'14" LED screen'}</Text>
                    <Text>{'1GB dedication Redeon Vega Graphics Card'}</Text>
                </View>
                <View style={{ width: "90%", alignSelf: 'center', borderBottomColor: Colors().Grey, borderBottomWidth: 1, marginVertical: 25 }}></View>
                <View style={{ width: '90%', alignSelf: "center" }}>
                    <Text style={{ color: Colors().Dark, fontWeight: '600' }}>{'Product related to this item'}</Text>
                    <Text style={{ marginTop: 10 }}>{'Sponsored'}</Text>
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

export default MarketPlaceDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    buttonTextStyle: {
        fontSize: RFValue(12),
        fontWeight: 'bold',
        color: Colors().Purple,
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
        padding: 10,
        marginTop: 20
    },
    textInputStyle: {
        backgroundColor: Colors().FadeGreen,
        width: '70%',
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 10
    },
    sellerInfo: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    followButton: {
        backgroundColor: Colors().Darkblue,
        borderRadius: 10,
        width: 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ProfileContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    productDescContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,

    },
});
