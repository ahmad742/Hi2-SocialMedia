import {
  StyleSheet,
  Text,
  View,
  Image,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
} from 'react-native';
import { Appbar } from 'react-native-paper';

import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../UI/Colors';
import SearchBar from 'react-native-dynamic-search-bar';
import VectorIcons from '../UI/VectorIcons';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Header = props => {
  const { color, message, onMessagePress } = props;
  const [searchIsOpened, setSearchOpened] = useState(false);
  return (
    <Appbar.Header style={styles.container(color)}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../Assets/logo.png')}
          style={styles.logoStyle}
        />
      </View>

      <View style={styles.SearchContainer}>
        {searchIsOpened ? (
          <SearchBar
            textInputStyle={{
              color: Colors().Purple,
              width: '70%',
              fontSize: RFValue(14),
            }}
            clearIconImageStyle={{
              tintColor: Colors().Purple,
              height: 11,
            }}
            searchIconImageStyle={{
              tintColor: Colors().Purple,
              height: 11,
            }}
            placeholderTextColor={Colors().Purple}
            fontColor={Colors().Purple}
            style={styles.searchBar}
            placeholder={'Search'}
            onClearPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.create(
                  300,
                  LayoutAnimation.Types.easeInEaseOut,
                  LayoutAnimation.Properties.scaleXY,
                ),
              );
              setSearchOpened(false);
            }}
          />
        ) : (
          <View style={styles.iconContainer}>
            {
              message &&
              <TouchableOpacity onPress={onMessagePress}>
                <VectorIcons
                  style={{ marginRight: 15 }}
                  icon="MaterialCommunityIcons"
                  name="comment-text-multiple-outline"
                  size={22}
                  color={Colors().Purple}
                />
              </TouchableOpacity>
            }
            <TouchableOpacity
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.create(
                    300,
                    LayoutAnimation.Types.easeInEaseOut,
                    LayoutAnimation.Properties.scaleXY,
                  ),
                );
                setSearchOpened(true);
              }}>
              <VectorIcons
                style={{ alignSelf: 'flex-end', marginRight: 5 }}
                icon="Octicons"
                name="search"
                size={22}
                color={Colors().Purple}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: color => ({
    //height: 60,
    backgroundColor: color ? color : Colors().White,
  }),
  logoContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: '80%',
    width: '30%',
    justifyContent: 'center',
  },
  logoStyle: {
    width: '100%',
    height: '100%',
  },
  titleStyle: {
    color: Colors().Dark,
    fontSize: RFValue(14),
    textAlign: 'center',
    fontWeight: '500',
  },
  searchIconStyle: {
    width: 22,
    height: 22,
    alignSelf: 'flex-end',
    tintColor: Colors().Purple,
  },
  searchBar: {
    borderRadius: 0,
    backgroundColor: Colors().White,
    borderBottomColor: Colors().Dark,
    borderColor: Colors().LightGreen,
    width: '100%',
  },
  SearchContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
