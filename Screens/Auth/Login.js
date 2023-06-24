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
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ActualHEIGHT} from '../../UI';
const Login = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
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
        <Text style={styles.titleStyle}>LogIn</Text>
        <RNTextInput placeHolder="Email" />
        <RNTextInput placeHolder="Password" isSecureTextEntry />
        <View style={styles.checkBox_and_InputContainer}>
          <View style={styles.rememberContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              tintColors={{true: Colors().Green, false: Colors().White}}
              style={{transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }]}}
            />
            <Text style={styles.textStyle}>{' Remember me'}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ResetPassword');
            }}>
            <Text style={styles.textStyle}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginVertical: 40,
          }}>
          <LinearGradient
            style={{
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
            <Text style={styles.buttonTextStyle}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.textStyle}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.accountTextStyle}>Register Now!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
    fontSize: 18,
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
});
