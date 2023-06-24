import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal, TextInput, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../UI/CommonHeader';
import { Colors } from '../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import GroupsItem from '../Components/Home/RenderItems/GroupsItem';
import GroupPostItem from '../Components/Home/RenderItems/GroupPostItem';
import LinearGradient from 'react-native-linear-gradient';
import RNTextInputColored from '../UI/RNTextInput';
const Data = [1, 2, 3, 4, 5, 6];
const PostData = [
  {
    id: 0,
    profileImage: require('../Assets/ind.png'),
    postImage: [require('../Assets/book.png'), require('../Assets/asset.png')],
    time: '2d',
  },
  {
    id: 0,
    profileImage: require('../Assets/ind.png'),
    postImage: [require('../Assets/book.png')],
    time: '2 hrs ago',
  },

  {
    id: 0,
    profileImage: require('../Assets/a.jpg'),
    postImage: [
      require('../Assets/book.png'),
      require('../Assets/a.jpg'),
      require('../Assets/book.png'),
      require('../Assets/asset.png'),
    ],
    time: '2 hrs ago',
  },
  {
    id: 0,
    profileImage: require('../Assets/a.jpg'),
    postImage: [require('../Assets/asset.png')],
    time: '2 hrs ago',
  },
];
const otherGroupsData = [
  {
    id: 1,
    image: require('../Assets/r.jpg'),
    name: 'India Today'
  },
  {
    id: 2,
    image: require('../Assets/r.jpg'),
    name: 'Last Dance'
  },
  {
    id: 3,
    image: require('../Assets/r.jpg'),
    name: 'Great Indians'
  },
  {
    id: 4,
    image: require('../Assets/r.jpg'),
    name: 'GYM'
  },
  {
    id: 5,
    image: require('../Assets/r.jpg'),
    name: 'Concert'
  },
]

