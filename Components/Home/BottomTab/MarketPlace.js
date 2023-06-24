import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import React, { useCallback, useRef } from 'react';
import CommonHeader from '../../../UI/CommonHeader';
import { Colors } from '../../../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import MarketPlaceItem from '../RenderItems/MarketPlaceItem';
import LinearGradient from 'react-native-linear-gradient';
import VectorIcons from '../../../UI/VectorIcons';
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";

const Data = [1, 2, 3, 4, 5, 6, 7];
const MarketPlace = () => {
  const filterRBSheet = useRef();
  const navigation = useNavigation();
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderMarketPLaceItem = ({ item, index }) => {
    return <MarketPlaceItem onPress={() => navigation.navigate("MarketPlaceDetails")} item={item} />;
  };

  const onSearchIconPress = () => {
    navigation.navigate('SearchMarketplace');
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        title="MarketPLace"
        common
        onSearchIconPress={onSearchIconPress}
      />

      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={{ width: '49%' }}
                onPress={() => {
                  navigation.navigate('NewListing');
                }}>
                <LinearGradient
                  style={{
                    height: 35,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  start={{ x: 0.0, y: 0.0 }}
                  end={{ x: 0.7, y: 1.0 }}
                  locations={[0, 0.5, 1]}
                  colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
                  <Text style={styles.buttonTextStyle}>Create New Listing</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Category');
                }}
                style={{
                  height: 35,
                  width: '49%',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors().FadeGreen,
                }}>
                <Text style={styles.buttonTextStyle}>Category</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.textStyle}>Todays Pick</Text>
              <TouchableOpacity
                onPress={() => filterRBSheet.current.open()}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <VectorIcons
                  icon="MaterialCommunityIcons"
                  name={'sort-variant'}
                  color={Colors().Dark}
                  size={24}
                />

                <Text
                  style={{
                    color: Colors().Dark,
                    marginLeft: 5,
                  }}>
                  Filters
                </Text>
              </TouchableOpacity  >
            </View>
          </>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={_renderMarketPLaceItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
      <RBSheet
        ref={filterRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container:{
            height:350,
            borderTopRightRadius:10,
            borderTopLeftRadius:10
          }
        }}
      >
        <View style={styles.bottomSheetMainContainer}>
          <View style={styles.bottomSheetInnerContainer}>
            <View style={{ width: '90%', alignItems: "center" }}>
              <Text style={{ color: Colors().Dark, fontSize: 18, fontWeight: '500', marginLeft:20 }}>{'Filter'}</Text>
            </View>
            <TouchableOpacity onPress={() => filterRBSheet.current.close()}>
              <Image source={require('../../../Assets/close.png')} style={{ width: 15, height: 15 }} />
            </TouchableOpacity>
          </View>
          <Text style={{ color: Colors().Dark, fontSize: 14, fontWeight: '500' }}>{'Price'}</Text>
          <View style={styles.priceMainContainer}>
            <TextInput
              placeholder='Min'
              placeholderTextColor={Colors().Dark}
              style={styles.inputStyleContainer}
            />
            <Text style={{ color: Colors().Green, fontSize: 16, fontWeight: '500' }}>{'To'}</Text>
            <TextInput
              placeholder='Max'
              placeholderTextColor={Colors().Dark}
              style={styles.inputStyleContainer}
            />
          </View>
          <Text style={{ color: Colors().Dark, fontSize: 14, fontWeight: '500', marginTop:20 }}>{'Location'}</Text>
          <View style={styles.locationContainer}>
          <TextInput
              placeholder='Choose Location'
              placeholderTextColor={Colors().Dark}
              style={styles.locationInputStyleContainer}
            />
             <Image source={require('../../../Assets/location.png')} style={{ width: 15, height: 15 }} />
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default MarketPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  rowContainer: {
    marginVertical: 10,
    backgroundColor: Colors().White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  textStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: 'bold',
  },
  bottomSheetMainContainer: {
    padding: 20,

  },
  bottomSheetInnerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  inputStyleContainer: {
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    textAlign: "center"
  },
  priceMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  locationContainer: {
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    paddingHorizontal:10,
    alignItems:'center',
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20
  },
  locationInputStyleContainer:{
    width:'90%'
  }
});
