import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  Text,
  Button,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";

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
  if (postScreen) {
    return (
      <Animatable.View animation="fadeInUpBig">
        <Text>Post</Text>
      </Animatable.View>
    );
  } else {
    return (
      <SafeAreaView style={{ backgroundColor: "#0077f6" }}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {recentPostsMarkup}
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