const DiscoverGroup = [
  {
    id: 1,
    image: require('../Assets/r.jpg'),
    name: 'Gaming',
    members: '10 members'
  },
  {
    id: 2,
    image: require('../Assets/a.jpg'),
    name: 'Travel',
    members: '30 members'
  },
  {
    id: 1,
    image: require('../Assets/Music.png'),
    name: 'Kids Fun',
    members: '25 members'
  },
  {
    id: 1,
    image: require('../Assets/r.jpg'),
    name: 'Art',
    members: '12 members'
  },
  {
    id: 1,
    image: require('../Assets/a.jpg'),
    name: 'GK',
    members: '10 members'
  },
  {
    id: 1,
    image: require('../Assets/Music.png'),
    name: 'Design',
    members: '10 members'
  },
]
const EventData = [
  {
    id: 1,
    image: require('../Assets/r.jpg'),
    CreatedBy: 'Gaming',
    Date: 'Sat, Mar 19',
    interested: ' 1 interested 1 going'
  },
  {
    id: 2,
    image: require('../Assets/a.jpg'),
    CreatedBy: 'Kids Fun',
    Date: 'Sat, Mar 20',
    interested: ' 3 interested 2 going'
  },
]
const Groups = ({ navigation }) => {

  const [isForYou, setIsForYou] = useState(true)
  const [isYourGroups, setIsYourGroups] = useState(false)
  const [isEvents, setIsEvents] = useState(false)
  const [isDiscovr, setIsDiscover] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [eventModal, setEventModal] = useState(false)

  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderGroupsItem = ({ item, index }) => {
    return <GroupsItem />;
  };

  const _renderPostItem = ({ item, index }) => {
    return <GroupPostItem item={item} />;
  };
  const _otherGroupsRenderItem = ({ item }) => {
    return (
      <View style={styles.otherGroupsFlatlistContainer}>
        <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={item.image} />
        <Text style={{ marginLeft: 20 }}>
          {item.name}
        </Text>
      </View>
    )
  }
  const _DiscoverRenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("GroupsDetails")}
        style={styles.dicoverMainContainer}>
        <Image source={item.image} style={{ width: '100%', height: 100, borderRadius: 8 }} />
        <Text style={[styles.discoverMemberText, { marginTop: 20 }]}>{item.name}</Text>
        <Text style={{ marginTop: 5 }}>{item.members}</Text>
        <TouchableOpacity style={styles.joinGroupButton}>
          <Text>{'Join Group'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
  const _eventRenderItem = ({ item }) => {
    return (
      <View style={styles.EventMainContainer}>
        <Image source={item.image} style={{ width: '100%', height: 200, borderRadius: 8 }} />
        <Text style={[styles.discoverMemberText, { margin: 5 }]}>{item.CreatedBy}</Text>
        <Text style={{ margin: 5 }}>{item.Date}</Text>
        <Text style={{ margin: 5 }}>{item.interested}</Text>
        <TouchableOpacity style={styles.joinGroupButton}>
          <Text style={styles.discoverMemberText}>{'Interested'}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const _renderHeader = () => (
    <>

      <View style={styles.flatListContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={_renderGroupsItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </>
  );
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Group" />
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsForYou(true)
            setIsDiscover(false)
            setIsEvents(false)
            setIsYourGroups(false)
          }}
          style={[styles.optionButtonStyle, { backgroundColor: isForYou ? Colors().Green : Colors().FadeGreen }]}>
          <Text style={styles.optionTextStyle}>For you</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsForYou(false)
            setIsDiscover(false)
            setIsEvents(false)
            setIsYourGroups(true)
          }}
          style={[styles.optionButtonStyle, { backgroundColor: isYourGroups ? Colors().Green : Colors().FadeGreen }]}>
          <Text style={styles.optionTextStyle}>Your Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsForYou(false)
            setIsDiscover(false)
            setIsEvents(true)
            setIsYourGroups(false)
          }}
          style={[styles.optionButtonStyle, { backgroundColor: isEvents ? Colors().Green : Colors().FadeGreen }]}>
          <Text style={styles.optionTextStyle}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsForYou(false)
            setIsDiscover(true)
            setIsEvents(false)
            setIsYourGroups(false)
          }}
          style={[styles.optionButtonStyle, { backgroundColor: isDiscovr ? Colors().Green : Colors().FadeGreen }]}>
          <Text style={styles.optionTextStyle}>Discover</Text>
        </TouchableOpacity>
      </View>
      {
        isForYou &&
        <FlatList
          ListHeaderComponent={_renderHeader}
          showsVerticalScrollIndicator={false}
          data={PostData}
          renderItem={_renderPostItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
        />
      }
      {
        isYourGroups &&
        <>
          <View style={styles.yourGroupsMainContainer}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: Colors().Dark }}>
              {'Groups You Manage'}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: Colors().Grey, marginTop: 10 }}>
              {'Become admin of a group to see it listed here.'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{ marginVertical: 20 }}>
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
              <Text style={styles.buttonTextStyle}>{'Create Group'}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.OtherGroupsMainContainer}>
            <Text>{'Other Groups'}</Text>
            <TouchableOpacity>
              <Image source={require('../Assets/updown.png')} style={{ width: 20, height: 25 }} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={otherGroupsData}
            renderItem={(item) => _otherGroupsRenderItem(item)}
          />
        </>

      }
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.modalView}>
              <View style={styles.modalHeaderContainer}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                  <Image style={{ width: 20, height: 20 }} source={require('../Assets/close.png')} />
                </TouchableOpacity>
                <View style={{
                  width: "80%",
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: "center"
                }}>
                  <Text style={styles.modalText}>{'Create Group'}</Text>
                </View>
              </View>
              <View style={{
                marginTop: 30
              }}>
                <Text>
                  {'Group Name'}
                </Text>
                <TextInput
                  placeholder='Name'
                  placeholderTextColor={Colors().Grey}
                  style={styles.NameTextInput}
                />
              </View>
              <View style={{
                marginTop: 30
              }}>
                <Text>
                  {'Descrip[tion'}
                </Text>
                <TextInput
                  multiline={true}
                  placeholder='Add details here...'
                  placeholderTextColor={Colors().Grey}
                  style={styles.DescriptionTextInput}
                />
              </View>
              <View style={{ marginTop: 30 }}>
                <Text>{'Upload group image'}</Text>
                <View style={styles.chooseFileMainContainer}>
                  <TouchableOpacity style={styles.chooseFileButton}>
                    <Text style={{ marginLeft: 20 }}>{'Choose file'}</Text>
                  </TouchableOpacity>
                  <Text style={{ marginLeft: 20 }}>{'No file chosen'}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.friendsButton}>
                <Text>{'Friends'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  marginVertical: 20,
                  marginBottom: 50
                }}>
                <LinearGradient
                  style={{
                    height: 40,
                    width: '60%',
                    marginHorizontal: '5%',
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 20,
                  }}
                  start={{ x: 0.0, y: 0.0 }}
                  end={{ x: 0.7, y: 1.0 }}
                  locations={[0, 0.5, 1]}
                  colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                  <Text style={styles.buttonTextStyle}>{'Create Group'}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
      </View>
      {
        isDiscovr &&
        <>
          <Text style={{
            marginLeft: 20,
            color: Colors().Dark,
            fontSize: 16,
            fontWeight: '700'
          }}>{'Suggested Group'}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 10, }}
            numColumns={2}
            data={DiscoverGroup}
            renderItem={(item) => _DiscoverRenderItem(item)}
          />
        </>
      }
      {
        isEvents &&
        <>
          <Text style={{
            marginLeft: 20,
            color: Colors().Dark,
            fontSize: 16,
            fontWeight: '700'
          }}>{'Discover Group Events'}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 10, }}
            data={EventData}
            renderItem={(item) => _eventRenderItem(item)}
          />
          <Text style={{
            color: Colors().Dark,
            fontSize: 16,
            fontWeight: '700',
            marginVertical: 20,
            textAlign: 'center'
          }}>{'Host your own event'}</Text>
          <TouchableOpacity
            onPress={() => setEventModal(true)}
            style={{
            }}>
            <LinearGradient
              style={{
                height: 40,
                width: '75%',
                marginHorizontal: '5%',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.7, y: 1.0 }}
              locations={[0, 0.5, 1]}
              colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
              <Text style={styles.buttonTextStyle}>{'Create Event'}</Text>
            </LinearGradient>
          </TouchableOpacity>
          {/* <View style={styles.centeredView}> */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={eventModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setEventModal(!eventModal);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalHeaderContainer}>
                  <TouchableOpacity onPress={() => setEventModal(!eventModal)} >
                    <Image style={{ width: 20, height: 20 }} source={require('../Assets/close.png')} />
                  </TouchableOpacity>
                  <View style={{
                    width: "80%",
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: "center"
                  }}>
                    <Text style={styles.modalText}>{'Create Event'}</Text>
                  </View>
                </View>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{ marginBottom: 50 }}>
                  <TouchableOpacity style={{
                    width: "90%",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                    alignSelf:'center'
                  }}>
                    <Image source={require('../Assets/camera.png')} style={{ width: 20, height: 20, tintColor: Colors().Green }} />
                    <Text style={{ color: Colors().Green, fontSize: 16, fontWeight: '500', marginLeft: 10 }}>{'Add cover photo'}</Text>
                  </TouchableOpacity>
                  <View style={{ width: '100%', marginTop: 30 }}>
                    <RNTextInputColored placeHolder="Event Title/Name" />
                  </View>
                  <TextInput
                    multiline={true}
                    placeholder='Event Description'
                    placeholderTextColor={Colors().Grey}
                    style={styles.EventDescriptionTextInput}
                  />
                  <View style={styles.chooseFileMainContainer}>
                    <View style={{ width: "50%" }}>
                      <RNTextInputColored placeHolder="Start Date" />
                    </View>
                    <View style={{ width: "50%" }}>
                      <RNTextInputColored placeHolder="Time" />
                    </View>
                  </View>
                  <View style={styles.chooseFileMainContainer}>
                    <View style={{ width: "50%" }}>
                      <RNTextInputColored placeHolder="Approx. Attending" />
                    </View>
                    <View style={{ width: "50%" }}>
                      <RNTextInputColored placeHolder="" />
                    </View>
                  </View>
                  <RNTextInputColored placeHolder="Venue" />
                  <RNTextInputColored placeHolder="Email ID" />
                </ScrollView>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={{
                    marginVertical: 20,
                    position: "absolute",
                    bottom: 10,
                    width: '100%',
                    alignSelf: "center"
                  }}>
                  <LinearGradient
                    style={{
                      height: 40,
                      width: '60%',
                      marginHorizontal: '5%',
                      borderRadius: 12,
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.7, y: 1.0 }}
                    locations={[0, 0.5, 1]}
                    colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                    <Text style={styles.buttonTextStyle}>{'Save'}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* </View> */}
        </>
      }
    </SafeAreaView >
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  optionButtonStyle: {
    paddingHorizontal: 10,
    borderRadius: 7,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 10,
  },
  optionTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contentContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  flatListContainer: {
    marginTop: 10,
    backgroundColor: Colors().White,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeaderContainer: {
    width: "100%",
    flexDirection: "row",
    alignSelf: 'center',
    marginTop: 20
  },
  modalView: {
    width: "100%",
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    marginLeft: 20,
    textAlign: 'center',
    fontSize: 16,
    color: Colors().Dark,
    fontWeight: '600'
  },
  dicoverMainContainer: {
    width: "45%",
    alignItems: 'center',
    margin: 10,
    height: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors().BorderColor
  },
  EventMainContainer: {
    width: "95%",
    // alignItems: 'center',
    margin: 10,
    height: 330,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: Colors().BorderColor
  },
  otherGroupsFlatlistContainer: {
    width: "90%",
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  discoverMemberText: {
    fontSize: 16,
    color: Colors().Dark,
    fontWeight: '600'
  },
  joinGroupButton: {
    width: '100%',
    backgroundColor: Colors().FadeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 8,
    marginTop: 20
  },
  yourGroupsMainContainer: {
    width: "90%",
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  OtherGroupsMainContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  NameTextInput: {
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors().BorderColor,
    height: 50,
    marginTop: 10
  },
  DescriptionTextInput: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors().BorderColor,
    height: 150,
    marginTop: 10,
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
    width:'90%',
    alignSelf:'center'
    // paddingHorizontal: 5,
  },
  friendsButton: {
    width: 100,
    backgroundColor: Colors().FadeGreen,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  chooseFileButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors().BorderColor,
    width: 150,
    height: 40,
    justifyContent: 'center',
  },
  chooseFileMainContainer: {
    width: '95%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    alignSelf:"center"
  }
});
