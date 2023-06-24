import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../../UI/VectorIcons';
import RNTextInputColored from '../../UI/RNTextInput';
import CountryPicker from 'react-native-country-picker-modal';
import LinearGradient from 'react-native-linear-gradient';
import RadioButtonRN from 'radio-buttons-react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ActualHEIGHT} from '../../UI';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
const data = [
  {
    label: 'Male',
  },
  {
    label: 'Female',
  },
];
const SignUp = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('92');
  const [keyBoardIsOpened, setKeyboardIsOpened] = useState(null);
  const [profile, setProfile] = useState();
  let HEIGHT = ActualHEIGHT();

  const getProfile = () => {
    console.log('yes');
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.assets[0].uri,
          name: 'profile' + '.jpeg',
          type: 'image/jpeg',
        };
        setProfile(source);
      }
    });
  };

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
          flexGrow: 1,
          paddingBottom: 20,
        }}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps="handled"
        enableAutomaticScroll={Platform.OS === 'ios'}
        showsVerticalScrollIndicator={false}>
        {show == true ? (
          <CountryPicker
            withFilter={true}
            visible={show}
            onSelect={value => {
              setCountryCode(value.callingCode);
              console.log(value);
              setShow(false);
            }}
            onClose={() => {
              setShow(false);
            }}
          />
        ) : null}
        <View style={styles.imageContainer}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 40}}
            resizeMode="cover"
            source={require('../../Assets/user.png')}
          />
          <VectorIcons
            style={styles.iconStyle}
            icon="Feather"
            name={'camera'}
            color={Colors().Purple}
            size={24}
            onPress={getProfile}
          />
        </View>

        <RNTextInputColored placeHolder="First Name" />
        <RNTextInputColored placeHolder="Last Name" />
        <RNTextInputColored placeHolder="Email" />
        <RNTextInputColored placeHolder="Password" />
        <View style={{marginTop: 10}}>
          <RadioButtonRN
            style={{
              flexDirection: 'row',

              width: '90%',
              marginHorizontal: '5%',
            }}
            boxStyle={{width: 100, paddingBottom: 10}}
            data={data}
            selectedBtn={e => console.log(e)}
            box={false}
            circleSize={10}
            activeColor={Colors().Purple}
            textStyle={styles.radioTextStyle}
          />
        </View>
        <View style={styles.countryCodeContainer}>
          <TouchableOpacity
            style={styles.dropDownStyle}
            onPress={() => {
              setShow(true);
            }}>
            <Text style={styles.countryCodeText}>+{countryCode} &#x25BC;</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              marginLeft: 5,
            }}>
            <RNTextInputColored
              margin
              placeHolder="Mobile"
              keyBoardType={'number-pad'}
            />
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Text
            style={{
              fontSize: RFValue(12),
              textAlign: 'center',
            }}>
            By clicking Sign Up, you agree to our
          </Text>
          <Text
            style={{
              fontSize: RFValue(12),
              textAlign: 'center',
              color: Colors().Purple,
            }}>
            Terms, Privacy Policy and Cookies Policy.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginVertical: 10,
          }}
          onPress={() => {
            navigation.navigate('Verification');
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
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.textStyle}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.accountTextStyle}>Log In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  imageContainer: {
    marginVertical: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors().Purple,
    alignSelf: 'center',
  },
  iconStyle: {
    bottom: -10,
    right: -15,
    position: 'absolute',
  },
  countryCodeContainer: {
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dropDownStyle: {
    marginRight: 5,
    backgroundColor: Colors().White,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  countryCodeText: {
    color: Colors().Dark,
    textAlign: 'center',
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  textStyle: {
    fontSize: RFValue(12),
    // color: Colors().White,
  },
  accountTextStyle: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: Colors().Orange,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  radioTextStyle: {
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 10,
  },
});
