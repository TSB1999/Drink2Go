import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import styles from "./styles";
import { v4 as uuidv4 } from "uuid";

const Body = ({ thisTrack, caption, status }) => {
  let tracklist = thisTrack.track ? (
    thisTrack.track.map((track) => (
      <Text key={uuidv4()} style={styles.track}>
        {track}
      </Text>
    ))
  ) : (
    <Text>Loading</Text>
  );
  if (status === "Track") {
    return (
      // <Text source={{ uri: imageUri }} style={styles.image}>
      <View>
        <Image source={{ uri: thisTrack.image }} style={styles.image2} />
        <View>
          <Text style={styles.caption}>{caption}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{thisTrack.name}</Text>
          <Text style={styles.artist}>{thisTrack.artist}</Text>
        </View>

        <View style={{ flexDirection: "row", margin: 5 }}>
          <View>
            <Image source={{ uri: thisTrack.image }} style={styles.image} />
          </View>

          <View style={styles.block}>
            <ScrollView style={{ height: 150, borderRadius: 10 }}>
              {tracklist}
            </ScrollView>
          </View>
        </View>

        <View>
          <Text style={styles.caption}>{caption}</Text>
        </View>
      </View>
    );
  }
};

export default Body;
