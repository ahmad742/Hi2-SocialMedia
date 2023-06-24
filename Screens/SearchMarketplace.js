import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Colors} from '../UI/Colors';
import CommonHeader from '../UI/CommonHeader';
import SearchMarketPLaceTabView from './TabView/SearchMarketPlaceTabView';

const SearchMarketplace = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader />
      <SearchMarketPLaceTabView />
    </SafeAreaView>
  );
};

export default SearchMarketplace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
});
