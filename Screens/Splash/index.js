import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../UI/Colors';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Intro');
    }, 1500);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={require('../../Assets/logo.png')}
      />
      <Image
        style={styles.bottomImageStyle}
        source={require('../../Assets/splashImage.png')}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().Purple,
  },
  logoStyle: {
    marginTop: '30%',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  bottomImageStyle: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
