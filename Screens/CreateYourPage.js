import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../UI/CommonHeader';
import { Colors } from '../UI/Colors';
import RNTextInputColored from '../UI/RNTextInput';
import LinearGradient from 'react-native-linear-gradient';

const CreateYourPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                width: '95%',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <CommonHeader title='Create your page' hideSearch />
                <Image source={require('../Assets/a.jpg')} style={{ width: 30, height: 30, borderRadius: 100, marginTop: 60 }} />
            </View>
            <View style={styles.HeadingConatiner}>
                <Text style={styles.questionText}>{'What is the name of your page?'}</Text>
                <Text style={styles.descText}>{'Use the name of your brand, business or organization that helps explain your page'}</Text>
            </View>
            <RNTextInputColored placeHolder="Page Name" />
            <View style={styles.HeadingConatiner}>
                <Text style={styles.questionText}>{'What is the name of your page?'}</Text>
                <Text style={styles.descText}>{'Use the name of your brand, business or organization that helps explain your page'}</Text>
            </View>
            <RNTextInputColored placeHolder="Search for categories" />
            <TouchableOpacity
            onPress={()=>navigation.navigate("CustomisePage_1")}
                style={{ 
                    position:'absolute',
                    bottom:50,
                    width:"100%", }}>
                <LinearGradient
                    style={{
                        height: 40,
                        width: '50%',
                        marginHorizontal: '5%',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf:"center"
                    }}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.7, y: 1.0 }}
                    locations={[0, 0.5, 1]}
                    colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                    <Text style={styles.buttonTextStyle}>{'Create'}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CreateYourPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    HeadingConatiner: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20
    },
    questionText: {
        color: Colors().Dark,
        fontSize: 14,
        fontWeight: '600'
    },
    descText: {
        color: Colors().Dark,
        fontSize: 12,
        fontWeight: '400',
        marginVertical: 10
    },
    buttonTextStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors().Purple,
    },
});
