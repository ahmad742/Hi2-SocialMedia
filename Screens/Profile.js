import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import React, { useCallback } from 'react';
import { Colors } from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';
import LinearGradient from 'react-native-linear-gradient';
import DashBoardPostItem from '../Components/Home/RenderItems/DashBoardPostItem';
const PostData = [
  {
    id: 0,
    profileImage: require('../Assets/a.jpg'),
    postImage: [require('../Assets/book.png'), require('../Assets/asset.png')],
    time: '2 hrs ago',
    profileUpdated: true,
  },
  {
    id: 0,
    profileImage: require('../Assets/a.jpg'),
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
const Profile = ({ navigation }) => {
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderPostItem = ({ item, index }) => {
    return (
      <>
        <DashBoardPostItem item={item} />
      </>
    );
  };

  const HeaderContent = () => (
    <>
      <CommonHeader title="Profile" />
      <View style={styles.coverContainer}></View>
      <View style={styles.profileContainer}>
        <View style={styles.profileStyle}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 45,
            }}
            source={require('../Assets/a.jpg')}
          />
          <VectorIcons
            style={styles.cameraIconStyle}
            icon={'Feather'}
            name={'camera'}
            size={15}
            color={Colors().White}
          />
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.profileNameStyle}>Rosy</Text>
          <View style={styles.friendsDetailContainer}>
            <Text style={styles.profileFriendsStyle}>30 Friends</Text>
            <View style={styles.imagesContainer}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,
                  overflow: 'hidden',
                  borderWidth: 2,
                  borderColor: Colors().BorderColor,
                  position: 'absolute',
                  zIndex: 1,
                  left: 15,
                }}>
                <Image
                  source={require('../Assets/book.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                />
              </View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,
                  overflow: 'hidden',
                  borderWidth: 2,
                  borderColor: Colors().BorderColor,
                  position: 'absolute',
                  left: 30,
                  zIndex: 2,
                }}>
                <Image
                  source={require('../Assets/book.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                />
              </View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,
                  overflow: 'hidden',
                  borderWidth: 2,
                  borderColor: Colors().BorderColor,
                  position: 'absolute',
                  left: 45,
                  zIndex: 3,
                }}>
                <Image
                  source={require('../Assets/book.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                />
              </View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,
                  overflow: 'hidden',
                  borderWidth: 2,
                  borderColor: Colors().BorderColor,
                }}>
                <Image
                  source={require('../Assets/asset.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <LinearGradient
          style={styles.buttonStyle}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 0.7, y: 1.0 }}
          locations={[0, 0.5, 1]}
          colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'plus-circle-outline'}
            size={20}
            color={Colors().Purple}
          />
          <Text style={styles.buttonTextStyle}>Add Story</Text>
        </LinearGradient>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={[styles.buttonStyle, styles.transparentStyle]}>
          <VectorIcons
            icon={'MaterialIcons'}
            name={'edit'}
            size={20}
            color={Colors().Purple}
          />
          <Text style={styles.buttonTextStyle}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileLockContainer}>
        <View style={styles.lockedRowContainer}>
          <VectorIcons
            style={{ transform: [{ rotateY: '180deg' }] }}
            icon={'MaterialCommunityIcons'}
            name={'lock-reset'}
            size={20}
            color={Colors().Purple}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.lockedTextStyle}>
              You have Locked your Profile
            </Text>
            <Text style={styles.unlockTextStyle}>unlock</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.detailRowContainer}>
          <Text style={styles.profileNameStyle}>Details</Text>
          <Text style={styles.editTextStyle}>Edit</Text>
        </View>
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

      <View style={styles.cardContainer}>
        <View style={styles.detailRowContainer}>
          <Text style={styles.profileNameStyle}>Friends</Text>
          <Text style={styles.editTextStyle}>See all</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 5,
          }}>
          <View style={{ width: 90 }}>
            <View style={styles.friendsProfileStyle}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 45,
                }}
                source={require('../Assets/a.jpg')}
              />
            </View>
            <Text style={styles.friendsNameTextStyle}> Bob</Text>
          </View>
          <View style={{ width: 90 }}>
            <View style={styles.friendsProfileStyle}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 45,
                }}
                source={require('../Assets/a.jpg')}
              />
            </View>
            <Text style={styles.friendsNameTextStyle}> Bob</Text>
          </View>
          <View style={{ width: 90 }}>
            <View style={styles.friendsProfileStyle}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 45,
                }}
                source={require('../Assets/a.jpg')}
              />
            </View>
            <Text style={styles.friendsNameTextStyle}> Bob</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 5,
          }}>
          <View style={{ width: 90 }}>
            <View style={styles.friendsProfileStyle}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 45,
                }}
                source={require('../Assets/a.jpg')}
              />
            </View>
            <Text style={styles.friendsNameTextStyle}> Bob</Text>
          </View>
          <View style={{ width: 90 }}>
            <View style={styles.friendsProfileStyle}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 45,
                }}
                source={require('../Assets/a.jpg')}
              />
            </View>
            <Text style={styles.friendsNameTextStyle}> Bob</Text>
          </View>
          <View style={{ width: 90 }}>
            <View style={styles.friendsProfileStyle}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 45,
                }}
                source={require('../Assets/a.jpg')}
              />
            </View>
            <Text style={styles.friendsNameTextStyle}> Bob</Text>
          </View>
        </View>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.profileNameStyle}>Posts</Text>
        <View style={styles.detailRowContainer}>
          <VectorIcons
            style={{ marginRight: 5 }}
            icon={'MaterialCommunityIcons'}
            name={'tune'}
            size={20}
            color={Colors().Purple}
          />
          <Text style={styles.filterTextStyle}>Filters</Text>
        </View>
      </View>
      <View style={styles.inputContainerStyle}>
        <Image
          style={styles.imageStyle}
          resizeMode="cover"
          source={require('../Assets/a.jpg')}
        />
        <TextInput
          placeholder={'Say something...'}
          placeholderTextColor={Colors().DarkGreen}
          style={styles.textInputStyle}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <VectorIcons
          icon={'MaterialCommunityIcons'}
          name={'image-multiple-outline'}
          size={30}
          color={Colors().DarkGreen}
        />
      </View>
    </>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={HeaderContent}
        showsVerticalScrollIndicator={false}
        data={PostData}
        renderItem={_renderPostItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  coverContainer: {
    marginHorizontal: 20,
    backgroundColor: Colors().FadeGreen,
    height: 160,
    borderRadius: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  profileStyle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    top: -20,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: Colors().White,
  },
  detailContainer: {
    marginLeft: 10,
  },
  profileNameStyle: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: Colors().Dark,
  },
  profileFriendsStyle: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: Colors().Grey,
  },
  cameraIconStyle: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: Colors().Green,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors().White,
  },
  friendsDetailContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  imagesContainer: {
    marginLeft: 10,
    // backgroundColor: 'red',
  },
  buttonsContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  buttonStyle: {
    height: 30,
    width: '48%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  transparentStyle: {
    borderWidth: 2,
    borderColor: Colors().Purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  profileLockContainer: {
    marginHorizontal: 20,
    marginTop: 15,
    // backgroundColor: 'red',
  },
  lockedRowContainer: {
    flexDirection: 'row',
  },
  lockedTextStyle: {
    fontSize: RFValue(14),
    color: Colors().Purple,
    fontWeight: '500',
  },
  unlockTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Green,
    fontWeight: '500',
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
  countryTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
    fontWeight: '900',
  },
  infoTextStyle: {
    fontSize: RFValue(12),
    marginLeft: 10,
    color: Colors().Dark,
  },
  detailRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
  },
  filterTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Purple,
    fontWeight: '500',
  },
  friendsProfileStyle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: Colors().BorderColor,
    alignItems: 'center',
  },
  friendsNameTextStyle: {
    marginTop: 5,
    fontSize: RFValue(12),
    color: Colors().Dark,
    textAlign: 'center',
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  inputContainerStyle: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 40,
    flex: 1,
    fontSize: RFValue(12),
    color: Colors().Dark,
    backgroundColor: Colors().FadeGreen,
    borderRadius: 22.5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  postContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  contentContainerStyle: {
    paddingBottom: 20,
  },
});
