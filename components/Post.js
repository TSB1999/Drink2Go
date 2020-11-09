import React, { Component } from "react";
import { View } from "react-native";

import Header from "./post-components/Header";
import Body from "./post-components/Body";
import Footer from "./post-components/Footer";
import UserStore from "../stores/UserStore";
import spotifyAPI from "./SpotifyAPI";

export class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profilePic: "",
    };
  }

  componentDidMount() {
    spotifyAPI
      .getUser(this.props.post.spotifyID)
      .then((response) => {
        this.setState({ profilePic: response.images[0].url });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <View
        style={{
          borderBottomWidth: 2,
          borderRadius: 10,
          borderColor: "#21295c",
        }}
      >
        <Header
          imageUri={this.state.profilePic}
          name={this.props.post.meloID}
        />
        <Body trackID={this.props.post.trackID} />
        <Footer
          likesCount={this.props.post.likeCount}
          commentCount={this.props.post.commentCount}
          caption={this.props.post.body}
          postedAt={this.props.post.createdAt}
          postID={this.props.post.postID}
        />
      </View>
    );
  }
}

export default Post;
