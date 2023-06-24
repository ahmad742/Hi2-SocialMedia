import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../../UI/VectorIcons';

const SavedSearchesTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>
        you don't have any saved searches for now
      </Text>
      <View style={styles.inputContainerStyle}>
        <VectorIcons
          icon="Octicons"
          name="search"
          size={24}
          color={Colors().DarkGreen}
        />
        <TextInput
          placeholder={'Say something...'}
          placeholderTextColor={Colors().DarkGreen}
          style={styles.textInputStyle}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SavedSearchesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
    justifyContent: 'center',
  },
  textStyle: {
    marginHorizontal: 10,
    textAlign: 'center',
    color: Colors().Dark,
  },
  textInputStyle: {
    height: 40,
    flex: 1,
    fontSize: RFValue(12),
    color: Colors().Dark,
    backgroundColor: Colors().Green,
    borderRadius: 22.5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  inputContainerStyle: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors().Green,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
