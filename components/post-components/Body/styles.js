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
    backgroundColor: "rgb(33,41,92)",
    backgroundColor:
      "linear-gradient(72deg, rgba(33,41,92,0.7497373949579832) 35%, rgba(0,123,255,1) 100%)",
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Arial",
    textAlign: "right",
    flexDirection: "row",
  },
  name: {
    fontSize: 15,
    color: "#007bff",
    margin: 2,
    fontFamily: "Arial",
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  artist: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
    padding: 5,
    fontFamily: "Arial",
  },
  caption: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007bff",
    padding: 5,
    fontFamily: "Arial",
  },
});

export default styles;
