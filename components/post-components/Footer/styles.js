import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  iconContainer2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  number: {
    marginLeft: 5,
    color: "#fff",
    textAlign: "center",
  },
  leftIcons: {
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
  },
  likes: {
    fontWeight: "bold",
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: "#21295c",
    margin: 3,
    textAlign: "right",
  },
});

export default styles;
