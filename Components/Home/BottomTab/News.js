import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { Colors } from '../../../UI/Colors';
import CommonHeader from '../../../UI/CommonHeader';
import { SliderBox } from 'react-native-image-slider-box';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../../../UI/VectorIcons';
import NewsItem from '../RenderItems/NewsItem';
import { ActualHEIGHT } from '../../../UI';
import { useNavigation } from '@react-navigation/native';

const Data = [1, 2, 3, 4];
const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiuiYY--ENGKHCxoshOIavDEMIyHjKkpARw&usqp=CAU',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://cdn.pixabay.com/photo/2017/08/01/20/06/city-2567670__480.jpg',
];
const HEIGHT = ActualHEIGHT();

const News = () => {

  const newsFilterData = [
    {
      id: 1,
      name: 'Health',
    },
    {
      id: 2,
      name: 'Grooming',
    },
    {
      id: 3,
      name: 'Sports',
    },
    {
      id: 4,
      name: 'Movies',
    },
    {
      id: 5,
      name: 'Music',
    },
  ]
  const navigation = useNavigation();
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const [isFilter, setIsFilter] = useState(false)
  const _renderNewsItem = ({ item, index }) => {
    return <NewsItem item={item} onPress={onItemPress} />;
  };
  const _newsRenderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setIsFilter(false)} style={{ marginTop: 10 }}>
        <Text style={{ color: Colors().Dark }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const onItemPress = () => {
    navigation.navigate('NewsDetail');
  };

  const Header = () => (
    <>
      <CommonHeader title="News" common hideSearch />
      <Text style={styles.headingStyle}>News from all around the world</Text>
      <Text style={styles.breakingTitleStyle}>Breaking News</Text>
      <View style={styles.slider}>
        <View style={styles.tagStyle}>
          <Text style={styles.tagTextStyle}>Sports</Text>
        </View>
        <SliderBox
          resizeMode={'stretch'}
          images={images}
          ImageComponentStyle={{
            width: '100%',
            height: '100%',
          }}
          dotStyle={styles.dotStyle}
        />
        <View style={styles.sliderDetailContainer}>
          <View style={styles.SliderRowContainer}>
            <Text style={styles.sliderDescriptionStyle}>TO1 sports</Text>
            <VectorIcons
              style={{ marginHorizontal: 10 }}
              icon={'AntDesign'}
              name={'checkcircle'}
              size={20}
              color={Colors().Green}
            />
            <Text style={styles.sliderDescriptionStyle}>6hrs ago</Text>
          </View>
          <Text style={styles.sliderDescriptionStyle}>
            changing sports landscape in Australia
          </Text>
        </View>
      </View>
      <View style={styles.CommentTextInputStyle}>
        <VectorIcons
          icon={'MaterialIcons'}
          name={'search'}
          size={24}
          color={Colors().Grey}
        />
        <TextInput
          style={styles.TextInputStyle}
          placeholder={'Search'}
          placeholderTextColor={Colors().Grey}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={() => setIsFilter(!isFilter)}>
          <VectorIcons
            icon={'Ionicons'}
            name={'options-outline'}
            size={24}
            color={Colors().Grey}
          />
        </TouchableOpacity>
      </View>
      {
        isFilter &&
        <View style={styles.FilterFlatlistStyle}>
          <FlatList
            data={newsFilterData}
            renderItem={(item) => _newsRenderItem(item)}
          />
        </View>
      }

      <View style={styles.rowContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => { }} style={styles.optionContainer}>
            <Text style={styles.buttonTextStyle}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={[styles.optionContainer, { marginLeft: 10 }]}>
            <Text style={styles.buttonTextStyle}>Public</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={[styles.optionContainer, { marginLeft: 10 }]}>
            <Text style={styles.buttonTextStyle}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={[styles.optionContainer, { marginLeft: 10 }]}>
            <Text style={styles.buttonTextStyle}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={[styles.optionContainer, { marginLeft: 10 }]}>
            <Text style={styles.buttonTextStyle}>Grooming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AllFriends');
            }}
            style={[styles.optionContainer, { marginLeft: 10 }]}>
            <Text style={styles.buttonTextStyle}>Nature</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={_renderNewsItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  slider: {
    marginHorizontal: 10,
    height: HEIGHT / 4.5,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 5,
  },
  tagStyle: {
    backgroundColor: Colors().Purple,
    height: 30,
    paddingHorizontal: 10,
    position: 'absolute',
    zIndex: 9,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 7,
    left: 7,
  },
  tagTextStyle: {
    color: Colors().White,
    fontSize: RFValue(12),
  },
  sliderDetailContainer: {
    padding: 10,
    width: '100%',
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
  },
  sliderDescriptionStyle: {
    fontSize: RFValue(14),
    fontWeight: '900',
    color: Colors().White,
  },
  SliderRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dotStyle: {
    bottom: 0,
  },
  headingStyle: {
    marginHorizontal: 10,
    fontSize: RFValue(14),
    color: Colors().Purple,
    marginVertical: 5,
  },
  breakingTitleStyle: {
    marginHorizontal: 10,
    marginVertical: 5,

    fontSize: RFValue(14),
    color: Colors().Purple,
    fontWeight: '900',
  },
  rowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  buttonTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
    fontWeight: '500',
  },
  optionContainer: {
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 7,
    backgroundColor: Colors().FadeGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    paddingBottom: 20,
  },
  TextInputStyle: {
    color: Colors().Dark,
    textAlign: 'left',
    width: '78%',
    marginLeft: 10,
  },
  CommentTextInputStyle: {
    marginTop: 10,
    height: 40,
    flex: 1,
    backgroundColor: Colors().FadeGreen,
    borderRadius: 22.5,
    marginHorizontal: 20,
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
  FilterFlatlistStyle: {
    width: "90%",
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: Colors().White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200,
    padding: 20
  }
});
