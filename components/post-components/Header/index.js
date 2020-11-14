import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import ProfilePicture from "../../ProfilePicture";
import styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Header = ({ imageUri, name, postedAt }) => {
  dayjs.extend(relativeTime);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>
          {`${name}`}
          <Text style={{ color: "#CDEDF6" }}>
            {" "}
            ± {dayjs(postedAt).fromNow()}
          </Text>
        </Text>
      </View>

      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={16} color="#007bff" />
      </View>
    </View>
  );
};

export default Header;
