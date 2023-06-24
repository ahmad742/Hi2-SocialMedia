import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { Colors } from '../../../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../../../UI/VectorIcons';
import DashBoardStroyItem from '../RenderItems/DashBoardStroyItem';
import DashBoardPostItem from '../RenderItems/DashBoardPostItem';
import DashBoardFriendSuggestionsItem from '../RenderItems/DashBoardFriendSuggestionsItem';
import Header from '../../Header';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
const Data = [1, 2, 3, 4, 5, 6];
const Suggestion = [
  {
    mutual: 5,
    name: 'John',
    image: require('../../../Assets/asset.png'),
  },
  {
    mutual: 7,
    name: 'Sofia',
    image: require('../../../Assets/a.jpg'),
  },
  {
    mutual: 7,
    name: 'Sofia',
    image: require('../../../Assets/a.jpg'),
  },
];

const PostData = [
  {
    id: 0,
    profileImage: require('../../../Assets/a.jpg'),
    postImage: [
      require('../../../Assets/book.png'),
      require('../../../Assets/asset.png'),
    ],
    time: '2 hrs ago',
  },
  {
    id: 0,
    profileImage: require('../../../Assets/a.jpg'),
    postImage: [require('../../../Assets/book.png')],
    time: '2 hrs ago',
  },

  {
    id: 0,
    profileImage: require('../../../Assets/a.jpg'),
    postImage: [
      require('../../../Assets/book.png'),
      require('../../../Assets/a.jpg'),
      require('../../../Assets/book.png'),
      require('../../../Assets/asset.png'),
    ],
    time: '2 hrs ago',
  },
  {
    id: 0,
    profileImage: require('../../../Assets/a.jpg'),
    postImage: [require('../../../Assets/asset.png')],
    time: '2 hrs ago',
  },
];

const Dashboard = () => {
  const navigation = useNavigation();
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const [selectPhoto, setSelectPhoto] = useState('')

  const OnPhotoPress = () => {
    console.log('yes');
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.assets[0].uri,
          name: 'profile' + '.jpeg',
          type: 'image/jpeg',
        };
        console.log("Selected Image --->>>", source),
          setSelectPhoto(source);
      }
    });
  };

  const _renderStoryItem = ({ item, index }) => {
    return <DashBoardStroyItem />;
  };
  const _renderFriendSuggestionsItem = ({ item, index }) => {
    return <DashBoardFriendSuggestionsItem item={item} />;
  };
  const _renderPostItem = ({ item, index }) => {
    return (
      <>
        <DashBoardPostItem item={item} />
        {index == 2 && (
          <View
            style={{
              backgroundColor: Colors().White,
              marginTop: 20,
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
            }}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontWeight: 'bold',
                  color: Colors().Dark,
                }}>
                Friend Suggestions
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),

                  color: Colors().DarkGreen,
                }}>
                See All
              </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Suggestion}
              renderItem={_renderFriendSuggestionsItem}
              keyExtractor={keyExtractor}
              contentContainerStyle={styles.contentContainerStyle}
            />
          </View>
        )}
      </>
    );
  };

  const HeaderFLatList = () => {
    return (
      <View style={styles.headerItem}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../Assets/asset.png')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 40,
            }}
          />
          <VectorIcons
            onPress={() => {
              console.log('first');
            }}
            style={styles.plusIconStyle}
            icon={'Entypo'}
            name={'plus'}
            size={20}
            color={Colors().White}
          />
        </View>
        <Text style={styles.titleStyle}>Your story</Text>
      </View>
    );
  };
  const Render = () => (
    <View>
      <View style={styles.inputContainerStyle}>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={require('../../../Assets/a.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textInputStyle}
          onPress={() => {
            navigation.navigate('CreatePost');
          }}>
          <Text style={styles.textStyle}>Say something...</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => OnPhotoPress()}>
          <VectorIcons
            icon={'MaterialCommunityIcons'}
            name={'image-multiple-outline'}
            size={30}
            color={Colors().DarkGreen}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={HeaderFLatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={_renderStoryItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        message
        onMessagePress={() => navigation.navigate('Chat')}
      />
      <FlatList
        ListHeaderComponent={Render}
        showsVerticalScrollIndicator={false}
        data={PostData}
        renderItem={_renderPostItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
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
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors().DarkGreen,
  },
  inputContainerStyle: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  contentContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: RFValue(12),
    marginTop: 5,
    color: Colors().LightPurple,
    textAlign: 'center',
  },
  plusIconStyle: {
    backgroundColor: Colors().Green,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17.5,
    position: 'absolute',
    bottom: -3,
    right: 0,
    borderWidth: 2,
    borderColor: Colors().BorderColor,
  },
  CommentTextInputStyle: {
    height: 35,
    flex: 1,
    fontSize: RFValue(12),
    color: Colors().Dark,
    backgroundColor: Colors().FadeGreen,
    borderRadius: 22.5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CommentInputContainerStyle: {
    // padding: (10),
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatListContainer: {
    backgroundColor: Colors().White,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: Colors().LightGreen,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerItem: {
    width: 70,
    height: 70,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  imgContainer: {
    width: 70,
    height: 70,
  },
});
