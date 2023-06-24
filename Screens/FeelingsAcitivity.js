import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../UI/Colors';
import VectorIcons from '../UI/VectorIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import RNTextInputColored from '../UI/RNTextInput';
const FeelingsAcitivity = ({ navigation }) => {
    const [searchFeeling, setSearchFeeling] = useState('')
    const [isFeeling, setIsFeeling] = useState(true)
    const [isActivity, setIsActivity] = useState(false)

    const FeelingData = [
        {
            id: 1,
            image: require('../Assets/happy.png'),
            feelingName: 'Happy'
        },
        {
            id: 2,
            image: require('../Assets/confused.png'),
            feelingName: 'Confused'
        },
        {
            id: 3,
            image: require('../Assets/emoji.png'),
            feelingName: 'Excited'
        },
        {
            id: 4,
            image: require('../Assets/fantastic.png'),
            feelingName: 'Fantastic'
        },
        {
            id: 5,
            image: require('../Assets/love.png'),
            feelingName: 'Love'
        },
        {
            id: 6,
            image: require('../Assets/party.png'),
            feelingName: 'Crazy'
        },
        {
            id: 7,
            image: require('../Assets/sad.png'),
            feelingName: 'Sad'
        },
        {
            id: 8,
            image: require('../Assets/down.png'),
            feelingName: 'Down'
        },
        {
            id: 9,
            image: require('../Assets/happy.png'),
            feelingName: 'Thankful'
        },
        {
            id: 10,
            image: require('../Assets/fantastic.png'),
            feelingName: 'Blessed'
        },
        {
            id: 11,
            image: require('../Assets/love.png'),
            feelingName: 'Down'
        },
        {
            id: 12,
            image: require('../Assets/party.png'),
            feelingName: 'Down'
        },
        {
            id: 13,
            image: require('../Assets/emoji.png'),
            feelingName: 'Down'
        },
        {
            id: 14,
            image: require('../Assets/happy.png'),
            feelingName: 'Down'
        },
        {
            id: 15,
            image: require('../Assets/down.png'),
            feelingName: 'Down'
        },
    ]
    const ActivityData = [
        {
            id: 1,
            image: require('../Assets/Celebrating.png'),
            feelingName: 'Celebrating...'
        },
        {
            id: 2,
            image: require('../Assets/Eating.png'),
            feelingName: 'Eating...'
        },
        {
            id: 3,
            image: require('../Assets/Playing.png'),
            feelingName: 'Playing...'
        },
        {
            id: 4,
            image: require('../Assets/Reading.png'),
            feelingName: 'Reading...'
        },
        {
            id: 5,
            image: require('../Assets/Travling.png'),
            feelingName: 'Traveling to...'
        },
        {
            id: 6,
            image: require('../Assets/Watching.png'),
            feelingName: 'Watching...'
        },
        {
            id: 6,
            image: require('../Assets/Calender.png'),
            feelingName: 'attending...'
        },
    ]

    const _feelingsRenderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                width: '50%',
                alignSelf: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 0.3,
                borderColor: Colors().Dark,
                padding: 20,
            }}>
                <Image style={{ width: 20, height: 20 }} source={item.image} />
                <Text style={{ marginLeft: 10, color: Colors().Dark }}>{item.feelingName}</Text>
            </TouchableOpacity>
        )
    }
    const _activityRenderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                width: '50%',
                alignSelf: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 0.3,
                borderColor: Colors().Dark,
                padding: 20,
            }}>
                <Image style={{ width: 20, height: 20 }} source={item.image} />
                <Text style={{ marginLeft: 10, color: Colors().Dark }}>{item.feelingName}</Text>
            </TouchableOpacity>
        )
    }

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
                <Text style={{ color: Colors().Dark, marginLeft: 15, fontSize: 16, fontWeight: "600" }}>{'How are you feeling?'}</Text>
            </View>
            <View style={styles.tabBarContainer}>
                {/* <TouchableOpacity style={[styles.tabBarButton, { borderColor: isFeeling ? Colors().Darkblue() : Colors().Grey }]}> */}
                <TouchableOpacity
                    onPress={() => {
                        setIsActivity(false)
                        setIsFeeling(true)
                    }}
                    style={[styles.tabBarButton, {
                        borderColor: isFeeling ? Colors().Darkblue : Colors().Grey,
                        borderBottomWidth: isFeeling ? 1 : 0.3,
                    }]}>
                    <Text style={{
                        color: isFeeling ? Colors().Darkblue : Colors().Dark
                    }}>
                        {'Feeling'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setIsActivity(true)
                        setIsFeeling(false)
                    }}
                    style={[styles.tabBarButton, {
                        borderColor: isActivity ? Colors().Darkblue : Colors().Grey,
                        borderBottomWidth: isActivity ? 1 : 0.3,
                    }]}>
                    <Text style={{
                        color: isActivity ? Colors().Darkblue : Colors().Dark
                    }}>
                        {'Activity'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.searchBarContainer}>
                <Image style={{ width: 20, height: 20 }} source={require('../Assets/search.png')} />
                <TextInput
                    style={{ marginLeft: 10 }}
                    placeholder='Search'
                    placeholderTextColor={Colors().Grey}
                    value={searchFeeling}
                    onChangeText={(text) => setSearchFeeling(text)}
                />
            </View>
            {
                isFeeling &&
                <View style={{ marginTop: 30 }}>
                    <FlatList
                        numColumns={2}
                        data={FeelingData}
                        renderItem={(item) => _feelingsRenderItem(item)}
                    />
                </View>
            }
            {
                isActivity &&
                <View style={{ marginTop: 30 }}>
                    <FlatList
                        numColumns={2}
                        data={ActivityData}
                        renderItem={(item) => _activityRenderItem(item)}
                    />
                </View>
            }
        </SafeAreaView >
    );
};

export default FeelingsAcitivity;

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
    tabBarContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        alignItems: "center",
        marginTop: 20,
        borderTopWidth: 0.3,

    },
    tabBarButton: {
        width: '50%',
        alignSelf: "center",
        justifyContent: "center",
        alignItems: 'center',
        borderColor: Colors().Grey,
        padding: 20
    },
    searchBarContainer: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: Colors().LightGreen,
        borderRadius: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.5,
        marginTop: 20
    }
});
