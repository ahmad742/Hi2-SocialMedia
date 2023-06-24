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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ActualHEIGHT} from '../../UI';
import {useNavigation} from '@react-navigation/native';

const Verification = () => {
  const navigation = useNavigation();
  const [keyBoardIsOpened, setKeyboardIsOpened] = useState(null);
  const [isVerified, setVerified] = useState(false);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
          flexGrow: 1,
          paddingBottom: 20,
        }}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps="handled"
        enableAutomaticScroll={Platform.OS === 'ios'}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.titleStyle}>Verification Code</Text>
        <Image
          style={styles.imgStyle}
          source={require('../../Assets/verify.png')}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionStyle}>
            Enter the verification code send to your registered mobile number :
            <Text style={[styles.phoneNumberStyle]}> +91 8888888888</Text>
          </Text>
        </View>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={6}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View style={styles.cellContainer}>
              <Text
                key={index}
                style={[styles.cellText]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        <View style={styles.codeContainerStyle}>
          <Text style={styles.timeTextStyle}>2:00s</Text>
          <Text style={styles.resendCode}>Resend Code</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setVerified(!isVerified);
            setTimeout(() => {
              navigation.navigate('Home');
            }, 100);
          }}
          style={{
            marginTop: 30,
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
            <Text style={styles.buttonTextStyle}>Verify</Text>
          </LinearGradient>
        </TouchableOpacity>
        {isVerified && (
          <Text style={styles.verifiedTextStyle}>Verified Successfully</Text>
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  titleStyle: {
    fontSize: RFValue(18),
    color: Colors().Dark,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  imgStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  codeFieldRoot: {marginHorizontal: 20, marginTop: 20},
  cellContainer: {
    width: 55,
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors().White,
    shadowColor: Colors().Purple,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: 'center',
    shadowOpacity: 1,
    shadowRadius: 3.85,
    elevation: 5,
  },
  cellText: {
    color: Colors().Purple,
    fontSize: 20,
    fontWeight: 'bold',
  },
  focusCell: {
    borderColor: Colors().Purple,
  },
  codeContainerStyle: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeTextStyle: {
    // color: Colors(),
    fontSize: RFValue(12),
    textAlign: 'left',
  },
  resendCode: {
    color: Colors().Purple,
    fontSize: RFValue(12),
    textAlign: 'right',
  },
  descriptionContainer: {
    marginTop: 50,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  descriptionStyle: {
    color: Colors().Dark,
    fontSize: RFValue(12),
    textAlign: 'justify',
    width: '100%',
  },
  phoneNumberStyle: {
    color: Colors().Blue,
    fontSize: RFValue(14),
  },
  buttonTextStyle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors().Purple,
  },
  verifiedTextStyle: {
    marginTop: 20,
    fontSize: RFValue(12),
    fontWeight: 'bold',
    color: Colors().Purple,
    textAlign: 'center',
  },
});
