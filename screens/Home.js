import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  Text,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Picker,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { TabView, SceneMap } from "react-native-tab-view";

import Post from "../components/Post";
import UserStore from "../stores/UserStore";
import { observer } from "mobx-react";
import axios from "axios";

function wait(timeout) {
  return new Promise((res) => {
    setTimeout(res, timeout);
  });
}

const HomeScreen = ({ navigation, postScreen }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
      // new post
      axios
        .get("https://europe-west1-projectmelo.cloudfunctions.net/api/posts")
        .then((res) => {
          console.log("yes");
          UserStore.allPosts = res.data;
        })
        .catch((err) => console.log(err));
    }, [refreshing]);
  });

  let recentPostsMarkup = UserStore.allPosts ? (
    UserStore.allPosts.map((post) => <Post key={post.postID} post={post} />)
  ) : (
      <Text>Loading</Text>
    );
  return (
    <SafeAreaView style={{ backgroundColor: "#007bff" }}>
      <ScrollView
        style={{ backgroundColor: "#007bff", marginTop: 2 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* <FlatList
          data={UserStore.allPosts}
          renderItem={({ item }) => (
            <Post post={item} />
          )}
          keyExtractor={item => item.postID}
        /> */}
        {recentPostsMarkup}
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(HomeScreen);

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#007bff",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 25,
    paddingTop: 50,
  },
  footer: {
    flex: 1.9,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingHorizontal: 20,
    // paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "column",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: "100%",
    height: "100%",
    // backgroundColor: "whitesmoke",
    borderRadius: 20,
  },
  scene: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
