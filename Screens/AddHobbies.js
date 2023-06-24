import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../UI/Colors';
import VectorIcons from '../UI/VectorIcons';
const AddHobbies = ({ navigation }) => {
    const Data = [
        {
            id: 1,
            hobbyName: 'Reading'
        },
        {
            id: 2,
            hobbyName: 'Cooking'
        },
        {
            id: 3,
            hobbyName: 'Playing'
        },
        {
            id: 4,
            hobbyName: 'Programming'
        },
        {
            id: 5,
            hobbyName: 'Coding'
        },
        {
            id: 6,
            hobbyName: 'Development'
        },
        {
            id: 7,
            hobbyName: 'Singing'
        },
        {
            id: 8,
            hobbyName: 'Watching movies'
        },
    ]

    const _hobbiesRenderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.hobbyNameContainer}>
                <Text style={{ color: Colors().Darkblue, fontSize: 14, fontWeight: '700', textAlign: 'center' }}>
                    {item?.hobbyName}
                </Text>
            </TouchableOpacity>
        )
    }
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
                    <Text style={{ color: Colors().Darkblue, marginLeft: 15 }}>{'Add Hobbies'}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.saveButtonText}>{'Save'} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.desciptionText}>{'Choose your hobbies and add your own:'}</Text>
            </View>
            <View style={{ height: "50%" }}>
                <FlatList
                    numColumns={3}
                    data={Data}
                    renderItem={(item) => _hobbiesRenderItem(item)}
                />
            </View>
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>{'Search for others'}</Text>
            </View>
            <TouchableOpacity style={styles.searchBarContainer}>
                <Image style={{ width: 20, height: 20 }} source={require('../Assets/search.png')} />
                <Text style={{ marginLeft: 10, color: Colors().Dark }}>{'What you do for fun?'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default AddHobbies;

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
    saveButtonText: {
        color: Colors().DarkGreen,
        fontSize: 16,
        fontWeight: '500'
    },
    descriptionContainer: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 30
    },
    searchContainer: {
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    searchText: {
        color: Colors().Green,
        fontSize: 16,
        fontWeight: '600'
    },
    desciptionText: {
        color: Colors().Dark,
        fontSize: 16,
        fontWeight: '600'
    },
    hobbyNameContainer: {
        width: 110,
        height: 70,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors().Dark,
        // margin:10,
        margin: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBarContainer: {
        width: '80%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: Colors().LightGreen,
        borderRadius: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.5,
        marginTop: 20
    }
});
