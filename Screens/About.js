import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../UI/Colors';
import VectorIcons from '../UI/VectorIcons';
const About = ({ navigation }) => {
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
                <Text style={{ color: Colors().Darkblue, marginLeft: 15, fontSize: 16, fontWeight: '600' }}>{'About'}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}> 
            <View style={styles.headingConatiner}>
                <Text style={styles.headingText}> {'Details'} </Text>
                <TouchableOpacity>
                    <Image style={{ width: 20, height: 20 }} source={require('../Assets/edit.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.addContainer}>
                <View style={styles.addIcon}>
                    <Text style={{ fontSize: 20, color: Colors().White }}>{'+'}</Text>
                </View>
                <Text style={{ fontSize: 16, color: Colors().Green, fontWeight: '600', marginLeft: 15 }}>{'Add a workplace'}</Text>
            </View>
            <View style={styles.headingConatiner}>
                <Text style={styles.heading2Text}> {'Education'} </Text>
                <TouchableOpacity>
                    <Image style={{ width: 20, height: 20 }} source={require('../Assets/edit.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.radioButtonContainer}>
                <View style={{ borderRadius: 9, borderWidth: 1, borderColor: Colors().Blue, width: 30, height: 20, alignItems: 'flex-end', paddingHorizontal: 2, justifyContent: 'center' }}>
                    <View style={{ borderRadius: 100, backgroundColor: Colors().Darkblue, width: 10, height: 10, }}></View>
                </View>
                <Text style={{ marginLeft: 10 }}>{'Studied at junior PVC college'}</Text>
            </View>
            <View style={styles.addContainer}>
                <View style={styles.addIcon}>
                    <Text style={{ fontSize: 20, color: Colors().White }}>{'+'}</Text>
                </View>
                <Text style={{ fontSize: 16, color: Colors().Green, fontWeight: '600', marginLeft: 15 }}>{'Add a college'}</Text>
            </View>
            <View style={styles.addContainer}>
                <View style={styles.addIcon}>
                    <Text style={{ fontSize: 20, color: Colors().White }}>{'+'}</Text>
                </View>
                <Text style={{ fontSize: 16, color: Colors().Green, fontWeight: '600', marginLeft: 15 }}>{'Add a highschool'}</Text>
            </View>
            <View style={styles.headingConatiner}>
                <Text style={styles.heading2Text}> {'Current City'} </Text>
                <TouchableOpacity>
                    <Image style={{ width: 20, height: 20 }} source={require('../Assets/edit.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.radioButtonContainer}>
                <View style={{ borderRadius: 9, borderWidth: 1, borderColor: Colors().Blue, width: 30, height: 20, alignItems: 'flex-end', paddingHorizontal: 2, justifyContent: 'center' }}>
                    <View style={{ borderRadius: 100, backgroundColor: Colors().Darkblue, width: 10, height: 10, }}></View>
                </View>
                <Text style={{ marginLeft: 10 }}>{'Lives in Paris, France'}</Text>
            </View>
            <View style={styles.headingConatiner}>
                <Text style={styles.heading2Text}> {'Hometown'} </Text>
                <TouchableOpacity>
                    <Image style={{ width: 20, height: 20 }} source={require('../Assets/edit.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.radioButtonContainer}>
                <View style={{ borderRadius: 9, borderWidth: 1, borderColor: Colors().Blue, width: 30, height: 20, alignItems: 'flex-end', paddingHorizontal: 2, justifyContent: 'center' }}>
                    <View style={{ borderRadius: 100, backgroundColor: Colors().Darkblue, width: 10, height: 10, }}></View>
                </View>
                <Text style={{ marginLeft: 10 }}>{'From Merseiwlli'}</Text>
            </View>
            <View style={styles.headingConatiner}>
                <Text style={styles.heading2Text}> {'Contact info'} </Text>
            </View>
            <View style={styles.addContainer}>
                <View style={styles.addIcon}>
                    <Text style={{ fontSize: 20, color: Colors().White }}>{'+'}</Text>
                </View>
                <Text style={{ fontSize: 16, color: Colors().Green, fontWeight: '600', marginLeft: 15 }}>{'Add a phone number'}</Text>
            </View>
            <View style={styles.headingConatiner}>
                <Text style={styles.heading2Text}> {'Basic info'} </Text>
            </View>
            <View style={styles.addContainer}>
                <View style={styles.addIcon}>
                    <Text style={{ fontSize: 20, color: Colors().White }}>{'+'}</Text>
                </View>
                <Text style={{ fontSize: 16, color: Colors().Green, fontWeight: '600', marginLeft: 15 }}>{'Add a Language'}</Text>
            </View>
            <View style={styles.addContainer}>
                <Image source={require('../Assets/contact.png')} style={{ width: 20, height: 20 }} />
                <Text style={{ fontSize: 16, color: Colors().Dark, marginLeft: 15 }}>{'Female'}</Text>
            </View>
            <View style={styles.addContainer}>
                <Image source={require('../Assets/birthday.png')} style={{ width: 20, height: 20 }} />
                <Text style={{ fontSize: 16, color: Colors().Dark, marginLeft: 15 }}>{'10 December, 1996'}</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default About;

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
    headingConatiner: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    headingText: {
        color: Colors().Dark,
        fontSize: 16,
        fontWeight: '500'
    },
    heading2Text: {
        color: Colors().Darkblue,
        fontSize: 16,
        fontWeight: '500'
    },
    addIcon: {
        backgroundColor: Colors().Green,
        borderRadius: 100,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    radioButtonContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});
