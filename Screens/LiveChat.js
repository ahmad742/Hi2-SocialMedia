import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../UI/Colors';
import VectorIcons from '../UI/VectorIcons';
const LiveChat = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const ChatData = [
        {
            id: 1,
            msg: 'hello',
            from: 'sender',
            image: require('../Assets/smile.png')
        },
        {
            id: 2,
            msg: 'How are you?',
            from: 'receiver',
        },
        {
            id: 3,
            msg: 'I am fine',
            from: 'sender',
        },
        {
            id: 4,
            msg: 'What are you doing',
            from: 'receiver',
        },
        {
            id: 5,
            msg: 'What are you doing',
            from: 'sender',
        },
        {
            id: 6,
            msg: 'What are you doing',
            from: 'receiver',
            image: require('../Assets/love.png')
        },
        {
            id: 7,
            msg: 'What are you doing',
            from: 'sender',
        },
        {
            id: 8,
            msg: 'What are you doing',
            from: 'sender',
        },
        {
            id: 9,
            msg: 'What are you doing',
            from: 'receiver',
        },
    ]
    const _ChatMsgRenderItem = ({ item }) => {
        return (
            <View style={styles.messageMainContainer}>
                {
                    item.from == 'sender' ?
                        <>
                            <View style={{
                                width: '60%',
                                backgroundColor: Colors().FadeGreen,
                                height: 50,
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                borderTopRightRadius: 20,
                                alignSelf: 'flex-end',
                                justifyContent: 'center',
                                padding: 10
                            }}>
                                <Text>
                                    {item.msg}
                                </Text>
                            </View>
                            {
                                item.image ?
                                    <View style={{
                                        width: '60%',
                                        alignSelf: 'flex-end',
                                        justifyContent: 'center',
                                        padding: 10,
                                        alignItems: 'flex-end'
                                    }}>
                                        <Image source={item.image} style={{ width: 30, height: 30 }} />
                                    </View>
                                    : null
                            }
                        </>
                        :
                        <>
                            <View style={{
                                width: '60%',
                                backgroundColor: Colors().BorderColor,
                                height: 50,
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                borderTopRightRadius: 20,
                                alignSelf: 'flex-start',
                                justifyContent: 'center',
                                padding: 10
                            }}>
                                <Text>
                                    {item.msg}
                                </Text>
                            </View>
                            {
                                item.image ?
                                    <View style={{
                                        width: '60%',
                                        alignSelf: 'flex-start',
                                        justifyContent: 'center',
                                        padding: 10,
                                        alignItems: 'flex-start'
                                    }}>
                                        <Image source={item.image} style={{ width: 30, height: 30 }} />
                                    </View>
                                    :
                                    null
                            }

                        </>
                }

            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerMainContainer}>
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
                <View style={styles.headerProfileContainer}>
                    <Image style={{ width: 40, height: 40, borderRadius: 100 }}
                        source={require('../Assets/a.jpg')} />
                    <View>
                        <Text style={{ marginLeft: 10, fontWeight: '700' }}>{'Lena'}</Text>
                        <Text style={{ marginLeft: 10 }}>{'Active 10 minutes ago'}</Text>
                    </View>
                </View>

                <View style={styles.callsStyle}>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 20, tintColor: Colors().Green }}
                            source={require('../Assets/phonecall.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ width: 25, height: 25, tintColor: Colors().Green }}
                            source={require('../Assets/videocamera.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                        <VectorIcons
                            icon={'Entypo'}
                            name={'dots-three-vertical'}
                            size={20}
                            color={Colors().Dark}
                        />
                    </TouchableOpacity>
                    {
                        modalVisible ?
                            <View style={styles.modalView}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Image style={{ width: 15, height: 15, tintColor: Colors().Grey }}
                                        source={require('../Assets/bell.png')} />
                                    <Text style={styles.modalText}>{'Turn on Notifications'}</Text>
                                </TouchableOpacity>
                                <View style={{
                                    borderBottomColor: Colors().BorderColor,
                                    borderBottomWidth: 1,
                                    marginVertical: 10,
                                }}></View>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Image style={{ width: 20, height: 20, tintColor: Colors().Grey }}
                                        source={require('../Assets/theme.png')} />
                                    <Text style={styles.modalText}>{'Theme'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Image style={{ width: 15, height: 15, tintColor: Colors().Grey }}
                                        source={require('../Assets/file.png')} />
                                    <Text style={styles.modalText}>{'Report'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Image style={{ width: 15, height: 15, tintColor: Colors().Grey }}
                                        source={require('../Assets/blocked.png')} />
                                    <Text style={styles.modalText}>{'block'}</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
            </View>

            <View style={{ zIndex: -1 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ marginVertical: 40, }}
                    data={ChatData}
                    renderItem={(item) => _ChatMsgRenderItem(item)}
                />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.inputContainerStyle}
            >
                <View style={styles.textInputInnerContainer}>
                    <TextInput
                        placeholder={'Say something...'}
                        placeholderTextColor={Colors().DarkGreen}
                        style={styles.textInputStyle}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity>
                        <Image
                            style={{ width: 28, height: 28, marginRight: 10 }}
                            resizeMode="cover"
                            source={require('../Assets/smiley.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.imageStyle}
                            resizeMode="cover"
                            source={require('../Assets/camera.png')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: Colors().DarkGreen,
                    height: 35,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: 10,
                    width: "15%"
                }}>
                    <Text style={{ color: Colors().White }}>
                        {'Send'}
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LiveChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors().White,
    },
    headerMainContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerProfileContainer: {
        width: '65%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    callsStyle: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainerStyle: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20
    },
    imageStyle: {
        height: 30,
        width: 30,
        tintColor: Colors().DarkGreen
    },
    textInputStyle: {
        height: 40,
        flex: 1,
        fontSize: RFValue(12),
        color: Colors().Dark,
        borderRadius: 22.5,
        marginHorizontal: 5,
    },
    textInputInnerContainer: {
        width: '83%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors().FadeGreen,
        borderRadius: 20,
        paddingHorizontal: 15
    },
    messageMainContainer: {
        width: '90%',
        alignSelf: 'center',
        margin: 15
    },
    modalView: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 130,
        width: 190,
        justifyContent: 'center',
        padding: 10,
        position: "absolute",
        right: 10,
        top: 30,
    },
    button: {
        width: "100%",
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center'
    },
    modalText: {
        marginLeft: 10,
        color:Colors().Dark
    }
});
