import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {Colors} from '../../UI/Colors';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {RFValue} from 'react-native-responsive-fontsize';
import RecentTab from './RecentTab';
import SavedSearchesTab from './SavedSearchesTab';
const SearchMarketPLaceTabView = () => {
  const Test = () => (
    <View>
      <Text>umer</Text>
    </View>
  );
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Recent'},
    {key: 'second', title: 'Saved Searches'},
  ]);

  const renderScene = SceneMap({
    first: RecentTab,
    second: SavedSearchesTab,
  });
  const _renderTabBar = props => {
    return (
      <>
        <TabBar
          {...props}
          style={styles.tabBarStyle}
          indicatorStyle={styles.tabBarIndicator}
          renderLabel={({route, focused}) => (
            <Text style={styles.tabBarLabelStyle(focused)}>{route.title}</Text>
          )}
        />
      </>
    );
  };

  return (
    <TabView
      renderTabBar={_renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default SearchMarketPLaceTabView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors().White,
  },
  tabBarIndicator: {
    backgroundColor: Colors().Purple,
    borderRadius: 100,
    // height: 2,
  },
  tabBarLabelStyle: focused => ({
    color: focused ? Colors().Purple : Colors().Grey,
    fontSize: RFValue(12),
    fontWeight: '700',
  }),
  tabBarStyle: {
    marginTop: 5,
    marginHorizontal: 10,
    backgroundColor: Colors().White,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
