import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from "react-native";
import Post from "../components/Post";
import UserStore from "../stores/UserStore";
import { observer } from "mobx-react";

const HomeScreen = ({ navigation }) => {
  let recentPostsMarkup = UserStore.allPosts ? (
    UserStore.allPosts.map((post) => <Post key={post.postID} post={post} />)
  ) : (
    <Text>Loading</Text>
  );
  return (
    <SafeAreaView>
      <ScrollView>{recentPostsMarkup}</ScrollView>
    </SafeAreaView>
  );
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
