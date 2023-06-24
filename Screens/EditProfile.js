import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Colors } from '../UI/Colors';
import VectorIcons from '../UI/VectorIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import RNTextInputColored from '../UI/RNTextInput';
const EditProfile = ({ navigation }) => {
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
                <Text style={{ color: Colors().Darkblue, marginLeft: 15 }}>{'Edit Profile'}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headingConatiner}>
                    <Text style={styles.headingText}> {'Profile photo'} </Text>
                    <TouchableOpacity>
                        <Text style={styles.editText}> {'Edit'}  </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageConatiner}>
                    <Image style={{ width: 130, height: 130, borderRadius: 100 }} source={require('../Assets/r.jpg')} />
                </View>
                <View style={styles.headingConatiner}>
                    <Text style={styles.headingText}> {'Cover photo'} </Text>
                    <TouchableOpacity>
                        <Text style={styles.editText}> {'Edit'}  </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.coverImageContiner}>
                    <Text style={{ color: Colors().Grey, fontSize: 20, fontWeight: '600' }}>{'No image available'}</Text>
                </View>
                <View style={styles.headingConatiner}>
                    <Text style={styles.headingText}> {'Bio'} </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EditBio')}>
                        <Text style={styles.editText}> {'Add'}  </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        editable={false}
                        placeholder={'Describe yourself...'}
                        placeholderTextColor={'#7B7878'}
                        style={styles.textInputStyle}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.headingConatiner}>
                    <Text style={styles.headingText}> {'Details'} </Text>
                    <TouchableOpacity>
                        <Text style={styles.editText}> {'Edit'}  </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.cardRowContainer}>
                        <VectorIcons
                            icon={'MaterialCommunityIcons'}
                            name={'home-variant-outline'}
                            size={20}
                            color={Colors().Purple}
                        />
                        <Text style={styles.infoTextStyle}>
                            lives in
                            {'  '}
                            <Text style={styles.countryTextStyle}>Paris,France</Text>
                        </Text>
                    </View>
                    <View style={styles.cardRowContainer}>
                        <VectorIcons
                            icon={'MaterialCommunityIcons'}
                            name={'shield-home-outline'}
                            size={20}
                            color={Colors().Purple}
                        />
                        <Text style={styles.infoTextStyle}>From Marseille</Text>
                    </View>
                    <View style={styles.cardRowContainer}>
                        <VectorIcons
                            icon={'MaterialCommunityIcons'}
                            name={'office-building'}
                            size={20}
                            color={Colors().Purple}
                        />
                        <Text style={styles.infoTextStyle}>works at Bnp Paribas</Text>
                    </View>
                    <View style={styles.cardRowContainer}>
                        <VectorIcons
                            icon={'MaterialCommunityIcons'}
                            name={'phone-outline'}
                            size={20}
                            color={Colors().Purple}
                        />
                        <Text style={styles.infoTextStyle}>858585858</Text>
                    </View>
                    <View style={styles.cardRowContainer}>
                        <VectorIcons
                            icon={'Entypo'}
                            name={'dots-three-horizontal'}
                            size={20}
                            color={Colors().Purple}
                        />
                        <Text style={styles.infoTextStyle}>see your info...</Text>
                    </View>
                </View>
                <View style={styles.headingConatiner}>
                    <Text style={styles.headingText}> {'Hobbies'} </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddHobbies')}>
                        <Text style={styles.editText}> {'Add'}  </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('About')}
                    style={{
                        marginVertical: 40,
                    }}>
                    <LinearGradient
                        style={styles.buttonStyle}
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 0.7, y: 1.0 }}
                        locations={[0, 0.5, 1]}
                        colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                        <Text style={styles.buttonTextStyle}>{'Edit your about info'}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    headerContainer: {
        width: '95%',
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
    editText: {
        color: Colors().DarkGreen,
        fontSize: 16,
        fontWeight: '500'
    },
    imageConatiner: {
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    coverImageContiner: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: Colors().LightGreen,
        borderRadius: 10,
        height: 150,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5
    },
    cardContainer: {
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: Colors().White,
        marginHorizontal: 10,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
    },
    cardRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    infoTextStyle: {
        fontSize: RFValue(12),
        marginLeft: 10,
        color: Colors().Dark,
    },
    buttonTextStyle: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
        color: Colors().Purple,
    },
    buttonStyle: {
        height: 40,
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        height: 45,
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        // fontFamily: FontFamily,
        fontSize: RFValue(12),
        color: Colors().Dark,
    },
    textInputContainer: {
        marginVertical: 8,
        width: '95%',
        backgroundColor: Colors().White,
        height: 45,
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
    }
});
