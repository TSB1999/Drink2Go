import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
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
    alignItems: "flex-end",
    backgroundColor: "#fff",
    marginRight: 10,
  },
  track: {
    marginTop: 2,
    marginRight: 2,
    padding: 10,
    backgroundColor: "#007bff",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Arial",
  },
  name: {
    fontSize: 15,
    color: "#007bff",
    margin: 2,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  artist: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
    padding: 5,
    fontFamily: "Arial",
  },
  caption: {
    fontSize: 18,
    // fontWeight: "bold",
    backgroundColor: "#fff",
    color: "#007bff",
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    fontFamily: "Arial",
  },
});

export default styles;
