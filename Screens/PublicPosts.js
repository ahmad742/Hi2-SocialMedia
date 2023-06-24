import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';

const PublicPosts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Posts" hideSearch />
      <View style={styles.headingContainer}>
        <Text style={styles.titleStyle}>
          <View style={styles.headingContainer}>
            <Text style={styles.titleStyle}>Public posts</Text>
            <Text style={styles.textStyle}>
              Filter who can see you public posts and video and can follow you.
            </Text>
          </View>
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.cardTitleStyle}>Who can follow me</Text>
          <TouchableOpacity style={styles.dropdownStyle}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'account-multiple-outline'}
              color={Colors().Green}
              size={24}
            />
            <Text style={styles.dropdownTextStyle}>Friends</Text>
            <VectorIcons
              icon={'AntDesign'}
              name={'caretdown'}
              size={12}
              color={Colors().Green}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.paragraphStyle}>
          Followers see your posts, stories in Feed. Friends follow your posts,
          stories by default, but you can also allowpeople who are not your
          friends to follow your public posts, reels, stories and soundbites.
          Use this setting to choose who can follow you. Each time you post or
          create a story, you choose which audience you want to share with. This
          setting doesn't apply to people who follow you on Marketplace and in
          buy and sell groups. You can managethose settings on Marketplace.
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.cardTitleStyle}>Public post comments</Text>
          <TouchableOpacity style={styles.dropdownStyle}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'account-multiple-outline'}
              color={Colors().Green}
              size={24}
            />
            <Text style={styles.dropdownTextStyle}>Friends</Text>
            <VectorIcons
              icon={'AntDesign'}
              name={'caretdown'}
              size={12}
              color={Colors().Green}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.paragraphStyle}>
          Choose who is allowed to comment on your public posts.
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.cardTitleStyle}>Public post notifications</Text>
          <TouchableOpacity style={styles.dropdownStyle}>
            <VectorIcons
              icon={'MaterialCommunityIcons'}
              name={'account-multiple-outline'}
              color={Colors().Green}
              size={24}
            />
            <Text style={styles.dropdownTextStyle}>Friends</Text>
            <VectorIcons
              icon={'AntDesign'}
              name={'caretdown'}
              size={12}
              color={Colors().Green}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.paragraphStyle}>
          You can get notifications when people who aren't your friends start
          following you and share, like or comment on your public posts.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PublicPosts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  headingContainer: {
    marginHorizontal: 20,
  },
  titleStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '700',
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors().Grey,
    marginTop: 10,
  },
  cardContainer: {
    marginTop: 10,
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: Colors().FadeGreen,
    borderRadius: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitleStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '600',
  },
  dropdownStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors().Grey,
  },
  paragraphStyle: {
    marginTop: 10,
    fontSize: RFValue(12),
    color: Colors().Grey,
    textAlign: 'justify',
  },
  dropdownTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Grey,
    fontWeight: '500',
    marginHorizontal: 5,
  },
});
