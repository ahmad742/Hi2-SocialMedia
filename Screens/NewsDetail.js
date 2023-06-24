import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from '../UI/Colors';
import VectorIcons from '../UI/VectorIcons';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

const NewsDetail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={[{paddingBottom: 10}]}>
        <View style={styles.imageContainer}>
          <View style={styles.headerContainer}>
            <VectorIcons
              style={styles.iconStyle}
              icon="Feather"
              name="arrow-left-circle"
              size={24}
              color={Colors().Purple}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <VectorIcons
              style={styles.iconStyle}
              icon="MaterialCommunityIcons"
              name="bookmark-outline"
              size={24}
              color={Colors().Purple}
              onPress={() => {
                //   navigation.goBack();
              }}
            />
          </View>
          <Image
            source={require('../Assets/asset.png')}
            style={styles.imgStyle}
            resizeMode="stretch"
          />
          <View style={styles.detailContainer}>
            <View style={styles.tagStyle}>
              <Text style={styles.tagTextStyle}>Sports</Text>
            </View>
            <Text style={styles.breakingTitleStyle}>
              What training do Volleyball player needs?
            </Text>
            <Text style={styles.headingStyle}>Trending . 6 hrs ago</Text>
          </View>
        </View>
        <View>
          <Text style={styles.paragraphStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like). Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like). Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like). Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  headerContainer: {
    width: '95%',
    height: 50,
    marginHorizontal: '2.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  imageContainer: {
    height: 400,
    backgroundColor: 'red',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,

    overflow: 'hidden',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  paragraphStyle: {
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'justify',
    fontSize: RFValue(12),
    color: Colors().Dark,
  },
  detailContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    padding: 10,
  },
  headingStyle: {
    marginHorizontal: 10,
    fontSize: RFValue(14),
    color: Colors().White,
    marginVertical: 5,
  },
  breakingTitleStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: RFValue(14),
    color: Colors().White,
    fontWeight: '900',
  },
  tagStyle: {
    marginHorizontal: 10,
    backgroundColor: Colors().Purple,
    height: 30,
    width: 70,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  tagTextStyle: {
    color: Colors().White,
    fontSize: RFValue(12),
  },
});
