import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Intro,
  Login,
  SignUp,
  ResetPassword,
  Verification,
  Home,
  Suggestions,
  AllFriends,
  Profile,
  Events,
  Groups,
  NewListing,
  Category,
  SearchMarketplace,
  CreatePost,
  Splash,
  Invite,
  GoLive,
  Pages,
  HelpCenter,
  SettingAndPrivacy,
  AccountSetting,
  NewsDetail,
  PrivacyCheckup,
  ActivityLog,
  YourPost,
  Notifications,
  Blocking,
  PublicPosts,
} from '../Screens';
import ChannelDetails from '../Screens/ChannelDetails';
import EditProfile from '../Screens/EditProfile';
import { Colors } from '../UI/Colors';
import EditBio from '../Screens/EditBio';
import AddHobbies from '../Screens/AddHobbies';
import About from '../Screens/About';
import FeelingsAcitivity from '../Screens/FeelingsAcitivity';
import GroupsDetails from '../Screens/GroupsDetails';
import CreateYourPage from '../Screens/CreateYourPage';
import EventDetails from '../Screens/EventDetails';
import LiveChat from '../Screens/LiveChat';
import PopUpIdeas from '../Screens/PopUpIdeas';
import CustomisePage_1 from '../Screens/CustomisePage_1';
import CustomisePage_2 from '../Screens/CustomisePage_2';
import InviteFriendsPage from '../Screens/InviteFriendsPage';
import CustomisePage_3 from '../Screens/CustomisePage_3';
import MarketPlaceDetails from '../Screens/MarketPlaceDetails';
import CommerceProfile from '../Screens/CommerceProfile';
import Watch from '../Components/Home/BottomTab/Watch';
import Chat from '../Components/Home/BottomTab/Chat'

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        backgroundColor={Colors().Purple}
        barStyle={'light-content'}
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Suggestions" component={Suggestions} />
        <Stack.Screen name="AllFriends" component={AllFriends} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Groups" component={Groups} />
        <Stack.Screen name="NewListing" component={NewListing} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="SearchMarketplace" component={SearchMarketplace} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="Invite" component={Invite} />
        <Stack.Screen name="GoLive" component={GoLive} />
        <Stack.Screen name="Pages" component={Pages} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="SettingAndPrivacy" component={SettingAndPrivacy} />
        <Stack.Screen name="AccountSetting" component={AccountSetting} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="PrivacyCheckup" component={PrivacyCheckup} />
        <Stack.Screen name="ActivityLog" component={ActivityLog} />
        <Stack.Screen name="YourPost" component={YourPost} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Blocking" component={Blocking} />
        <Stack.Screen name="PublicPosts" component={PublicPosts} />
        <Stack.Screen name="ChannelDetails" component={ChannelDetails} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="EditBio" component={EditBio} />
        <Stack.Screen name="AddHobbies" component={AddHobbies} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="FeelingsAcitivity" component={FeelingsAcitivity} />
        <Stack.Screen name="GroupsDetails" component={GroupsDetails} />
        <Stack.Screen name="CreateYourPage" component={CreateYourPage} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="LiveChat" component={LiveChat} />
        <Stack.Screen name="PopUpIdeas" component={PopUpIdeas} />
        <Stack.Screen name="CustomisePage_1" component={CustomisePage_1} />
        <Stack.Screen name="CustomisePage_2" component={CustomisePage_2} />
        <Stack.Screen name="CustomisePage_3" component={CustomisePage_3} />
        <Stack.Screen name="InviteFriendsPage" component={InviteFriendsPage} />
        <Stack.Screen name="MarketPlaceDetails" component={MarketPlaceDetails} />
        <Stack.Screen name="CommerceProfile" component={CommerceProfile} />
        <Stack.Screen name="Watch" component={Watch} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
