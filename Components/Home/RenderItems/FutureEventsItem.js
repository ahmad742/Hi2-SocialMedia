import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../../UI/Colors';

const FutureEventsItem = (props) => {
  const { onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../Assets/asset.png')}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.titleStyle}>Kids Workshop</Text>
        <Text style={styles.createdTextStyle}>Created By James B.</Text>
        <Text style={[styles.createdTextStyle, { color: Colors().Grey }]}>
          1 Interested
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.titleStyle}>Intrested</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default FutureEventsItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors().White,
    marginHorizontal: 10,
    borderRadius: 12,
    marginTop: 10,
    // height: (300),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    height: 200,
    backgroundColor: Colors().Grey,
    borderRadius: 12,
    overflow: 'hidden',
  },
  descriptionContainer: {
    padding: 10,
  },
  titleStyle: {
    fontSize: RFValue(14),
    fontWeight: '900',
    color: Colors().Dark,
  },
  createdTextStyle: {
    marginTop: 5,
    fontSize: RFValue(12),
    color: Colors().Dark,
  },
  buttonStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: Colors().FadeGreen,
    borderRadius: 12,
  },
});
