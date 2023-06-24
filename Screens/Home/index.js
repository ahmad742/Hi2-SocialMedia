import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../UI/Colors';
import BottomTab from '../../Components/Home/BottomTab';
import Header from '../../Components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <BottomTab />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
});
