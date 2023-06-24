import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../../../UI/VectorIcons';
import {Colors} from '../../../UI/Colors';
import React from 'react';

const GroupPostItem = props => {
  const {item} = props;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.rowContainer}>
        <Image
          source={
            item?.profileImage
              ? item?.profileImage
              : require('../../../Assets/asset.png')
          }
          style={styles.dpStyle}
        />
        <View style={styles.rowContainer}>
          <View style={styles.detailContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.nameStyle}>
              India Today
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors().Grey,
                  fontSize: RFValue(12),
                }}>
                {item?.time}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    marginStart: 10,
                    color: Colors().Blue,
                    fontSize: RFValue(12),
                  }}>
                  Follow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <VectorIcons
          icon={'Entypo'}
          name={'dots-three-horizontal'}
          size={20}
          color={Colors().Dark}
        />
      </View>
      <Text
        style={{
          marginTop: 10,
          textAlign: 'justify',
          color: Colors().Grey,
        }}>
        "Live!"
      </Text>
      <View style={styles.imageContainer}>
        <>
          {item.postImage.length == 1 ? (
            <Image
              source={
                item.postImage[0]
                  ? item.postImage[0]
                  : require('../../../Assets/asset.png')
              }
              style={styles.postImageStyle}
            />
          ) : (
            <View style={styles.imageRowContainer}>
              <View style={{width: '45%'}}>
                <Image
                  source={
                    item.postImage[0]
                      ? item.postImage[0]
                      : require('../../../Assets/asset.png')
                  }
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <View
                style={{
                  width: '45%',
                }}>
                {item.postImage.length > 2 && (
                  <View style={styles.fadeView}>
                    <Text style={styles.countTextStyle}>
                      +{item.postImage.length}
                    </Text>
                  </View>
                )}
                <Image
                  source={
                    item.postImage[1]
                      ? item.postImage[1]
                      : require('../../../Assets/asset.png')
                  }
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            </View>
          )}
        </>
      </View>
      <View
        style={{
          marginTop: 5,
          //   backgroundColor: 'red',
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            // backgroundColor: 'green',
            flexDirection: 'row',
            alignItems: 'center',
            width: '25%',
          }}>
          <VectorIcons
            style={{
              width: 25,
              height: 25,
              backgroundColor: Colors().Blue,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12.5,
              marginRight: 5,
            }}
            icon={'EvilIcons'}
            name={'like'}
            size={20}
            color={Colors().White}
          />
          <Text style={styles.textStyle}> 875</Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'pink',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text numberOfLines={1} style={[styles.textStyle, {width: '35%'}]}>
            2k comments
          </Text>
          <Text numberOfLines={1} style={[styles.textStyle, {width: '25%'}]}>
            10k shares
          </Text>
          <Text numberOfLines={1} style={[styles.textStyle, {width: '25%'}]}>
            52k views
          </Text>
        </View>
      </View>
      <View style={styles.likeAndCommentContainer}>
        <View style={styles.commentContainer}>
          <VectorIcons
            icon={'EvilIcons'}
            name={'like'}
            size={24}
            color={Colors().Grey}
          />
          <Text style={styles.likeTextStyle}>Like</Text>
        </View>
        <View style={styles.commentContainer}>
          <VectorIcons
            icon={'EvilIcons'}
            name={'comment'}
            size={24}
            color={Colors().Grey}
          />
          <Text style={styles.commentTextStyle}>Comment</Text>
        </View>
      </View>
      <View style={styles.CommentInputContainerStyle}>
        <Image
          style={styles.imageStyle}
          resizeMode="cover"
          source={require('../../../Assets/a.jpg')}
        />
        <View style={styles.CommentTextInputStyle}>
          <TextInput
            style={styles.TextInputStyle}
            placeholder={'Add public comment...'}
            placeholderTextColor={Colors().DarkGreen}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <VectorIcons
            icon={'Fontisto'}
            name={'smiley'}
            size={24}
            color={Colors().DarkGreen}
          />
        </View>
      </View>
    </View>
  );
};

export default GroupPostItem;

const styles = StyleSheet.create({
  itemContainer: {
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
  },
  CommentTextInputStyle: {
    height: 40,
    flex: 1,
    backgroundColor: Colors().FadeGreen,
    borderRadius: 22.5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CommentInputContainerStyle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  dpStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postImageStyle: {
    marginTop: 10,
    width: '100%',
    height: '100%',
    flex: 1,
  },
  likeAndCommentContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderTopColor: Colors().BorderColor,
    borderBottomColor: Colors().BorderColor,
    paddingVertical: 10,
    borderLeftColor: Colors().White,
    borderRightColor: Colors().White,
  },
  TextInputStyle: {
    color: Colors().Dark,
    textAlign: 'left',
    width: '85%',
  },
  nameStyle: {
    color: Colors().Dark,
    fontSize: RFValue(14),
    fontWeight: '500',
    width: '90%',
  },
  imageContainer: {
    marginTop: 10,
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors().BorderColor,
  },
  commentTextStyle: {
    marginLeft: 5,
    fontSize: RFValue(14),
    color: Colors().Grey,
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeTextStyle: {
    marginLeft: 5,
    fontSize: RFValue(14),
    color: Colors().Grey,
  },
  imageRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  fadeView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    backgroundColor: Colors().Dark,
    opacity: 0.6,
  },
  countTextStyle: {
    fontSize: RFValue(20),
    color: Colors().White,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    // backgroundColor: 'red',
  },
  detailContainer: {
    flex: 1,
    // backgroundColor: 'green',
    marginLeft: 10,
    justifyContent: 'space-evenly',
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors().Grey,
    // backgroundColor: 'orange',
  },
});
