import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  Text,
  Button,
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
  const [data, setData] = React.useState({
    track: "",
  });

  const [refreshing, setRefreshing] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Content" },
    { key: "second", title: "Caption" },
    { key: "third", title: "Preview" },
  ]);

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

  const handleTrackChange = (val) => {
    setData(
      {
        ...data,
        track: val,
      }
      // () => {
      //   spotifyAPI.searchTracks(data.track).then(
      //     (data) => {
      //       console.log(data);
      //       // data.tracks.items.map((item) => (
      //       //     trackQuery = {
      //       //         id: item.id,
      //       //         title: item.name,
      //       //         artist: item.artists[0].name,
      //       //         artistID: item.artists[0].id,
      //       //         albumName: item.album.name,
      //       //         image: item.album.images[0].url,
      //       //         releaseDate: item.album.release_date,
      //       //         popularity: item.popularity,
      //       //         duration: item.duration_ms
      //       //     },
      //       //     this.setState({ searchTab: true }),
      //       //     this.setState({ song_title: [...this.state.song_title, trackQuery] }),
      //       //     this.setState({ song: '' })
      //       // ));
      //       // console.log(this.state.song_title);
      //     },
      //     function (err) {
      //       console.error(err);
      //     }
      //   );
      // }
    );
  };

  let recentPostsMarkup = UserStore.allPosts ? (
    UserStore.allPosts.map((post) => <Post key={post.postID} post={post} />)
  ) : (
    <Text>Loading</Text>
  );
  if (postScreen) {
    const [selectedValue, setSelectedValue] = React.useState("track");

    const FirstRoute = () => (
      <View style={[styles.scene, { backgroundColor: "#fff" }]}>
        <View style={styles.action}>
          <View style={{ margin: 10 }}>
            <TextInput
              placeholder="Search for music"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleTrackChange(val)}
              style
              value={data}
            />
          </View>
        </View>

        <View></View>
      </View>
    );

    const SecondRoute = () => (
      <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
    );

    const ThirdRoute = () => (
      <View style={[styles.scene, { backgroundColor: "#ff" }]} />
    );

    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
      third: ThirdRoute,
    });

    const initialLayout = { width: Dimensions.get("window").width };
    return (
      <Animatable.View animation="fadeInUpBig" style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Picker
            selectedValue={selectedValue}
            style={{ backgroundColor: "whitesmoke", borderRadius: 20 }}
          >
            <Picker.Item label="Lyric" value="lyric" />
            <Picker.Item label="Playlist" value="playlist" />
            <Picker.Item label="Track" value="track" />
            <Picker.Item label="Album" value="album" />
            <Picker.Item label="Artist" value="artist" />
          </Picker>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </Animatable.View>
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
