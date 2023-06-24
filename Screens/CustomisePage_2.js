import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import React from 'react';
import CommonHeader from '../UI/CommonHeader';
import { Colors } from '../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import RNTextInputColored from '../UI/RNTextInput';
import LinearGradient from 'react-native-linear-gradient';
import VectorIcons from '../UI/VectorIcons';

const CustomisePage_2 = ({ navigation }) => {
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
                    <Text style={{ marginLeft: 10, fontWeight: '700', fontSize: RFValue(14) }}>{'Customise your page'}</Text>
                </View>
                <View style={{
                    width: '20%',
                    alignItems: 'flex-end'
                }}>
                    <TouchableOpacity>
                        <Image style={{ width: 30, height: 30, borderRadius: 100 }}
                            source={require('../Assets/r.jpg')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={styles.contentContainerStyle}>
                <View style={{
                    width: '90%',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 50
                }}>
                    <Text style={{ marginLeft: 10, fontWeight: '600', fontSize: RFValue(12) }}>{'Build your page audience'}</Text>
                    <Text style={{ marginLeft: 10, fontSize: RFValue(10), marginTop: 15 }}>{'Grow your page by inviting your friends'}</Text>
                    <View
                        style={{
                            width: '90%',
                            backgroundColor: 'red',
                            marginVertical: 20
                        }}>
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
                            <Image source={require('../Assets/r.jpg')} style={{ height: '100%', width: '100%', }} />
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
                                left: 132,
                            }}>
                            <Image source={require('../Assets/asset.png')} style={{ height: '100%', width: '100%', }} />
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
                                left: 150,
                            }}>
                            <Image source={require('../Assets/a.jpg')} style={{ height: '100%', width: '100%', }} />
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
                                left: 170,
                            }}>
                            <Image source={require('../Assets/asset.png')} style={{ height: '100%', width: '100%', }} />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("InviteFriendsPage")}
                        style={{
                            width: "55%",
                            height: 35,
                            borderRadius: 10,
                            borderColor: Colors().Darkblue,
                            borderWidth: 1.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 30
                        }}>
                        <Text style={{ fontWeight: '700', fontSize: RFValue(12), color: Colors().Darkblue }}>{'Invite friends'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ width: '50%', alignSelf: 'center', position: 'absolute', bottom: 20 }}
                    onPress={() => navigation.navigate("CustomisePage_3")}>
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
                        <Text style={styles.buttonTextStyle}>{'Next'}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CustomisePage_2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    coverPhotoContainer: {
        margin: '5%',
        height: 150,
        borderWidth: 1,
        borderColor: Colors().BorderColor,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors().BorderColor,

    },
    contentContainerStyle: {
        paddingVertical: 20,
        backgroundColor: Colors().White,
        flex: 1
    },
    buttonTextStyle: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
        color: Colors().Purple,
    },
    headerMainContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

});
