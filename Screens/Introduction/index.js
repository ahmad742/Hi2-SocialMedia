import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Intro = () => {
  const navigation = useNavigation();

  const onGetStartedPress = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="stretch"
        style={styles.imgStyle}
        source={require('../../Assets/introGroup.png')}
      />

      <View style={styles.textContainer}>
        <Text style={styles.ConnectedTextStyle}>Stay Connected</Text>
        <Text style={styles.textStyle}>
          with your <Text style={styles.peopleTextStyle}>People</Text>
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity onPress={onGetStartedPress}>
          <LinearGradient
            style={{
              height: 40,
              width: '90%',
              marginHorizontal: '5%',
              borderRadius: RFValue(12),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            colors={['#4CDA4F', '#E0EC48']}>
            <Text style={styles.buttonTextStyle}>Get Started </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  imgStyle: {
    height: '75%',
    width: '100%',
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  ConnectedTextStyle: {
    fontSize: RFValue(18),
    color: Colors().Purple,
    fontWeight: '500',
  },
  peopleTextStyle: {
    fontSize: RFValue(18),
    color: Colors().Orange,
    fontWeight: 'bold',
  },
  textStyle: {
    color: Colors().Dark,
    fontSize: RFValue(14),
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
});
