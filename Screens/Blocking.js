import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import react, { useCallback } from 'react';
import CommonHeader from '../UI/CommonHeader';
import { Colors } from '../UI/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import VectorIcons from '../UI/VectorIcons';
import BlockingItem from '../Components/Home/RenderItems/BlockingItem';
const Data = [1, 3, 4, 5, 399, 45];
const Blocking = ({ navigation }) => {
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const _renderBlockingItem = ({ item, index }) => {
    return <BlockingItem />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Blocking" hideSearch />
      <View style={styles.headingContainer}>
        <Text style={styles.titleStyle}>Blocking</Text>
        <Text style={styles.textStyle}>
          Once you block someone, that person can no longer see things you post
          on your timeline, tag you, invite you to events or groups, start a
          conversation with you, or add you as a friend.
        </Text>
      </View>
      <View style={styles.cardStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AllFriends")}
          style={styles.rowContainer}>
          <VectorIcons
            icon="AntDesign"
            name={'pluscircle'}
            color={Colors().Green}
            size={24}
          />
          <Text style={styles.cardTitleStyle}>Add to Blocked List</Text>
        </TouchableOpacity>
        <View style={styles.CommentTextInputStyle}>
          <VectorIcons
            icon={'MaterialIcons'}
            name={'search'}
            size={24}
            color={Colors().Grey}
          />
          <TextInput
            style={styles.TextInputStyle}
            placeholder={'Type the name of person'}
            placeholderTextColor={Colors().Grey}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={_renderBlockingItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default Blocking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  headingContainer: {
    marginHorizontal: 20,
  },
  titleStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '700',
  },
  textStyle: {
    fontSize: RFValue(12),
    color: Colors().Grey,
    marginTop: 10,
  },
  cardStyle: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: Colors().FadeGreen,
    height: '60%',
    borderRadius: 12,
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitleStyle: {
    fontSize: RFValue(14),
    color: Colors().Dark,
    fontWeight: '700',
    marginLeft: 10,
  },
  TextInputStyle: {
    color: Colors().Dark,
    textAlign: 'left',
    width: '90%',
    // backgroundColor: 'red',
    height: 40,
  },
  CommentTextInputStyle: {
    marginTop: 10,
    height: 40,
    backgroundColor: Colors().White,
    borderRadius: 22.5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CommentInputContainerStyle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
