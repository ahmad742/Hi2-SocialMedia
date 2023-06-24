import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { Colors } from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';
import VisitedPagesItem from '../Components/Home/RenderItems/VisitedPagesItem';
import SuggestedPagesItem from '../Components/Home/RenderItems/SuggestedPagesItem';
import LinearGradient from 'react-native-linear-gradient';
const Data = [1, 2];
const LikePagesData = [1, 2, 3, 4, 5];
const Pages = ({ navigation }) => {

  const [isLikePage, setIsLikePage] = useState(false)
  const [isPage, setIsPage] = useState(true)
  const [isInvite, setIsInvite] = useState(false)

  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderVIsitedPagesItem = ({ item, index }) => {
    return <VisitedPagesItem />;
  };
  const _renderSuggestedPagesItem = ({ item, index }) => {
    return <SuggestedPagesItem />;
  };
  const _renderLikePagesItem = ({ item, index }) => {
    return <VisitedPagesItem />;
  };
  const _renderInvitePagesItem = ({ item, index }) => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 12,
          backgroundColor: Colors().White,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          flexDirection: 'row',
          marginTop: 5,
        }}>
        <Image
          source={require('../Assets/r.jpg')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />

        <View
          style={{
            // backgroundColor: 'orange',
            flex: 1,
            marginLeft: 10,
          }}>
          <View
            style={{
              // backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 40,
                // backgroundColor: 'green',
                justifyContent: 'space-evenly',
                flex: 1,
              }}>
              <Text style={{ fontSize: RFValue(12), color: Colors().Dark }}>
                {'James Invited to you like Ace property '}
              </Text>
            </View>
          </View>
          <View style={{
            width: '100%',
            alignSelf: "center",
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
          }}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                width: '48%',
                alignSelf: "center"
              }}>
              <LinearGradient
                style={{
                  height: 35,
                  width: '100%',
                  marginHorizontal: '5%',
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  // marginTop: 20
                }}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.7, y: 1.0 }}
                locations={[0, 0.5, 1]}
                colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                <Text style={styles.buttonTextStyle}>{'Accept'}</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '48%',
                height: 35,
                backgroundColor: Colors().BorderColor,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(12),
                  color: Colors().Purple,
                }}>
                {'Decline'}
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title={isPage ? "Pages" : (isLikePage ? "Liked Pages" : "Invites")} />
      {
        isPage &&
        <>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateYourPage")}
              style={styles.optionContainer}>
              <VectorIcons
                icon={'AntDesign'}
                name={'pluscircleo'}
                size={16}
                color={Colors().Grey}
              />
              <Text style={styles.textStyle}> Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsLikePage(true)
                setIsPage(false)
                setIsInvite(false)
              }}
              style={styles.optionContainer}>
              <VectorIcons
                icon={'AntDesign'}
                name={'like2'}
                size={16}
                color={Colors().Grey}
              />
              <Text style={styles.textStyle}> Liked Pages</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsLikePage(false)
                setIsPage(false)
                setIsInvite(true)
              }}
              style={styles.optionContainer}>
              <VectorIcons
                icon={'MaterialIcons'}
                name={'person-add-alt'}
                size={16}
                color={Colors().Grey}
              />
              <Text style={styles.textStyle}>Invites</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleStyle}>Pages You Manage</Text>
          <View style={styles.profileContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../Assets/r.jpg')} style={styles.dpStyle} />
              <Text style={styles.profileNameStyle}>Rosy</Text>
            </View>
            <Image
              source={require('../Assets/a.jpg')}
              style={[styles.smallStyle]}
            />
          </View>
          <Text style={styles.titleStyle}>Recently Visited Pages</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            renderItem={_renderVIsitedPagesItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
          <Text style={styles.titleStyle}>Suggested Pages</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            renderItem={_renderSuggestedPagesItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </>
      }
      {
        isLikePage &&
        <>
          <Text style={[styles.textStyle, { padding: 10 }]}>{'All Pages you like or follow'}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={LikePagesData}
            renderItem={_renderLikePagesItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </>
      }
      {
        isInvite &&
        <>
          <Text style={[styles.textStyle, { padding: 10 }]}>{'Pending Invitations'}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={LikePagesData}
            renderItem={_renderInvitePagesItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </>
      }
    </SafeAreaView>
  );
};

export default Pages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  optionContainer: {
    flexDirection: 'row',
    marginRight: 5,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 7,
    backgroundColor: Colors().FadeGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors().Grey,
    fontWeight: '700',
    marginLeft: 5,
  },
  titleStyle: {
    marginStart: 10,
    marginTop: 10,
    color: Colors().Dark,
    fontSize: RFValue(14),
    fontWeight: '900',
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
    alignItems: 'center',
  },
  profileNameStyle: {
    fontSize: RFValue(14),
    fontWeight: '500',
    marginLeft: 5,
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
});
