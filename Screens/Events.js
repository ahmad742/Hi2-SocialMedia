import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { Colors } from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import EventsItem from '../Components/Home/RenderItems/EventsItem';
import VectorIcons from '../UI/VectorIcons';
import FutureEventsItem from '../Components/Home/RenderItems/FutureEventsItem';
import SearchBar from 'react-native-dynamic-search-bar';
const Data = [1, 2, 3, 4, 5, 6];


const Events = ({ navigation }) => {
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const [searchIsOpened, setSearchOpened] = useState(false);
  const _renderEventsItem = ({ item, index }) => {
    return <EventsItem />;
  };
  const _renderFutureItem = ({ item, index }) => {
    return <FutureEventsItem onPress={() => navigation.navigate("EventDetails")} />;
  };

  const Header = () => {
    return (
      <>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.optionButtonStyle}>
            <Text style={styles.optionTextStyle}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtonStyle}>
            <Text style={styles.optionTextStyle}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtonStyle}>
            <Text style={styles.optionTextStyle}>Tomorrow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtonStyle}>
            <Text style={styles.optionTextStyle}>This week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButtonStyle}>
            <Text style={styles.optionTextStyle}>This month</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
          <Text style={styles.textStyle}>Cultural Events</Text>
          <TouchableOpacity style={{
            width: 120,
            height: 30,
            borderWidth: 1,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: "center",
            paddingHorizontal: 10
          }}>
            <Text style={styles.textStyle}>All</Text>
            <Image style={{ width: 20, height: 20 }} source={require('../Assets/downarrow.png')} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: Colors().FadeGreen,
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
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Data}
            renderItem={_renderEventsItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.textStyle}>Future events</Text>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <CommonHeader title="Events" /> */}
      <View style={styles.headerMainContainer}>
        <View style={{
          width: '30%',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          <VectorIcons
            style={styles.iconStyle}
            icon="Feather"
            name="arrow-left-circle"
            size={24}
            color={Colors().Green}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={{
            marginLeft: 10,
            color: Colors().Dark,
            fontSize: RFValue(16),
            textAlign: 'center',
            fontWeight: '700',
          }}>{'Events'}</Text>
        </View>
        {searchIsOpened == true ?
          <SearchBar
            textInputStyle={{
              color: Colors().Purple,
              width: '70%',
              fontSize: RFValue(14),
            }}
            clearIconImageStyle={{
              tintColor: Colors().Purple,
              height: 11,
            }}
            searchIconImageStyle={{
              tintColor: Colors().Purple,
              height: 10,
            }}
            placeholderTextColor={Colors().Purple}
            fontColor={Colors().Purple}
            style={styles.searchBar}
            placeholder={'Search'}
            onClearPress={() => {
              // LayoutAnimation.configureNext(
              //   LayoutAnimation.create(
              //     300,
              //     LayoutAnimation.Types.easeInEaseOut,
              //     LayoutAnimation.Properties.scaleXY,
              //   ),
              // );
              setSearchOpened(false);
            }}
          />
          :
          <View style={{
            width: '70%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent:"flex-end"
          }}>
            <TouchableOpacity>
              <Image style={{ width: 20, height: 20 , marginRight:20}} source={require('../Assets/add.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSearchOpened(!searchIsOpened)}>
              <VectorIcons
                style={{ alignSelf: 'flex-end' }}
                icon="Octicons"
                name="search"
                size={24}
                color={Colors().Purple}
              />
            </TouchableOpacity>
          </View>
        }
      </View>
      <FlatList
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={_renderFutureItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  rowContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: 10,
    alignItems:"center"
  },
  optionButtonStyle: {
    backgroundColor: Colors().FadeGreen,
    paddingHorizontal: 10,
    borderRadius: 7,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 5,
  },
  optionTextStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors().Dark,
    fontWeight: '700',
  },
  contentContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  headerMainContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 50
  },
  searchBar: {
    borderRadius: 0,
    backgroundColor: Colors().White,
    borderBottomColor: Colors().Dark,
    borderColor: Colors().LightGreen,
    width: '70%',
  }
});
