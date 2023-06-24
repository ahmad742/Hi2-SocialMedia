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

const CustomisePage_3 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerMainContainer}>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
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
                    <Image source={require('../Assets/r.jpg')} style={{ height: 30, width: 30, borderRadius: 100 }} />
                </View>
            </View>
            <View style={styles.innerContainer}>
                <Text style={{ color: Colors().Dark, fontSize: RFValue(12), fontWeight: '600' }}>
                    {'Stay informed about your Page'}</Text>
                <View style={styles.radioButtonContainer}>
                    <View>
                        <Text style={{ color: Colors().Dark, fontSize: RFValue(10), fontWeight: '600' }}>
                            {'Page notifications on your profile'}</Text>
                        <Text style={{ color: Colors().Grey, fontSize: RFValue(9),marginTop:7}}>
                            {'Do not miss updates about your page while \n you are switched into your profile sofia'}</Text>
                    </View>
                    <View style={{ borderRadius: 9, borderWidth: 1, borderColor: Colors().Blue, width: 35, height: 20, alignItems: 'flex-end', paddingHorizontal: 2, justifyContent: 'center' }}>
                        <View style={{ borderRadius: 100, backgroundColor: Colors().Darkblue, width: 10, height: 10, }}></View>
                    </View>
                </View>
                <View style={styles.radioButtonContainer}>
                    <View>
                        <Text style={{ color: Colors().Dark, fontSize: RFValue(10), fontWeight: '600' }}>
                            {'Marketing and promotional emails about\nyour page'}</Text>
                        <Text style={{ color: Colors().Grey, fontSize: RFValue(9),marginTop:7}}>
                            {'Find out about services that may help make \n your page a success'}</Text>
                    </View>
                    <View style={{ borderRadius: 9, borderWidth: 1, borderColor: Colors().Blue, width: 35, height: 20, alignItems: 'flex-end', paddingHorizontal: 2, justifyContent: 'center' }}>
                        <View style={{ borderRadius: 100, backgroundColor: Colors().Darkblue, width: 10, height: 10, }}></View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ width: '70%', alignSelf: 'center', position: 'absolute', bottom: 40 }}
                onPress={() => navigation.navigate("Home")}>
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
                    <Text style={styles.buttonTextStyle}>{'Done'}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CustomisePage_3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
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
    radioButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    innerContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30
    }
});
