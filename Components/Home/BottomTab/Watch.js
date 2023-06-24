import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../../../UI/CommonHeader';
import { Colors } from '../../../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import GroupPostItem from '../RenderItems/GroupPostItem';
import FollowPagesItem from '../RenderItems/FollowPagesItem';
import PagesYouFollow from '../RenderItems/PagesYouFollow';
const Data = [1, 2, 3, 4, 5, 6];
const PostData = [
  {
    id: 0,
    profileImage: require('../../../Assets/dance.jpg'),
    postImage: [require('../../../Assets/dance.jpg')],
    time: '3d',
  },
  {
    id: 0,
    profileImage: require('../../../Assets/dance.jpg'),
    postImage: [
      require('../../../Assets/dance.jpg'),
      require('../../../Assets/dance.jpg'),
    ],
    time: '5 hrs ago',
  },

  {
    id: 0,
    profileImage: require('../../../Assets/dance.jpg'),
    postImage: [
      require('../../../Assets/dance.jpg'),
      require('../../../Assets/dance.jpg'),
      require('../../../Assets/dance.jpg'),
    ],
    time: '5 hrs ago',
  },
];
const Groups = () => {

  const [isFollowing, setIsFollowing] = useState(false)
  const [isForyou, setIsForyou] = useState(true)
  const [isLive, setIsLive] = useState(false)
  const [isMusic, setIsMusic] = useState(false)

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const _renderPostItem = ({ item, index }) => {
    return <GroupPostItem item={item} />;
  };
  const _renderfollowItem = ({ item, index }) => {
    return <FollowPagesItem item={item} />;
  };
  const _renderStoryItem = ({ item, index }) => {
    return (
      <View style={{
      }}>
        <PagesYouFollow />
      </View>
    );
  };
  const _renderFollowPagesHeader = () => (
    <>
      {
        isFollowing &&
        <>
          <View style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
            <TouchableOpacity
              onPress={() => {
                setIsForyou(true)
                setIsFollowing(false)
                setIsLive(false)
                setIsMusic(false)
              }}
              style={[styles.optionButtonStyle,{backgroundColor: isForyou ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>For you</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              setIsForyou(false)
              setIsFollowing(false)
              setIsLive(true)
              setIsMusic(false)
            }}
            style={[styles.optionButtonStyle,{backgroundColor: isLive ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {
                setIsForyou(false)
                setIsFollowing(false)
                setIsLive(false)
                setIsMusic(true)
              }}
              style={[styles.optionButtonStyle,{backgroundColor: isMusic ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsFollowing(true)
                setIsForyou(false)
                setIsLive(false)
                setIsMusic(true)
              }}
              style={[styles.optionButtonStyle,{backgroundColor: isFollowing ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>Following</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.pagesyoufollowContainer}>
            <View style={styles.followPagesConatiner}>
              <Text style={{
                color: Colors().Darkblue,
                fontWeight: '500',
                fontSize: 16
              }}>{'Pages You Follow'}</Text>
              <TouchableOpacity>
                <Text style={{
                  color: Colors().DarkGreen,
                  fontWeight: '500',
                  fontSize: 14
                }}>{'See all'}</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Data}
              renderItem={_renderStoryItem}
              keyExtractor={keyExtractor}
              contentContainerStyle={styles.contentContainerStyle}
            />
          </View>
        </>
      }
    </>
  );
  const _renderLiveHeader = () => (
    <>
      {
        isLive &&
        <>
         <View style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
            <TouchableOpacity
              onPress={() => {
                setIsForyou(true)
                setIsFollowing(false)
                setIsLive(false)
                setIsMusic(false)
              }}
              style={[styles.optionButtonStyle,{backgroundColor: isForyou ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>For you</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              setIsForyou(false)
              setIsFollowing(false)
              setIsLive(true)
              setIsMusic(false)
            }}
            style={[styles.optionButtonStyle,{backgroundColor: isLive ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {
                setIsForyou(false)
                setIsFollowing(false)
                setIsLive(false)
                setIsMusic(true)
              }}
              style={[styles.optionButtonStyle,{backgroundColor: isMusic ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsFollowing(true)
                setIsForyou(false)
                setIsLive(false)
                setIsMusic(false)
              }}
              style={[styles.optionButtonStyle,{backgroundColor: isFollowing ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>Following</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    </>
  );

  const _renderHeader = () => (
    <>
      <View style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
            <TouchableOpacity
              onPress={() => {
                setIsForyou(true)
                setIsFollowing(false)
                setIsLive(false)
                setIsMusic(false)
              }}
              style={[styles.optionButtonStyle,{backgroundColor: isForyou ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>For you</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              setIsForyou(false)
              setIsFollowing(false)
              setIsLive(true)
              setIsMusic(false)
            }}
            style={[styles.optionButtonStyle,{backgroundColor: isLive ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {
                setIsForyou(false)
                setIsFollowing(false)
                setIsLive(false)
                setIsMusic(true)
              }}
              style={[styles.optionButtonStyle,{backgroundColor: isMusic ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsFollowing(true)
                setIsForyou(false)
                setIsLive(false)
                setIsMusic(false)
              }}
              style={[styles.optionButtonStyle,{backgroundColor: isFollowing ? Colors().Green : Colors().FadeGreen}]}>
              <Text style={styles.optionTextStyle}>Following</Text>
            </TouchableOpacity>
          </View>
    </>
  );
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Watch" common />
      {
        isForyou &&
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
        isMusic &&
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
        isFollowing &&
        <FlatList
          ListHeaderComponent={_renderFollowPagesHeader}
          showsVerticalScrollIndicator={false}
          data={PostData}
          renderItem={_renderfollowItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
        />
      }
      {
        isLive &&
        <FlatList
          ListHeaderComponent={_renderLiveHeader}
          showsVerticalScrollIndicator={false}
          data={PostData}
          renderItem={_renderfollowItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
        />
      }

    </SafeAreaView>
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
  followPagesConatiner: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pagesyoufollowContainer: {
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors().BorderColor,
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors().White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
