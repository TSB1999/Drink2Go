import React from "react";
import { Image, Text } from "react-native";
import styles from "./styles";

const Body = ({ trackID }) => (
  // <Text source={{ uri: imageUri }} style={styles.image}>
  <Text style={styles.image}>{trackID}</Text>
);

export default Body;
