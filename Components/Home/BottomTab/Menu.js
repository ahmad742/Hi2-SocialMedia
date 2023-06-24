import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  Modal,
  TextInput,
  FlatList
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../../../UI/VectorIcons';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../../../UI/CommonHeader';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const [dropIsOpened, setDropDownOpened] = useState(false);
  const [secondDropIsOpened, setSecondDropDownOpened] = useState(false);
  const [modalVisible, setModalVisible] = useState(false)
  const [languageModal, setLanguageModal] = useState(false)


  const languages = [
    {
      id: 1,
      name: 'Urdu'
    },
    {
      id: 2,
      name: 'English'
    },
    {
      id: 3,
      name: 'Punjabi'
    },
    {
      id: 4,
      name: 'Farsi'
    },
    {
      id: 5,
      name: 'Pushto'
    },
  ]

  const _languageRenderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Menu" common color={Colors().FadeGreen} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 20,
        }}>
        <View style={styles.profileContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../Assets/r.jpg')}
              style={styles.dpStyle}
            />
            <Text style={styles.profileNameStyle}>Rosy</Text>
          </View>
          <Image
            source={require('../../../Assets/a.jpg')}
            style={[styles.smallStyle]}
          />
        </View>
        <Text style={styles.shortcutTextStyle}>Your Shortcuts</Text>
        <View style={styles.shortcutContainer}>
          <View style={styles.floatingImage}>
            <Image
              resizeMode="contain"
              source={require('../../../Assets/pages.png')}
              style={{
                width: 15,
                height: 15,
                position: 'absolute',
              }}
            />
          </View>
          <Image
            source={require('../../../Assets/a.jpg')}
            style={styles.dpStyle}
          />
        </View>
        <Text style={styles.shortcutTextStyle}>All Shortcuts</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/profile.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Friends')}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/friends.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Friends</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Groups');
            }}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/group.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Group</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chat');
            }}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/chat.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Chat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Events');
            }}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/events.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MarketPlace')}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/marketplace.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>MarketPlace</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GoLive');
            }}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/live.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Go Live</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Radio');
            }}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/radio.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Radio</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Pages');
            }}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/pages.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Pages</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('News');
            }}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/news.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>News</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => navigation.replace('Home')}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/group.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Hi2 Feeds</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Watch")}
            style={styles.blockContainer}>
            <Image
              source={require('../../../Assets/videos.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Videos</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.rowContainer, { marginBottom: 10 }]}>
          <TouchableOpacity
            style={styles.blockContainer}
            onPress={() => {
              navigation.navigate('Invite');
            }}>
            <Image
              source={require('../../../Assets/invite.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textStyle}>Invite</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dropDownContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <VectorIcons
              icon="Feather"
              name={'help-circle'}
              color={Colors().Purple}
              size={24}
            />
            <Text
              style={{
                marginLeft: 5,
                color: Colors().Grey,
              }}>
              Help & Support
            </Text>
          </View>
          <VectorIcons
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.create(
                  300,
                  LayoutAnimation.Types.easeInEaseOut,
                  LayoutAnimation.Properties.scaleY,
                ),
              );
              setDropDownOpened(!dropIsOpened);
            }}
            icon="MaterialIcons"
            name={dropIsOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            color={Colors().Purple}
            size={24}
          />
        </View>
        {dropIsOpened && (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HelpCenter');
              }}
              style={styles.dropdownStyle}>
              <VectorIcons
                icon="MaterialCommunityIcons"
                name={'information-outline'}
                color={Colors().Purple}
                size={22}
              />
              <Text style={styles.dropDownTextStyle}>Help Center</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SettingAndPrivacy');
              }}
              style={styles.dropdownStyle}>
              <VectorIcons
                icon="MaterialCommunityIcons"
                name={'information-off'}
                color={Colors().Purple}
                size={22}
              />
              <Text style={styles.dropDownTextStyle}>Terms & Privacy</Text>
            </TouchableOpacity>
          </>
        )}
        <View style={styles.dropDownContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <VectorIcons
              icon="Ionicons"
              name={'settings-outline'}
              color={Colors().Purple}
              size={22}
            />
            <Text
              style={{
                marginLeft: 5,
                color: Colors().Grey,
              }}>
              Setting & Privacy
            </Text>
          </View>
          <VectorIcons
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.create(
                  300,
                  LayoutAnimation.Types.easeInEaseOut,
                  LayoutAnimation.Properties.scaleY,
                ),
              );
              setSecondDropDownOpened(!secondDropIsOpened);
            }}
            icon="MaterialIcons"
            name={
              secondDropIsOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
            }
            color={Colors().Purple}
            size={24}
          />
        </View>
        {secondDropIsOpened && (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SettingAndPrivacy');
              }}
              style={styles.dropdownStyle}>
              <VectorIcons
                icon="MaterialCommunityIcons"
                name={'account-cog-outline'}
                color={Colors().Purple}
                size={22}
              />
              <Text style={styles.dropDownTextStyle}>Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true)
              }}
              style={styles.dropdownStyle}>
              <VectorIcons
                icon="MaterialCommunityIcons"
                name={'shield-search'}
                color={Colors().Purple}
                size={22}
              />
              <Text style={styles.dropDownTextStyle}>Pop for Ideas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLanguageModal(true)}
              style={styles.dropdownStyle}>
              <VectorIcons
                icon="MaterialCommunityIcons"
                name={'earth'}
                color={Colors().Purple}
                size={22}
              />
              <Text style={styles.dropDownTextStyle}>Language</Text>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity
          style={{
            marginVertical: 40,
          }}>
          <LinearGradient
            style={styles.buttonStyle}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.7, y: 1.0 }}
            locations={[0, 0.5, 1]}
            colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
            <Text style={styles.buttonTextStyle}>Logout</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
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
                onPress={() => setModalVisible(false)}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 100,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image style={{ width: 10, height: 10, }}
                  source={require('../../../Assets/close.png')} />
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
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={languageModal}
          onRequestClose={() => {
            setLanguageModal(!languageModal);
          }}>
          <View style={styles.languageInnerContainner}>
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
                  {'Languages'}</Text>
              </View>
              <TouchableOpacity
                onPress={() => setLanguageModal(false)}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 100,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image style={{ width: 10, height: 10, }}
                  source={require('../../../Assets/close.png')} />
              </TouchableOpacity>

            </View>
            <View style={styles.languageFlatListContainer}>
              <FlatList
                data={languages}
                renderItem={(item) => _languageRenderItem(item)}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().FadeGreen,
  },
  rowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  blockContainer: {
    width: '48%',
    height: 80,
    borderRadius: 12,
    backgroundColor: Colors().White,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
  },
  dpStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  smallStyle: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors().White,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  profileNameStyle: {
    fontSize: RFValue(14),
    fontWeight: '500',
    marginLeft: 5,
    color: Colors().Dark,
  },
  shortcutTextStyle: {
    paddingHorizontal: 10,
    marginTop: 15,
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: 'bold',
  },
  shortcutContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    width: 40,
  },
  floatingImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    position: 'absolute',
    zIndex: 999,
    bottom: -10,
    backgroundColor: Colors().White,
    borderRadius: 10,
    right: -5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonStyle: {
    height: 40,
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  dropdownStyle: {
    marginTop: 10,
    marginHorizontal: RFValue(30),
    backgroundColor: Colors().White,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropDownTextStyle: {
    fontSize: RFValue(12),
    marginLeft: 10,
    color: Colors().Dark,
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
    marginTop: "70%"
  },
  languageInnerContainner: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '70%',
    alignSelf: 'center',
    height: 250,
    borderRadius: 12,
    backgroundColor: Colors().White,
    marginTop: "70%"
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
  languageFlatListContainer: {
    width: "90%",
    alignSelf: 'center',
    height: 200,
    padding: 20
  }
});
