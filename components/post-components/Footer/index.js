import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styles from "./styles";
import axios from "axios";
import UserStore from "../../../stores/UserStore";
import { observer } from "mobx-react";

const Footer = ({
  likesCount: likesCountProp,
  caption,
  postedAt,
  commentCount,
  postID,
}) => {
  useEffect;
  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    setIsLike(!isLiked);
    if (!isLiked) {
      axios
        .get(
          `https://europe-west1-projectmelo.cloudfunctions.net/api/post/${postID}/like`,
          {
            headers: {
              Authorization: `Bearer ${UserStore.authCode}`, //the token is a variable which holds the token
            },
          }
        )
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          setIsLike(isLiked);
          setLikesCount(likesCount);
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://europe-west1-projectmelo.cloudfunctions.net/api/post/${postID}/unlike`,
          {
            headers: {
              Authorization: `Bearer ${UserStore.authCode}`, //the token is a variable which holds the token
            },
          }
        )
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          setIsLike(isLiked);
          setLikesCount(likesCount);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://europe-west1-projectmelo.cloudfunctions.net/api/user/liked`,
        {
          headers: {
            Authorization: `Bearer ${UserStore.authCode}`, //the token is a variable which holds the token
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        res.data.liked.map((post) => {
          if (post.postID == postID && post.meloID == post.username) {
            setIsLike(true);
          }
        });
      })
      .catch((err) => console.log(err));

    setLikesCount(likesCountProp);
  }, []);
  dayjs.extend(relativeTime);
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            <View style={styles.iconContainer2}>
              {isLiked ? (
                <ADIcon
                  name="heart"
                  size={25}
                  color={"#e73838"}
                  style={{ margin: 8 }}
                />
              ) : (
                <ADIcon
                  name="hearto"
                  size={25}
                  color={"#21295c"}
                  style={{ margin: 8 }}
                />
              )}
              {<Text style={styles.number}>{likesCount}</Text>}
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.iconContainer2}>
            <FontistoIcon
              name="comment"
              size={23}
              color={"#21295c"}
              style={{ margin: 8 }}
            />
            {commentCount == !0 && (
              <Text style={styles.number}>{commentCount}</Text>
            )}
          </View>

          <View style={styles.iconContainer2}>
            <FAIcon
              name="save"
              size={25}
              color={"#21295c"}
              style={{ margin: 8 }}
            />
          </View>
        </View>

        <View style={styles.iconContainer2}>
          <Feather
            name="send"
            size={25}
            color={"#21295c"}
            style={{ margin: 8 }}
          />
        </View>
      </View>

      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{dayjs(postedAt).fromNow()}</Text>
    </View>
  );
};

export default observer(Footer);
