import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderWidth: 1.8,
    borderColor: "#fff",
    borderRadius: 10,
  },
  image2: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
  block: {
    flex: 1,
    justifyContent: "center",
  },
  postText: {
    fontSize: 25,
    textAlign: "center",
    fontStyle: "italic",
    color: "#B9FAF8",
    fontWeight: "bold",
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
  track: {
    marginBottom: 5,
    marginLeft: 5,
    padding: 10,
    backgroundColor: "#fff",
    fontSize: 15,
    borderRadius: 10,
    fontWeight: "bold",
    color: "grey",
  },
  name: {
    fontSize: 20,
    color: "#007bff",
    margin: 2,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  artist: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
  caption: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "white",
    color: "#21295c",
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
  },
});

export default styles;
