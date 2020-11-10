import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 1.8,
    borderColor: "#fff",
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
    color: "white",
    margin: 2,
    fontStyle: "italic",
  },
  artist: {
    fontSize: 13,
    fontWeight: "bold",
    backgroundColor: "white",
    color: "#007bff",
    padding: 5,
    borderRadius: 5,
  },
  caption: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
    color: "#007bff",
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
  },
});

export default styles;
