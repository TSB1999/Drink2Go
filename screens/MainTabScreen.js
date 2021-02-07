import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Home.js";
import UpdatesScreen from "./Updates.js";
import ProfileScreen from "./Profile.js";
import SpotifyScreen from "./Spotify.js";
import PostScreen from "./PostScreen.js";

import Entypo from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import UserStore from "../stores/UserStore.js";
import { observer } from "mobx-react";

const HomeStack = createStackNavigator();
const UpdatesStack = createStackNavigator();
const PostStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      style={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Drinks"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Entypo name="cup" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Me"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default observer(MainTabScreen);

const HomeStackScreen = ({ navigation }) => {
  return (
    // console.log(JSON.parse(UserStore.userDetails.credentials.topArtists)),
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#007bff",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "DRINKS2GO",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              backgroundColor="#fff"
              color="#21295c"
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 5 }}
            ></Icon.Button>
          ),
          headerRight: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#fff"
              color="#007bff"
            ></Icon.Button>
          ),
        }}
      />
      {/* <HomeStack.Screen name="Updates" component={UpdatesScreen} />
      <HomeStack.Screen name="Me" component={ProfileScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} /> */}
    </HomeStack.Navigator>
  );
};

const PostStackScreen = ({ navigation }) => (
  <PostStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#191e3c",
      },
      headerTintColor: "#007bff",
    }}
  >
    <PostStack.Screen
      name="Post"
      component={PostScreen}
      options={{
        title: "Post",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#191e3c"
            color="#007bff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </PostStack.Navigator>
);

const UpdatesStackScreen = ({ navigation }) => (
  <UpdatesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#191e3c",
      },
      headerTintColor: "#007bff",
    }}
  >
    <UpdatesStack.Screen
      name="Updates"
      component={UpdatesScreen}
      options={{
        title: "Updates",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#191e3c"
            color="#007bff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </UpdatesStack.Navigator>
);

const UserStackScreen = ({ navigation }) => (
  <UpdatesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#21295c",
      },
      headerTintColor: "#007bff",
    }}
  >
    <UpdatesStack.Screen
      name="Me"
      component={ProfileScreen}
      options={{
        title: "EQUIAKNOW",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#21295c"
            color="#007bff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </UpdatesStack.Navigator>
);

const SpotifyStackScreen = ({ navigation }) => (
  <UpdatesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1DB954",
      },
      headerTintColor: "white",
    }}
  >
    <UpdatesStack.Screen
      name="Spotify"
      component={SpotifyScreen}
      options={{
        title: "Certified Lover Boy : A Side",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1DB954"
            color="#191e3c"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </UpdatesStack.Navigator>
);
