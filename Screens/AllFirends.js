import { StyleSheet, Text, View, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import React, { useCallback, useState } from 'react';
import CommonHeader from '../UI/CommonHeader';
import { Colors } from '../UI/Colors';
import AllFriendsItem from '../Components/Home/RenderItems/AllFriendsItem';
import { RFValue } from 'react-native-responsive-fontsize';
const Data = [
  { image: require('../Assets/asset.png'), name: 'Bob' },
  { image: require('../Assets/a.jpg'), name: 'Sofia' },
  { image: require('../Assets/asset.png'), name: 'Bob' },
  { image: require('../Assets/a.jpg'), name: 'Sofia' },
  { image: require('../Assets/asset.png'), name: 'Bob' },
  { image: require('../Assets/a.jpg'), name: 'Sofia' },
  { image: require('../Assets/asset.png'), name: 'Bob' },
  { image: require('../Assets/a.jpg'), name: 'Sofia' },
];
const AllFriends = () => {
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const [modalVisible, setModalVisible] = useState(false);
  const _renderFriendsItem = ({ item, index }) => {
    return <AllFriendsItem item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title={'All Friends'} />
      <View style={styles.ContainerStyle}>
        <View style={styles.FiendRequestRowContainer}>
          <Text style={styles.FriendsRequestStyle}>30 Friends</Text>
          <View style={{
            width: modalVisible ? 100 : 30,
            alignItems: "flex-end",
          }}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.smallTextStyle}>Sort</Text>
            </TouchableOpacity>
            {
              modalVisible ?
                // <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.modalText}>{'Default'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.modalText}>{'Newest Friend List'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.modalText}>{'Older Friend List'}</Text>
                  </TouchableOpacity>
                </View>
                // </View>
                :
                null
            }
          </View>
        </View>
        <View style={{ zIndex: -1, }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            renderItem={_renderFriendsItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </View>

    </SafeAreaView>
  );
};

export default AllFriends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  contentContainerStyle: {
    paddingVertical: 20,
  },
  ContainerStyle: {
    flex: 1,
    backgroundColor: Colors().White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,

    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 12,
  },
  modalText: {
    marginTop: 8,
    fontSize: RFValue(10),
    color: Colors().Dark,
    fontWeight: '500',
  },
  FriendsRequestStyle: {
    fontSize: RFValue(14),
    color: Colors().Purple,
    fontWeight: 'bold',
  },
  FiendRequestRowContainer: {
    marginTop: 20,
    // alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  smallTextStyle: {
    fontSize: RFValue(12),
    color: Colors().DarkGreen,
    fontWeight: '500',
  },
  centeredView: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 100,
    width: 150,
    justifyContent: 'center',
    padding: 10,
    // zIndex: +1,
    position: "absolute",
    // right: 0,
    top: 20,
  },
});
