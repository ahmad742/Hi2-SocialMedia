import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../UI/Colors';
import Header from '../../Header';
import Carousel from 'react-native-snap-carousel';
import MoreStations from '../RenderItems/MoreStations';
const Radio = ({ navigation }) => {
  const [isAll, setIsAll] = useState(true)
  const [isPop, setIsPop] = useState(false)
  const [isRock, setIsRock] = useState(false)
  const [isHiphop, setIsHiphop] = useState(false)
  const [isCountry, setIsCountry] = useState(false)
  const [isNearBy, setIsNearBy] = useState(false)
  const LikePagesData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const data = [
    {
      id: 1,
      image: require('../../../Assets/Music.png')
    },
    {
      id: 2,
      image: require('../../../Assets/a.jpg')
    },
    {
      id: 3,
      image: require('../../../Assets/r.jpg')
    },
  ]
  const Channeldata = [
    {
      id: 1,
      image: require('../../../Assets/Channel1.png')
    },
    {
      id: 2,
      image: require('../../../Assets/a.jpg')
    },
    {
      id: 3,
      image: require('../../../Assets/r.jpg')
    },
  ]

  _renderItem = ({ item, index }) => {
    return (
      <View style={{
        width: '100%',
        marginTop: 20,
      }}>
        <Image style={{ width: "100%", height: 200 }} source={item.image} />
      </View>
    );
  }
  _TopStationsrenderItem = ({ item }) => {
    return (
      <TouchableOpacity 
      onPress={()=>navigation.navigate("ChannelDetails")}
      style={{
        width: 125,
        marginTop: 20,
        margin: 3
      }}>
        <Image style={{ width: "100%", height: 150,borderRadius:15 }} source={item.image} />
      </TouchableOpacity>
    );
  }
  const _renderLikePagesItem = ({ item, index }) => {
    return <MoreStations />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={() => {
          setIsAll(true)
          setIsCountry(false),
            setIsHiphop(false),
            setIsNearBy(false)
          setIsPop(false)
          setIsRock(false)
        }}>
          <Text style={{
            color: isAll ? Colors().Darkblue : Colors().Dark,
            fontWeight: isAll ? '600' : '400',
          }}>
            {'All'}
          </Text>
          {
            isAll &&
            <View style={{ borderBottomColor: Colors().Darkblue, borderBottomWidth: 1 }}></View>
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setIsAll(false)
          setIsCountry(false),
            setIsHiphop(false),
            setIsNearBy(false)
          setIsPop(true)
          setIsRock(false)
        }}>
          <Text style={{
            color: isPop ? Colors().Darkblue : Colors().Dark,
            fontWeight: isPop ? '600' : '400',
          }} >
            {'Pop'}
          </Text>
          {
            isPop &&
            <View style={{ borderBottomColor: Colors().Darkblue, borderBottomWidth: 1 }}></View>
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setIsAll(false)
          setIsCountry(false),
            setIsHiphop(false),
            setIsNearBy(false)
          setIsPop(false)
          setIsRock(true)
        }}>
          <Text style={{
            color: isRock ? Colors().Darkblue : Colors().Dark,
            fontWeight: isRock ? '600' : '400',
          }}>
            {'Rock'}
          </Text>
          {
            isRock &&
            <View style={{ borderBottomColor: Colors().Darkblue, borderBottomWidth: 1 }}></View>
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setIsAll(false)
          setIsCountry(false),
            setIsHiphop(true),
            setIsNearBy(false)
          setIsPop(false)
          setIsRock(false)
        }}>
          <Text style={{
            color: isHiphop ? Colors().Darkblue : Colors().Dark,
            fontWeight: isHiphop ? '600' : '400',
          }}>
            {'Hip Hop'}
          </Text>
          {
            isHiphop &&
            <View style={{ borderBottomColor: Colors().Darkblue, borderBottomWidth: 1 }}></View>
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setIsAll(false)
          setIsCountry(true),
            setIsHiphop(false),
            setIsNearBy(false)
          setIsPop(false)
          setIsRock(false)
        }}>
          <Text style={{
            color: isCountry ? Colors().Darkblue : Colors().Dark,
            fontWeight: isCountry ? '600' : '400',
          }}>
            {'Counrty'}
          </Text>
          {
            isCountry &&
            <View style={{ borderBottomColor: Colors().Darkblue, borderBottomWidth: 1 }}></View>
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setIsAll(false)
          setIsCountry(false),
            setIsHiphop(false),
            setIsNearBy(true)
          setIsPop(false)
          setIsRock(false)
        }}>
          <Text style={{
            color: isNearBy ? Colors().Darkblue : Colors().Dark,
            fontWeight: isNearBy ? '600' : '400',
          }}>
            {'Near By'}
          </Text>
          {
            isNearBy &&
            <View style={{ borderBottomColor: Colors().Darkblue, borderBottomWidth: 1 }}></View>
          }
        </TouchableOpacity>
      </View>
      {
        isAll &&
        <ScrollView style={{
          marginTop: 20
        }}>
          <Carousel
            data={data}
            renderItem={(item) => _renderItem(item)}
            sliderWidth={400}
            itemWidth={400}
          />
          <View style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 20
          }}>
            <Text>
              {'Top Stations'}
            </Text>
          </View>
          <FlatList
            horizontal
            data={Channeldata}
            renderItem={(item) => _TopStationsrenderItem(item)}
          />
          <View style={{
            width: '90%',
            alignSelf: 'center',
            margin: 20
          }}>
            <Text >
              {'More Stations'}
            </Text>
          </View>
          <FlatList
            style={{
              width: '95%',
              alignSelf: 'center'
            }}
            showsVerticalScrollIndicator={false}
            data={LikePagesData}
            renderItem={_renderLikePagesItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </ScrollView>
      }

    </SafeAreaView>
  );
};

export default Radio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  tabBarContainer: {
    width: '90%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10
  }
});
