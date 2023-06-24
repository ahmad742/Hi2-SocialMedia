import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import RNTextInput from '../../UI/TextInput';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ActualHEIGHT} from '../../UI';
const ResetPassword = () => {
  const [keyBoardIsOpened, setKeyboardIsOpened] = useState(null);
  let HEIGHT = ActualHEIGHT();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardIsOpened(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardIsOpened(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={Platform.select({android: 200})}
        contentContainerStyle={{
          // height: keyBoardIsOpened ? null : HEIGHT,
          flexGrow: 1,
          paddingBottom: 20,
        }}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps="handled"
        enableAutomaticScroll={Platform.OS === 'ios'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            style={{width: 150, height: 150}}
            resizeMode="contain"
            source={require('../../Assets/logo.png')}
          />
        </View>
        <Text style={styles.titleStyle}>Reset Your Password</Text>
        <RNTextInput placeHolder=" Registered Email" />
        <TouchableOpacity>
          <LinearGradient
            style={{
              marginVertical: 40,
              height: 40,
              width: '90%',
              marginHorizontal: '5%',
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.7, y: 1.0}}
            locations={[0, 0.5, 1]}
            colors={['#4CDA4F', '#4CDA4F', '#E0EC48']}>
            <Text style={styles.buttonTextStyle}>Reset</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.textStyle}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.accountTextStyle}>Register Now!</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.LoginTextStyle}>Log In</Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().Purple,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: RFValue(18),
    color: Colors().White,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  checkBox_and_InputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors().White,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  accountTextStyle: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: Colors().Orange,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  LoginTextStyle: {
    marginTop: 20,
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: Colors().Green,
    marginLeft: 5,
    textAlign: 'center',
  },
});
