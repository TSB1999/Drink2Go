import React, { Component } from "react";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Button,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import Post from "../components/Post";
import UserStore from "../stores/UserStore";
import { observer } from "mobx-react";

class LoadingPage extends Component {
  componentDidMount() {
    // axios
    //   .get("https://europe-west1-projectmelo.cloudfunctions.net/api/posts")
    //   .then((res) => {
    //     // console.log(res.data);
    //     UserStore.allPosts = res.data;
    //   })
    //   .catch((err) => console.log(err));

    // console.log(UserStore.spotifyUserDetails.access_token);

    // axios
    //   .get("https://europe-west1-projectmelo.cloudfunctions.net/api/user", {
    //     headers: {
    //       Authorization: `Bearer ${UserStore.authCode}`, //the token is a variable which holds the token
    //     },
    //   })
    //   .then((res) => {
    //     UserStore.userDetails = res.data;
    //     // console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));

    UserStore.loading = false;
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Loading</Text>
      </SafeAreaView>
    );
  }
}

export default observer(LoadingPage);
