import {StyleSheet, Platform, View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../../../UI/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import VectorIcons from '../../../UI/VectorIcons';
import Friends from './Friends';
import Dashboard from './Dashboard';
import MarketPlace from './MarketPlace';
import Watch from './Watch';
import Menu from './Menu';
import Notifications from './Notifications';
import Chat from './Chat';
import News from './News';
import Radio from './Radio';
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MenuScreen" component={Menu} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Radio" component={Radio} />
    </Stack.Navigator>
  );
};
const BottomTab = () => {
  return (
    <>
      <Tabs.Navigator screenOptions={styles.screenOptions}>
        <Tabs.Screen
          name="DashBoard"
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <VectorIcons
                icon={'MaterialCommunityIcons'}
                name={'home-outline'}
                size={24}
                color={focused ? Colors().Green : Colors().Inactive}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Friends"
          component={Friends}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <VectorIcons
                icon={'MaterialCommunityIcons'}
                name={'account-multiple-outline'}
                size={24}
                color={focused ? Colors().Green : Colors().Inactive}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="play"
          component={Watch}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <VectorIcons
                icon={'MaterialCommunityIcons'}
                name="television-play"
                size={24}
                color={focused ? Colors().Green : Colors().Inactive}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="MarketPlace"
          component={MarketPlace}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <VectorIcons
                icon={'MaterialCommunityIcons'}
                name={'storefront-outline'}
                size={24}
                color={focused ? Colors().Green : Colors().Inactive}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <VectorIcons
                icon={'MaterialCommunityIcons'}
                name={'bell-outline'}
                size={24}
                color={focused ? Colors().Green : Colors().Inactive}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Menu"
          component={Screens}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <VectorIcons
                icon={'MaterialCommunityIcons'}
                name={'menu'}
                size={24}
                color={focused ? Colors().Green : Colors().Inactive}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  imageIconStyle: focused => ({
    tintColor: focused ? Colors().Green : Colors().Inactive,
    width: 24,
    height: 24,
  }),
  screenOptions: {
    tabBarLabelStyle: {
      fontSize: RFValue(12),
      fontWeight: '500',
      marginBottom: 2,
      marginTop: 2,
    },
    tabBarActiveTintColor: Colors().Green,
    tabBarInactiveTintColor: Colors().Inactive,
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: true,
    tabBarStyle: {
      backgroundColor: Colors().White,
      height: Platform.OS === 'android' ? 55 : 65,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      borderTopWidth: 0,
    },
  },
});
