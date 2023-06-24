import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, FlatList, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';
import { launchImageLibrary } from 'react-native-image-picker';
const CreatePost = ({ navigation }) => {

  const [selectPhoto, setSelectPhoto] = useState('')
  const [selectBackground, setSelectBackground] = useState('')
  const [postCaption, setPostCaption] = useState('')
  const [isSelectedBackgroundImage, setIsSelectedBackgroundImage] = useState(false)

  const backgroundImageData = [
    {
      id: 1,
      image: require('../Assets/r.jpg')
    },
    {
      id: 2,
      image: require('../Assets/a.jpg')
    },
    {
      id: 3,
      image: require('../Assets/Music.png')
    },
    {
      id: 4,
      image: require('../Assets/r.jpg')
    },
    {
      id: 5,
      image: require('../Assets/a.jpg')
    },
    {
      id: 6,
      image: require('../Assets/Music.png')
    },
    {
      id: 7,
      image: require('../Assets/a.jpg')
    },
    {
      id: 8,
      image: require('../Assets/r.jpg')
    },
    {
      id: 9,
      image: require('../Assets/Music.png')
    },
    {
      id: 10,
      image: require('../Assets/r.jpg')
    },
  ]

  const _BgImageRenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectBackground(item.image),
            // setIsSelectedBackgroundImage(false)
            setSelectPhoto(null)
        }}
        style={{ alignSelf: 'center', alignItems: 'center', margin: 5, }}>
        <Image source={item.image} style={{ width: 45, height: 45, borderRadius: 10 }} />
      </TouchableOpacity>
    )
  }

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
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title=" Create Post" rightTitle="Post" />
      <View style={styles.detailContainer}>
        <Image style={styles.imgStyle} source={require('../Assets/a.jpg')} />
        <View style={styles.nameContainer}>
          <Text style={styles.nameStyle}>Rosy</Text>
          <View style={styles.buttonStyle}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'account-multiple-outline'}
              size={22}
              color={Colors().Green}
            />
            <Text style={styles.buttonTextStyle}>Friends</Text>
            <VectorIcons
              icon={'AntDesign'}
              name={'caretdown'}
              size={12}
              color={Colors().Green}
            />
          </View>
        </View>
      </View>
      {
        selectPhoto ?
          <View
            style={{
              flex: 1,
              paddingHorizontal: 10,
              marginTop: 20,
            }}>

            <TextInput
              style={{ marginLeft: 10 }}
              placeholder='Say something...'
              placeholderTextColor={Colors().Green}
              value={postCaption}
              onChangeText={(text) => setPostCaption(text)}
              multiline={true}
            />
            <Image style={{ width: "100%", height: 250, marginTop: 20 }} source={selectPhoto} />
            <View>

            </View>
          </View>
          :
          <ImageBackground style={{
            width: "100%",
            marginTop: 20,
            flex: 1,
          }} source={selectBackground}>
            <View style={{
              width: '95%',
              alignSelf: "center",
              justifyContent: "center",
              height: '100%',
              alignItems: 'center'
            }}>
              <TextInput
                style={{ marginLeft: 10, fontSize: 24, fontWeight: '700', color: Colors().Green }}
                placeholder='Say something...'
                placeholderTextColor={Colors().Green}
                placeholderStyle={{ fontSize: 20 }}
                value={postCaption}
                onChangeText={(text) => setPostCaption(text)}
                multiline={true}
              />
            </View>
          </ImageBackground>
      }


      {
        isSelectedBackgroundImage == true ?
          <>
            <View style={{ marginVertical: 20 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={backgroundImageData}
                renderItem={(item) => _BgImageRenderItem(item)}
              />
            </View>
            <View style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <TouchableOpacity onPress={() => {
                setIsSelectedBackgroundImage(false)
                OnPhotoPress()
              }}>
                <VectorIcons
                  icon={'MaterialCommunityIcons'}
                  name={'image-multiple-outline'}
                  size={22}
                  color={Colors().Green}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate("FeelingsAcitivity")
                setIsSelectedBackgroundImage(false)

              }}>
                <VectorIcons
                  icon={'Fontisto'}
                  name={'smiley'}
                  size={22}
                  color={'yellow'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('GoLive')
                  setIsSelectedBackgroundImage(false)
                }}>
                <VectorIcons
                  icon={'MaterialIcons'}
                  name={'ondemand-video'}
                  size={22}
                  color={Colors().Red}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsSelectedBackgroundImage(false)
                }}>
                <VectorIcons
                  icon={'FontAwesome'}
                  name={'tag'}
                  size={22}
                  color={Colors().Blue}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsSelectedBackgroundImage(false)
                }}>
                <VectorIcons
                  icon={'Octicons'}
                  name={'location'}
                  size={22}
                  color={Colors().Orange}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setIsSelectedBackgroundImage(false)
              }}>
                <VectorIcons
                  icon={'MaterialCommunityIcons'}
                  name={'alpha-a-box-outline'}
                  size={22}
                  color={Colors().Blue}
                />
              </TouchableOpacity>
            </View>
          </>
          :
          <>
            <TouchableOpacity
              onPress={() => OnPhotoPress()}
              style={styles.rowContainer}>
              <VectorIcons
                icon={'MaterialCommunityIcons'}
                name={'image-multiple-outline'}
                size={22}
                color={Colors().Green}
              />
              <Text style={styles.textStyle}>Photo / video</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FeelingsAcitivity")}
              style={styles.rowContainer}>
              <VectorIcons
                icon={'Fontisto'}
                name={'smiley'}
                size={22}
                color={'yellow'}
              />
              <Text style={styles.textStyle}>Feeling / Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('GoLive')}
              style={styles.rowContainer}>
              <VectorIcons
                icon={'MaterialIcons'}
                name={'ondemand-video'}
                size={22}
                color={Colors().Red}
              />
              <Text style={styles.textStyle}>Go Live</Text>
            </TouchableOpacity>
            <View style={styles.rowContainer}>
              <VectorIcons
                icon={'FontAwesome'}
                name={'tag'}
                size={22}
                color={Colors().Blue}
              />
              <Text style={styles.textStyle}>Tag</Text>
            </View>
            <View style={styles.rowContainer}>
              <VectorIcons
                icon={'Octicons'}
                name={'location'}
                size={22}
                color={Colors().Orange}
              />
              <Text style={styles.textStyle}>CHeck in</Text>
            </View>
            <TouchableOpacity
              onPress={() => setIsSelectedBackgroundImage(true)}
              style={styles.rowContainer}>
              <VectorIcons
                icon={'MaterialCommunityIcons'}
                name={'alpha-a-box-outline'}
                size={22}
                color={Colors().Blue}
              />
              <Text style={styles.textStyle}>Background / Frame</Text>
            </TouchableOpacity>
          </>
      }

    </SafeAreaView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  detailContainer: {
    marginHorizontal: 10,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameContainer: {
    // backgroundColor: 'green',
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  nameStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '500',
  },
  buttonStyle: {
    backgroundColor: Colors().FadeGreen,
    height: 25,
    paddingHorizontal: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Grey,
    fontWeight: '500',
    marginHorizontal: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,

    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: Colors().BorderColor,
  },
  textStyle: {
    marginStart: 10,
    fontSize: RFValue(12),
    fontWeight: '500',
    color: Colors().Dark,
  },
  largeTextStyle: {
    color: Colors().LightGreen,
    fontSize: RFValue(16),
    fontWeight: '600',
  },
});
