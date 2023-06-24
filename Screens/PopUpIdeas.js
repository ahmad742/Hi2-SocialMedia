import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../UI/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const PopUpIdeas = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={styles.innerContainer}>
                    <View style={{
                        width: '100%',
                        backgroundColor: Colors().FadeGreen,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 40,
                        alignItems: 'center',
                        paddingHorizontal: 10
                    }}>
                        <View style={{
                            width: '90%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{ fontSize: RFValue(12), fontWeight: '700', color: Colors().Dark }}>
                                {'Pop your Ideas'}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                width: 22,
                                height: 22,
                                borderRadius: 100,
                                borderWidth: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image style={{ width: 10, height: 10, }}
                                source={require('../Assets/close.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: RFValue(12), fontWeight: '700', color: Colors().Darkblue, margin: 10, marginTop: 20 }}>
                        {'Tell us how we can improve?'}</Text>
                    <TextInput
                        multiline={true}
                        placeholder='Mention details here...'
                        placeholderTextColor={Colors().Grey}
                        style={styles.EventDescriptionTextInput}
                    />
                    <TouchableOpacity style={styles.addssPhotoContainer}>
                        <Text style={{ fontSize: RFValue(10), fontWeight: '500', color: Colors().Darkblue, }}>
                            {'Add a screenshot or video (recomended)'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginVertical: 20,
                            position: "absolute",
                            bottom: 0,
                            width: '100%',
                            alignSelf: "center"
                        }}>
                        <LinearGradient
                            style={{
                                height: 40,
                                width: '50%',
                                marginHorizontal: '5%',
                                borderRadius: 12,
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                // marginTop: 20
                            }}
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 0.7, y: 1.0 }}
                            locations={[0, 0.5, 1]}
                            colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                            <Text style={styles.buttonTextStyle}>{'Submit'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default PopUpIdeas

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors().White,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '93%',
        alignSelf: 'center',
        height: 350,
        borderRadius: 12,
        backgroundColor: Colors().White,
        marginTop:"50%"
    },
    EventDescriptionTextInput: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors().BorderColor,
        backgroundColor: Colors().White,
        height: 100,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "93%",
        alignSelf: 'center'
        // paddingHorizontal: 5,
    },
    addssPhotoContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors().BorderColor,
        backgroundColor: Colors().White,
        height: 50,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "93%",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 5,
    },
    buttonTextStyle: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
        color: Colors().Purple,
    },
})