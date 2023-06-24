import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import RNTextInputColored from '../UI/RNTextInput';
import LinearGradient from 'react-native-linear-gradient';
import FriendSuggestionsItem from '../Components/Home/RenderItems/FriendSuggestionsItem';
const GoLive = () => {

  const [isLiveStreaming, setIsLiveStreaming] = useState(false)

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
        onPress={() => setIsLiveStreaming(false)}
        style={{ alignSelf: 'center', alignItems: 'center', margin: 5, }}>
        <Image source={item.image} style={{ width: 45, height: 45, borderRadius: 8 }} />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Go Live" hideSearch />
      <ScrollView>
        <View style={styles.liveContainer}>
          <Image
            resizeMode="contain"
            style={styles.imgStyle}
            source={require('../Assets/go_live.png')}
          />
          <View style={styles.goLiveStyle}>
            <Text style={styles.goLiveTextStyle}>Go Live</Text>
          </View>
        </View>
        {
          isLiveStreaming == false ?
            <>
              <View style={styles.cardContainer}>
                <Text style={styles.titleStyle}>Live Broadcasting</Text>
                <RNTextInputColored
                  margin
                  placeHolder="Enter Your Live Stream Name !"
                />
                <TouchableOpacity onPress={() => setIsLiveStreaming(true)}>
                  <LinearGradient
                    style={styles.buttonStyle}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.7, y: 1.0 }}
                    locations={[0, 0.5, 1]}
                    colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                    <Text style={styles.buttonTextStyle}>Start Streaming</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </>
            :
            <View style={{
              width: '90%',
              alignSelf: "center",
              height: 370,
              marginTop: 10,
              marginHorizontal: 10,
              backgroundColor: Colors().White,
              borderRadius: 10,
              paddingBottom: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <View style={{
                width: '100%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors().FadeGreen,
              }}>
                <Text style={{ color: Colors().Darkblue }}>{'Live Streaming'}</Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text style={{ color: Colors().Dark, fontWeight: '600', fontSize: RFValue(12) }}>{"Here's the link to live streaming"}</Text>
                <Text style={{ color: Colors().Dark, fontSize: RFValue(10), marginTop: 10 }}>{'Copy this link and send it with the people you want to share live streaming'}</Text>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: Colors().FadeGreen,
                  alignItems: "center",
                  height: 40,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                  marginTop: 20
                }}>
                  <Text style={{ color: Colors().DarkGreen }}>{'Hi2.com/pagename/jsdfasd/live'}</Text>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                    <TouchableOpacity>
                      <Text style={{ color: Colors().Grey }}>{'Copy'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image source={require('../Assets/share_illustration.png')}
                        style={{ width: 30, height: 30, marginLeft: 5 }} />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={{ color: Colors().Dark, fontWeight: '600', fontSize: RFValue(12), marginTop: 10 }}>{'Select Audience'}</Text>
                <TouchableOpacity style={{
                  width: 120,
                  backgroundColor: Colors().FadeGreen,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  height: 40,
                  marginTop: 10
                }}>
                  <Image source={require('../Assets/user.png')} style={{ width: 15, height: 15, tintColor: Colors().Green }} />
                  <Text>{'Freinds'}</Text>
                  <Image source={require('../Assets/user.png')} style={{ width: 15, height: 15, tintColor: Colors().Green }} />
                </TouchableOpacity>
                <Text style={{ color: Colors().Dark, fontWeight: '600', fontSize: RFValue(12), marginTop: 10 }}>{'Aa Background/frame'}</Text>
                <FlatList
                  style={{ marginTop: 10 }}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={backgroundImageData}
                  renderItem={(item) => _BgImageRenderItem(item)}
                />
              </View>
            </View>
        }


        <View style={styles.cardContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.titleStyle}>MarketPlace</Text>
            <Text
              style={[
                styles.titleStyle,
                { color: Colors().DarkGreen, fontSize: RFValue(12) },
              ]}>
              See all
            </Text>
          </View>
          <FriendSuggestionsItem />
          <FriendSuggestionsItem />
        </View>
        <Text style={styles.advertisementTextStyle}>Advertisement</Text>
        <View style={styles.advertisementContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GoLive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  imgStyle: {
    width: 70,
    height: 70,
  },
  liveContainer: {
    alignItems: 'center',
  },
  goLiveStyle: {
    top: -11,
    width: 80,
    height: 40,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Colors().Purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goLiveTextStyle: {
    fontSize: RFValue(14),
    color: Colors().Purple,
    fontWeight: '900',
  },
  cardContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: Colors().White,
    borderRadius: 10,
    paddingBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleStyle: {
    fontSize: RFValue(14),
    fontWeight: '900',
    color: Colors().Dark,
  },
  buttonStyle: {
    marginTop: 10,
    marginHorizontal: '10%',
    height: 35,
    width: '80%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: '900',
    color: Colors().Purple,
  },
  advertisementContainer: {
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: Colors().BorderColor,
    borderRadius: 10,
  },
  advertisementTextStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    marginHorizontal: 10,
    marginTop: 10,
    fontWeight: '900',
  },
});
