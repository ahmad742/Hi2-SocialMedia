import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../UI/Colors';
import LinearGradient from 'react-native-linear-gradient';

const DashBoardFriendSuggestionsItem = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={item?.image} />
      <Text style={styles.nameStyle} numberOfLines={1} ellipsizeMode="tail">
        {item?.name}
      </Text>
      <Text style={[styles.nameStyle, {color: Colors().Grey}]}>
        {item?.mutual ? item?.mutual : 0} mutual Friends
      </Text>
      <TouchableOpacity
        style={{
          marginVertical: 10,
        }}
        onPress={() => {
          console.log('umer');
        }}>
        <LinearGradient
          style={styles.buttonStyle}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.7, y: 1.0}}
          locations={[0, 0.5, 1]}
          colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
          <Text style={styles.buttonTextStyle}>Add Friend</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonTextStyle}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashBoardFriendSuggestionsItem;

const styles = StyleSheet.create({
  container: {
    width: 150,
    paddingVertical: 10,
    backgroundColor: Colors().White,
    marginStart: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameStyle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: RFValue(14),
    color: Colors().Dark,
    paddingHorizontal: 10,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginHorizontal: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonStyle: {
    height: 40,
    width: '70%',
    marginHorizontal: '15%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
