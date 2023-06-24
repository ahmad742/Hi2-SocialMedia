import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../UI/Colors';
import VectorIcons from '../UI/VectorIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import RNTextInputColored from '../UI/RNTextInput';
const EditBio = ({ navigation }) => {
    const [description, setDescription] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerMainContainer}>
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
                    <Text style={{ color: Colors().Darkblue, marginLeft: 15 }}>{'Edit Bio'}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.saveButtonText}>{'Save'} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.profileContainer}>
                <View>
                    <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={require('../Assets/r.jpg')} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, color: Colors().Dark, fontWeight: '700' }}>{'Rosy'}  </Text>
                    <View style={styles.publicContainer}>
                        <Image style={{ width: 20, height: 20, tintColor: Colors().Green }} source={require('../Assets/earth.png')} />
                        <Text style={{ marginLeft: 10 }}>{'Public'}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    placeholder={'Add a short description yourself...'}
                    placeholderTextColor={'#7B7878'}
                    style={styles.textInputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    multiline={true}
                />
            </View>
            <View style={{ width: '95%', alignSelf: 'center', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text>{'0/100'}</Text>
            </View>
        </SafeAreaView>
    );
};

export default EditBio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    headerContainer: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerMainContainer: {
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInputStyle: {
        // height: 45,
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        // fontFamily: FontFamily,
        fontSize: RFValue(12),
        color: Colors().Dark,
    },
    textInputContainer: {
        marginVertical: 18,
        width: '95%',
        backgroundColor: Colors().White,
        height: 125,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        paddingHorizontal: 5,
        alignSelf: 'center'
    },
    saveButtonText: {
        color: Colors().DarkGreen,
        fontSize: 16,
        fontWeight: '500'
    },
    publicContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    profileContainer: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 30
    }
});
